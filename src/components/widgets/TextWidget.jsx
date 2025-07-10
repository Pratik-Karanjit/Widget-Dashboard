import React from 'react';

const TextWidget = ({ content }) => {
    return (
        <div className="p-4 bg-white rounded shadow">
            <p className="text-gray-800">{content}</p>
        </div>
    );
};

export default TextWidget;