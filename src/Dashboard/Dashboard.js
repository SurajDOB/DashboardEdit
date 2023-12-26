import React, { useState } from 'react';
import './Dashboard.css';
import ProfilePage from './ProfilePage'; // Assuming you create a separate ProfilePage component
import AttendancePage from './AttendancePage'; // Import the AttendancePage component

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lectures, setLectures] = useState([
    { id: 'lec1', teacher: 'Mr. Aditya', subject: 'ML', time: '10:00 AM', venue: 'Harware Lab' },
    { id: 'lec2', teacher: 'Ms. Beena', subject: 'CSF', time: '12:00 PM', venue: '1 Law' },
    { id: 'lec3', teacher: 'Ms. Geeta', subject: 'BDA', time: '2:00 PM', venue: 'Cs Lab' },
  ]);

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

      <div className={`content-area ${isMenuOpen ? 'open' : ''}`}>
        {selectedItem === 'Profile' && <ProfilePage />}
        {selectedItem === 'Attendance' && <AttendancePage />} {/* Display AttendancePage when 'Attendance' is selected */}
        {selectedItem && selectedItem !== 'Profile' && selectedItem !== 'Attendance' && (
          <div className="content">
            {selectedItem === 'Lectures' && (
              <div className="lecture-content">
                {lectures.map(lecture => (
                  <div key={lecture.id} className="lecture-item">
                    <h3>{lecture.subject}</h3>
                    <p>Teacher: {lecture.teacher}</p>
                    <p>Time: {lecture.time}</p>
                    <p>Venue: {lecture.venue}</p>
                  </div>
                ))}
              </div>
            )}
            {`CODE HERE for ${selectedItem}`}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
