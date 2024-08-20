import React, { useState } from 'react';
import Filter from './Filter';
import EventList from './EventList';
import eventsData from './events';

const Home = () => {
  const [sport, setSport] = useState('');
  const [date, setDate] = useState('');

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'sport') setSport(value);
    if (filterType === 'date') setDate(value);
  };

  const filteredEvents = eventsData.filter((event) => {
    return (
      (!sport || event.sport === sport) &&
      (!date || event.date === date)
    );
  });

  return (
    <div>
      <Filter sport={sport} date={date} onFilterChange={handleFilterChange} />
      <EventList events={filteredEvents} />
    </div>
  );
};

export default Home;
