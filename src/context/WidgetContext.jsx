import React, { createContext, useEffect, useReducer, useRef } from 'react';
import { widgetConfig } from '../config';

export const WidgetContext = createContext();

const widgetReducer = (state, action) => {
    switch (action.type) {
        case 'INIT':
            return action.payload;
        case 'ADD':
            return [...state, action.payload];
        case 'REMOVE':
            return state.filter(widget => widget.id !== action.payload);
        case 'REORDER':
            const updated = [...state];
            const [moved] = updated.splice(action.payload.from, 1);
            updated.splice(action.payload.to, 0, moved);
            return updated;
        default:
            return state;
    }
};

export const WidgetProvider = ({ children }) => {
    const isFirstLoad = useRef(true);
    const [widgets, dispatch] = useReducer(widgetReducer, []);

    useEffect(() => {
        const saved = localStorage.getItem('widgets');
        const initialWidgets = saved ? JSON.parse(saved) : widgetConfig;
        dispatch({ type: 'INIT', payload: initialWidgets });
    }, []);

    useEffect(() => {
        if (isFirstLoad.current) {
            isFirstLoad.current = false;
            return;
        }
        localStorage.setItem('widgets', JSON.stringify(widgets));
    }, [widgets]);

    const addWidget = (type) => {
        const newWidget = {
            id: `widget-${Date.now()}`,
            type,
            content: type === 'text' ? 'This month has shown exceptional growth across all key metrics. Our marketing campaigns have driven a 25% increase in user acquisition, while customer satisfaction scores have reached an all-time high of 4.8/5. This marks the highest growth rate in our company history.' : undefined,
            chartType: type === 'chart' ? 'line' : undefined,
            dataSource: ['chart', 'table', 'metric'].includes(type) ? 'demoData' : undefined,
            metricLabel: type === 'metric' ? 'Users' : undefined,
            value: type === 'metric' ? '1,200' : undefined,
            columns: type === 'table' ? ['Name', 'Score', 'Age'] : undefined,
            rows: type === 'table' ? [['Alice', 22, 35], ['Bob', 24, 35], ['Sita', 35, 22]] : undefined,
            status: type === 'text' ? 'Important' : undefined,
            department: type === 'text' ? 'Sales' : undefined,
            position: { x: 0, y: 0 },
        };
        dispatch({ type: 'ADD', payload: newWidget });
    };

    const removeWidget = (id) => {
        dispatch({ type: 'REMOVE', payload: id });
    };

    const reorderWidgets = (from, to) => {
        dispatch({ type: 'REORDER', payload: { from, to } });
    };

    return (
        <WidgetContext.Provider value={{ widgets, addWidget, removeWidget, reorderWidgets }}>
            {children}
        </WidgetContext.Provider>
    );
};
