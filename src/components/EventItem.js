import React, {useState} from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const EventItem = (props) => {
  const { event } = props;
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const eventsInitial = [];

  const [events, setEvents] = useState(eventsInitial);

  const host = "http://localhost:5000";
  //Delete Note
  const deleteEvent = async (id) => {
    //Todo: API Call
    const response = await fetch(`${host}/delete/event/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(json);
    const newEvent = events.filter((event) => {
      return event._id !== id;
    });
    setEvents(newEvent);
  };


  const updateEvent = async (id, updatedEventData) => {
    // Todo: API Call
    const response = await fetch(`${host}/update/event/${id}`, {
      method: "PUT", // Use PUT method for update
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedEventData), // Send updated data in the request body
    });
    const json = await response.json();
    console.log(json);
    // Assuming 'events' is the list of events in your state
    const updatedEvents = events.map((event) => {
      if (event._id === id) {
        // If the event ID matches the updated event ID, return the updated event
        return { ...event, ...updatedEventData };
      } else {
        // Otherwise, return the original event
        return event;
      }
    });
    setEvents(updatedEvents); // Update the events state with the updated list
  };

  return (
    <div className="col-md-4">
      <ThemeProvider theme={darkTheme}>
        <Box sx={{ minWidth: 275 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                {event.eventName}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Location: {event.eventLocation}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Date: {event.eventDate.slice(0, 10)}
              </Typography>
              <Typography variant="body2">{event.eventDescription}</Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => {
                  deleteEvent(event._id);
                  props.showAlert("Event deleted successfully.", "success");
                }}
              >
                Delete
              </Button>
              <Button
                size="small"
                onClick={() => {
                  UpdateEvent(event._id);
                  props.showAlert("Event deleted successfully.", "success");
                }}
              >
                Update
              </Button>
            </CardActions>
          </Card>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default EventItem;
