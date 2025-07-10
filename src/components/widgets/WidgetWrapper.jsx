import React from 'react';

const WidgetWrapper = ({ children }) => {
    return (
        <div className="border border-gray-200 rounded-lg shadow bg-white p-4">
            {children}
        </div>
    );
};

export default WidgetWrapper;