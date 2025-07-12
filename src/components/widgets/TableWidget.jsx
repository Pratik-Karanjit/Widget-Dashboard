import { X } from 'lucide-react';
import React from 'react';
import { FiGrid } from 'react-icons/fi';
import { ImCross } from 'react-icons/im';

const TableWidget = ({ columns = [], rows = [], onRemove }) => {
    return (
        <div className="p-5 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 relative group overflow-hidden"
            style={{ height: '250px' }}>
            <button
                onClick={onRemove}
                className="absolute top-2 right-2 p-1 rounded-full text-gray-400 hover:bg-black hover:text-white transition-all duration-200 opacity-0 group-hover:opacity-100 cursor-pointer"
                aria-label="Remove widget"
            >
                <X className="h-4 w-4" />
            </button>

            <div className="h-full flex flex-col">
                <div className="overflow-x-auto flex-grow">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                {columns.map((col, i) => (
                                    <th
                                        key={i}
                                        scope="col"
                                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        {col}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {rows.map((row, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    {row.map((cell, j) => (
                                        <td key={j} className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                                            {cell}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-3 flex justify-end items-center text-xs text-gray-500">
                    <span>{rows.length} records</span>
                </div>
            </div>
        </div>
    );
};

export default React.memo(TableWidget);