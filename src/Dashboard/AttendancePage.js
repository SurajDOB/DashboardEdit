// AttendancePage.js

import React, { useState, useEffect } from 'react';

const AttendancePage = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  useEffect(() => {
    // Fetch attendance records from the backend
    // For demonstration, I'm using a mock API call
    fetch('/api/attendance')
      .then(response => response.json())
      .then(data => setAttendanceRecords(data))
      .catch(error => console.error("Error fetching attendance records:", error));
  }, []);

  return (
    <div>
      <h2>Attendance Records</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Subject</th>
            <th>Teacher</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceRecords.map(record => (
            <tr key={record.id}>
              <td>{record.date}</td>
              <td>{record.subject}</td>
              <td>{record.teacher}</td>
              <td>{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendancePage;
