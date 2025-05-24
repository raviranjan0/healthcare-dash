import React from 'react';
import { FiSearch, FiBell, FiPlus } from 'react-icons/fi';
import '../Styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="header-title">Healthcare.</h1>
      </div>

      <div className="header-right">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
          />
          <FiSearch className="search-icon" />
        </div>

        <div className="notification">
          <FiBell className="bell-icon" />
          <span className="notification-badge">3</span>
        </div>

        <button className="add-button">
          <FiPlus />
        </button>

        <div className="profile-container">
          <div className="profile-pic">
            <img src="/dp.png.jpg" alt="DP" className="profile-img" />
          </div>
          <div className="profile-info">
            <p className="profile-name">Dr. Raviranjan Kr. singh</p>
            <p className="profile-role">Cardiologist</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
