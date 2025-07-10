import React from 'react';
import TextWidget from './widgets/TextWidget';
import ChartWidget from './widgets/ChartWidget';

const WidgetRenderer = ({ widget }) => {
    switch (widget.type) {
        case 'text':
            return <TextWidget {...widget} />;
        case 'chart':
            return <ChartWidget {...widget} />;
        default:
            return <div className="p-4 bg-red-100">Unknown widget type: {widget.type}</div>;
    }
};

export default WidgetRenderer;