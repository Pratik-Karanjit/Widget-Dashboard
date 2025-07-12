import { X } from 'lucide-react';
import React from 'react';
import { CgCross } from 'react-icons/cg';
import { FaCross } from 'react-icons/fa';
import { FiBarChart2 } from 'react-icons/fi';
import { ImCross } from 'react-icons/im';

const ChartWidget = ({ chartType, dataSource, onRemove }) => {
    const chartColors = {
        bar: 'bg-blue-100 border-blue-200',
        line: 'bg-green-100 border-green-200',
        pie: 'bg-purple-100 border-purple-200',
        default: 'bg-gray-100 border-gray-200'
    };

    return (
        <div className={`p-5 rounded-xl border ${chartColors[chartType] || chartColors.default} shadow-sm hover:shadow-md transition-shadow duration-200 relative group`}
            style={{ height: '250px' }}>
            <button
                onClick={onRemove}
                className="absolute top-2 right-2 p-1 rounded-full text-gray-400 hover:bg-black hover:text-white transition-all duration-200 opacity-0 group-hover:opacity-100 cursor-pointer"
                aria-label="Remove widget"
            >
                <X className="h-4 w-4" />
            </button>

            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800 capitalize">{chartType} Chart</h2>
                <span className="text-xs px-2 py-1 mx-2 rounded-full bg-white text-gray-600 border border-gray-200">
                    {dataSource}
                </span>
            </div>

            <div className={`h-40 rounded-lg ${chartColors[chartType] || chartColors.default} flex items-center justify-center`}>
                <div className="text-center">
                    <FiBarChart2 className="mx-auto text-4xl text-gray-400" />
                    <p className="text-xs text-gray-500 mt-2">{chartType} visualization</p>
                </div>
            </div>

            {/* <div className="mt-3 flex justify-between items-center text-xs text-gray-500">
                <span>Updated just now</span>
                <button className="text-blue-600 hover:text-blue-800">View details</button>
            </div> */}
        </div>
    );
};

export default React.memo(ChartWidget);