// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css'; // Add your custom CSS here

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src="doctor-avatar.png" alt="Doctor" className="avatar" />
        <h4>Doctor</h4>
      </div>
      <ul>
        <li>Edit Profile</li>
        <li>Approval Status</li>
        <li>Your Schedule</li>
        <li>Doctor List</li>
        <li>Patients</li>
        <li>Appointments</li>
        <li>Add Prescriptions</li>
      </ul>
    </div>
  );
};

export default Sidebar;
