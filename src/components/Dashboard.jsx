import React from 'react';
import WidgetRenderer from './WidgetRenderer';

const Dashboard = ({ widgets, setWidgets }) => {
    return (
        <div className="grid grid-cols-2 gap-4">
            {widgets.map((widget) => (
                <WidgetRenderer key={widget.id} widget={widget} />
            ))}
        </div>
    );
};

export default Dashboard;