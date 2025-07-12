import React from 'react';
import { FiTrendingUp } from 'react-icons/fi';
import { ImCross } from 'react-icons/im';
import { TrendingUp, X } from 'lucide-react';

const MetricWidget = ({ metricLabel, value, onRemove }) => {
    return (
        <div className="p-5 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 relative group"
            style={{ height: '250px' }}>
            <button
                onClick={onRemove}
                className="absolute top-2 right-2 p-1 rounded-full text-gray-400 hover:bg-black hover:text-white transition-all duration-200 opacity-0 group-hover:opacity-100 cursor-pointer"
                aria-label="Remove widget"
            >
                <X className="h-4 w-4" />
            </button>

            <div className="h-full flex flex-col justify-between">
                <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">{metricLabel}</h3>
                    <p className="text-3xl font-bold text-gray-800 mb-3">{value}</p>
                </div>

                <div className="flex items-center text-sm">
                    <span className="flex items-center text-green-600">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        12.5%
                    </span>
                    <span className="text-gray-400 ml-2">vs last month</span>
                </div>
            </div>
        </div>
    );
};

export default React.memo(MetricWidget);