import React from 'react';

const ProfilePage = () => {
  // Sample data, you'll replace this with data fetched from your backend
  const profileData = {
    name: "Suraj Kahar",
    email: "surka07@example.com",
    rfid: "RFID123456"
  };

  return (
    <div className="profile-container">
      <h2>Profile Information</h2>
      <div><strong>Name:</strong> {profileData.name}</div>
      <div><strong>Email:</strong> {profileData.email}</div>
      <div><strong>RFID Number:</strong> {profileData.rfid}</div>
      {/* You can add more profile fields here */}
    </div>
  );
};

export default ProfilePage;
