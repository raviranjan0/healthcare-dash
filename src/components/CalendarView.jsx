import React from 'react';
import AppointmentCard from './AppointmentCard';

// Import CSS here
import '../styles/CalendarView.css';

const CalendarView = () => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const appointmentDays = [8, 12, 17, 23, 28];

  const appointments = [
    {
      id: 1,
      title: 'Dentist',
      doctor: 'Dr. Robert Miles',
      time: '09:00 - 10:00',
      type: 'dental',
    },
    {
      id: 2,
      title: 'Physiotherapy Appointment',
      doctor: 'Dr. Maria Garcia',
      time: '14:30 - 15:30',
      type: 'physio',
    },
  ];

  const getTimeLabel = (day) => {
    return day % 3 === 0 ? '09:00' : day % 2 === 0 ? '11:00' : '14:30';
  };

  return (
    <div className="calendar-container">
      {/* Header */}
      <div className="calendar-header">
        <h3 className="calendar-title">October 2021</h3>
        <div className="calendar-nav">
          <button className="nav-btn">
            <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="nav-btn">
            <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Weekday Headers */}
      <div className="calendar-weekdays">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <div key={index} className="weekday">{day}</div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="calendar-grid">
        {days.map((day) => {
          const hasAppointment = appointmentDays.includes(day);
          const isToday = day === 17;

          return (
            <div
              key={day}
              className={`calendar-day ${hasAppointment ? 'has-appointment' : ''} ${isToday ? 'today' : ''}`}
            >
              <span className={`day-number ${isToday ? 'today-number' : ''}`}>{day}</span>
              {hasAppointment && (
                <div className="appointment-time-label">{getTimeLabel(day)}</div>
              )}
            </div>
          );
        })}
      </div>

      {/* Appointment Cards */}
      <div className="appointment-list">
        {appointments.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            title={appointment.title}
            doctor={appointment.doctor}
            time={appointment.time}
            type={appointment.type}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
