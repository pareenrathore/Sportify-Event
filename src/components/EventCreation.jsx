import React from "react";
import "./EventCreation.css";

const Create = () => {
    return (
        
        <div class="container">
            <h1>Create Event</h1>
            <div>
                <label for="eventName">Event Name:</label>
                <input type="text" id="eventName" name="eventName" required></input>
                <br />

                <label for="eventDate">Event Date:</label>
                <input type="date" id="eventDate" name="eventDate" required></input>
                <br />

                <label for="eventLocation">Event Location:</label>
                <input type="text" id="eventLocation" name="eventLocation" required></input>
                <br />

                <label for="eventDescription">Event Description:</label>
                <textarea id="eventDescription" name="eventDescription" rows="4" required></textarea>
                <br />

                <button type="submit">Create Event</button>
            </div>
        </div>
    );
};

export default Create;