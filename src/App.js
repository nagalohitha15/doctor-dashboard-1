import React from "react";
import "./App.css"; // Global styles
import './Card.css';
import './Sidebar.css';
import './dashboard.css';
import './components/header.css';
import Sidebar from "./Sidebar.js";  // Import Sidebar component
import Dashboard from "./dashboard.js";  // Import Dashboard component
import Header from "./components/header.js";  // Import Header component

const App = () => {
  return (
    <div className="app">
      <Sidebar /> {/* Sidebar on the left */}
      <div className="main-content">
        <Header /> {/* Header on top */}
        <div className="page-content">
          <Dashboard /> {/* Main content of the dashboard */}
        </div>
      </div>
    </div>
  );
};

export default App;




