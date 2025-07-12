import { X } from 'lucide-react';
import React from 'react';

const TextWidget = ({ title, content, status, department, onRemove }) => {
    return (
        <div className="p-5 rounded-xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 shadow-sm hover:shadow-md transition-shadow duration-200 relative group"
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
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
                    <div className="prose prose-sm max-w-none max-h-[150px] overflow-y-auto">
                        <p className="text-gray-700 leading-relaxed">{content}</p>
                    </div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-400 mt-3">
                    <span>{department}</span>
                    <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">{status}</span>
                </div>
            </div>
        </div>
    );
};

export default React.memo(TextWidget);