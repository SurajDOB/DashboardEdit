import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentURL = window.location.href;
  console.log(currentURL);

//   if (currentURL.includes('dasboard')){
//     const navbar=document.getElementsByClassName('.navbar');
//     navbar.classList.add('hide-navbar');
//   }

  const handleMenuClick = () => {
    const newIsMenuOpen = !isMenuOpen;
    setIsMenuOpen(newIsMenuOpen);
    console.log('handleMenuClick called. isMenuOpen:', newIsMenuOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="dashboard-container">
      <button className="menu-button" onClick={handleMenuClick}>
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`}></div>
      </button>
      {isMenuOpen && (
        <div className="dashboard-items">
          <div className="item" onClick={() => handleItemClick('Profile')}>Profile</div>
          <div className="item" onClick={() => handleItemClick('Attendance')}>Attendance</div>
          <div className="item" onClick={() => handleItemClick('Lectures')}>Lectures</div>
          <div className="item" onClick={() => handleItemClick('Credit Points')}>Credit Points</div>
          <div className="item" onClick={() => handleItemClick('Pay')}>Pay</div>
          <div className="item" onClick={() => handleItemClick('Logout')}>Logout</div>
        </div>
      )}
      <div className="content-area">
        {selectedItem && <div className="content">{`CODE HERE for ${selectedItem}`}</div>}
      </div>
    </div>
  );
};

export default Dashboard;
