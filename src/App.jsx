import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';

const appStyles = {
  container: {
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#f9fafb', // similar to Tailwind's bg-gray-50
  },
  mainWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    overflow: 'hidden',
  },
  mainContent: {
    flex: 1,
    overflowY: 'auto',
    padding: '24px', // 6 * 4px (tailwind default spacing)
    backgroundColor: '#f9fafb',
  },
};

function App() {
  return (
    <div style={appStyles.container}>
      <Sidebar />
      <div style={appStyles.mainWrapper}>
        <Header />
        <main style={appStyles.mainContent}>
          <DashboardMainContent />
        </main>
      </div>
    </div>
  );
}

export default App;
