import React from 'react';

const Filter = ({ sport, date, onFilterChange }) => {
  return (
    <div className="filter">
      <select value={sport} onChange={(e) => onFilterChange('sport', e.target.value)}>
        <option value="">All Sports</option>
        {['Football', 'Basketball', 'Cricket', 'Tennis', 'Hockey', 'Badminton', 'Table Tennis', 'Volleyball', 'Rugby', 'Swimming', 'Baseball', 'Boxing', 'Wrestling', 'Athletics'].map((sport) => (
          <option key={sport} value={sport}>{sport}</option>
        ))}
      </select>

      <input
        type="date"
        value={date}
        onChange={(e) => onFilterChange('date', e.target.value)}
      />
    </div>
  );
};

export default Filter;
