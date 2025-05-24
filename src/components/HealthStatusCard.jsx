import React from 'react';

// Import CSS here
import '../Styles/HealthStatusCard.css';

const HealthStatusCard = ({ title, date, status, percentage, icon }) => {
  const getStatusColorClass = (status) => {
    switch (status) {
      case 'good':
        return 'status-healthyGreen';
      case 'warning':
        return 'status-warningRed';
      case 'caution':
        return 'status-cautionOrange';
      default:
        return 'status-defaultGray';
    }
  };

  return (
    <div className="health-card">
      <div className="health-card-header">
        <span className="health-icon" role="img" aria-label={title}>
          {icon}
        </span>
        <h3 className="health-title">{title}</h3>
      </div>

      <div className="health-date">Date: {date}</div>

      <div className="health-status-bar">
        <div
          className={`status-indicator ${getStatusColorClass(status)}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default HealthStatusCard;
