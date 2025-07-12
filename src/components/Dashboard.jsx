import React, { useCallback, useContext, useRef } from 'react';
import { WidgetContext } from '../context/WidgetContext';
import WidgetRenderer from './WidgetRenderer';

const Dashboard = () => {
    const { widgets, removeWidget, reorderWidgets } = useContext(WidgetContext);
    const dragItem = useRef();
    const dragOverItem = useRef();

    const handleDragStart = (index) => {
        dragItem.current = index;
    };

    const handleDragEnter = (index) => {
        dragOverItem.current = index;
    };

    const handleDragEnd = () => {
        const from = dragItem.current;
        const to = dragOverItem.current;
        if (from !== to) {
            reorderWidgets(from, to);
        }
        dragItem.current = null;
        dragOverItem.current = null;
    };

    const handleRemove = useCallback((id) => {
        removeWidget(id);
    }, [removeWidget]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
            {widgets.map((widget, index) => (
                <div
                    key={widget.id}
                    draggable
                    onDragStart={() => handleDragStart(index)}
                    onDragEnter={() => handleDragEnter(index)}
                    onDragEnd={handleDragEnd}
                    className="transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg"
                >
                    <WidgetRenderer
                        widget={widget}
                        onRemove={() => handleRemove(widget.id)}
                    />
                </div>
            ))}
        </div>
    );
};

export default Dashboard;