import React, {useState} from "react";
import './Events.css';

const Events = () =>{
    const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

    return(
        <div>
            <div class="EventCard">
                <h2>Add Event Details</h2>
                <form>
                    <label>
                       Event:
                       <textarea type="text" value={name} onChange={handleNameChange} />
                    </label>

                     <label>
                        Location:
                        <textarea value={Location} onChange={handleDescriptionChange} />
                    </label>

                    <label>
                        Description:
                        <textarea value={description} onChange={handleDescriptionChange} />
                    </label>
                </form>
            </div>
        </div>
    );
};

export default Events;