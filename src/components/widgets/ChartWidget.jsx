import React from 'react';

const ChartWidget = ({ chartType, dataSource }) => {
    return (
        <div className="p-4 bg-white rounded shadow">
            <h2 className="font-semibold mb-2">Chart: {chartType}</h2>
            <p className="text-sm text-gray-600">(Data from: {dataSource})</p>
            <div className="h-32 bg-gray-200 rounded mt-2 flex items-center justify-center">
                <span className="text-gray-500">[Placeholder for {chartType} chart]</span>
            </div>
        </div>
    );
};

export default ChartWidget;