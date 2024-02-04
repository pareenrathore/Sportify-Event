import React, { useState } from "react";
import "./Events.css";
import Typography from "@mui/material/Typography";
import EventItem from "./EventItem";

const Events = (props) => {
  const eventsInitial = [];
  const [events, setEvents] = useState(eventsInitial);

  const host = "http://localhost:5000";

  //Get all note
  const getEvents = async () => {
    // API Call
    const response = await fetch(`${host}/get/events`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setEvents(json);
  };

  getEvents();

  return (
    <div>
      {events.length === 0 ? (
        <Typography variant="h5" component="div">
          Start adding events right away
        </Typography>
      ) : (
        <Typography variant="h5" component="div">
          Listed Events
        </Typography>
      )}
      <div className="notes-cards-column">
        <div className="container">
          <div className="notes-cards-column">
            {events.map((event) => {
              return (
                <EventItem
                  key={event._id}
                  //   updateNote={updateNote}
                  showAlert={props.showAlert}
                  event={event}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
