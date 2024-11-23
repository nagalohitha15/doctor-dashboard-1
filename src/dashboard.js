// src/components/Dashboard.js
import React from 'react';
import Sidebar from './Sidebar';
import Header from './components/header';
import Card from './Card';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main">
        <Header />
        <div className="content">
          <h1>Welcome to HealthCare Management System Doctor Dashboard</h1>
          <div className="card-container">
            <Card title="Prescriptions" count="2 medications" icon="📝" bgColor="#007bff" />
            <Card title="Total Doctors" count="3 doctors" icon="👨‍⚕️" bgColor="#28a745" />
            <Card title="Total Patients" count="3 patients" icon="👥" bgColor="#ffc107" />
            <Card title="Total Slots" count="3 slots" icon="📅" bgColor="#6c757d" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
