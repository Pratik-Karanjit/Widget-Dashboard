import React, { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';
import { widgetConfig } from './config';

const App = () => {
  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    setWidgets(widgetConfig); // Initial load from config.js
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Widget Dashboard</h1>
      <Dashboard widgets={widgets} setWidgets={setWidgets} />
    </div>
  );
};

export default App;