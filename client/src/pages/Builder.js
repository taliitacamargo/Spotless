
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_EVENT } from '../utils/mutations';


const Builder = () => {
  const date = new Date();
  const [formState, setFormState] = useState({
    date: date.toISOString(),
    time: date.toISOString(),
    title: '',
    description: '',
    location: '',
  });
  const [createEvent] = useMutation(CREATE_EVENT);
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    createEvent({ variables: formState });
  }
  return (
    <div className="container eventCont">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center">Create Event</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input

                type="date"
                className="form-control editTxt"
                id="date"
                name="date"
                value={formState.date}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input  
                type="time"
                className="form-control"
                id="time"
                name="time"
                value={formState.time}
                onChange={handleChange}
              />
            </div>
         
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input 

                type="text"
                className="form-control"
                id="title"
                name="title"
                value={formState.title}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={formState.description}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input

                type="text"
                className="form-control editTxt"
                id="location"
                name="location"
                value={formState.location}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary ">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Builder;