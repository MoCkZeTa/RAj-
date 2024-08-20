import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h3>{event.sport}</h3>
      <p className="teams">Teams: {event.teams}</p>
      <p className="time">Time: {event.time}</p>
      <p className="location">Location: {event.location}</p>
    </div>
  );
};

export default EventCard;
