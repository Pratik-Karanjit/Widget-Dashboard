import React from 'react';
import { TrendingUp, X, ArrowUpRight, Clock, BarChart2, User, Users, Folder } from 'lucide-react';

const MetricWidget = ({ metricLabel, value, onRemove }) => {
    console.log("metric label:", metricLabel);
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
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">{metricLabel}</h3>
                        <button className="text-gray-400 hover:text-gray-600 p-1">
                            <ArrowUpRight className="h-4 w-4" />
                        </button>
                    </div>

                    <div className='flex flex-row justify-between items-center'>
                        {metricLabel?.toLowerCase().includes('users') ? <Users className="h-6 w-6 text-gray-400 mb-2" /> : <Folder className="h-6 w-6 text-gray-400 mb-2" />}
                        <p className="text-3xl font-bold text-gray-800 mb-4">{value}</p>
                    </div>

                    <div className="flex items-center justify-between gap-4 mb-4">
                        <div className="flex items-center text-sm bg-blue-50 px-3 py-1.5 rounded-lg">
                            <TrendingUp className="h-4 w-4 mr-2 text-blue-600" />
                            <span className="text-blue-600 font-medium">12.5%</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>Last 30 days</span>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex justify-between items-center text-xs text-gray-500 mb-1">
                        <span>Progress</span>
                        <span>75% of target</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: '75%' }}
                        ></div>
                    </div>
                    <div className="flex justify-between mt-2">
                        <div className="flex items-center text-xs text-gray-500">
                            <BarChart2 className="h-3 w-3 mr-1" />
                            <span>Trending up</span>
                        </div>
                        <span className="text-xs font-medium text-green-600">+24 new</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(MetricWidget);