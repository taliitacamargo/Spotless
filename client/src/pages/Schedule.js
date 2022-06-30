import React from "react";
import { useLocation, useHistory } from "react-router-dom";



const CalendarModal = ({
  show,
  onClose,
  onSubmit,
  onChange,
  formState,
  title,
  description,
  date,
  time,
  handleChange,
  handleSubmit,
  // location: { pathname },
  selectedEvent,
  handleEventClick,
  handleEventDelete,
  handleEventEdit,
  handleEventAdd,
}) => {
  const location = useLocation();
  const history = useHistory();


  return (

    
    <div className="modal fade" id="calendarModal" tabIndex="-1" role="dialog" aria-labelledby="calendarModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="calendarModalLabel">
              {title}
            </h5>
            <button
              type="button"
              className="close"
              onClick={onClose}
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  className="form-control editTxt"
                  id="date"
                  name="date"
                  // value={formState.date}
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
                  // value={formState.time}
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
                  // value={formState.title}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  // value={formState.description}
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
                  // value={formState.location}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary ">
                Submit
              </button>
            </form>
          </div>
          <div className="modal-footer">
            <button

              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default CalendarModal;



