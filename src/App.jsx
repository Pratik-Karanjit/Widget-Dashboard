import React, { useContext } from 'react';
import { FiPlus, FiBarChart2, FiType, FiTrendingUp, FiGrid } from 'react-icons/fi';
import Dashboard from './components/Dashboard';
import { WidgetContext } from './context/WidgetContext';

const App = () => {
  const { addWidget } = useContext(WidgetContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6 font-sans">
      <div className="w-full mx-auto">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Dashboard Builder</h1>
          <p className="text-lg text-gray-600">Create your custom analytics dashboard</p>
        </header>

        {/* Widget Selection Panel */}
        <div className="mb-8 p-6 bg-white rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
            <FiPlus className="mr-2 text-blue-600" size={24} />
            Add Widgets
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {/* Chart Widget Button */}
            <button
              onClick={() => addWidget('chart')}
              className="group p-4 bg-white rounded-xl border-2 border-blue-100 hover:border-blue-300 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-lg mb-3 flex items-center justify-center">
                <FiBarChart2 className="text-blue-600" size={28} />
              </div>
              <span className="font-medium text-gray-800">Chart</span>
              <span className="text-xs text-gray-500 mt-1">6×4</span>
            </button>

            {/* Text Widget Button */}
            <button
              onClick={() => addWidget('text')}
              className="group p-4 bg-white rounded-xl border-2 border-purple-100 hover:border-purple-300 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-purple-50 rounded-lg mb-3 flex items-center justify-center">
                <FiType className="text-purple-600" size={28} />
              </div>
              <span className="font-medium text-gray-800">Text Block</span>
              <span className="text-xs text-gray-500 mt-1">4×2</span>
            </button>

            {/* Metric Widget Button */}
            <button
              onClick={() => addWidget('metric')}
              className="group p-4 bg-white rounded-xl border-2 border-green-100 hover:border-green-300 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-green-50 rounded-lg mb-3 flex items-center justify-center">
                <FiTrendingUp className="text-green-600" size={28} />
              </div>
              <span className="font-medium text-gray-800">Metric</span>
              <span className="text-xs text-gray-500 mt-1">3×2</span>
            </button>

            {/* Table Widget Button */}
            <button
              onClick={() => addWidget('table')}
              className="group p-4 bg-white rounded-xl border-2 border-amber-100 hover:border-amber-300 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-amber-50 rounded-lg mb-3 flex items-center justify-center">
                <FiGrid className="text-amber-600" size={28} />
              </div>
              <span className="font-medium text-gray-800">Table</span>
              <span className="text-xs text-gray-500 mt-1">8×4</span>
            </button>
          </div>
        </div>

        {/* Dashboard Area */}
        <Dashboard />
      </div>
    </div>
  );
};

export default App;