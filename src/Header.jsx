import React from 'react';
import spardhaLogo from './spardha-log.png';

const Header = () => {
    return (
      <header>
      <img src={spardhaLogo} alt="Spardha Logo" style={{ width: '150px' }} />
      <h1>Spardha Sports Event Scheduler</h1>
  </header>
  
    );
};

export default Header;
