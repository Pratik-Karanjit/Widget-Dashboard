// // context/WidgetContext.jsx
// import React, { createContext, useState, useEffect, useRef } from 'react';
// import { widgetConfig } from '../config';

// export const WidgetContext = createContext();

// export const WidgetProvider = ({ children }) => {
//     const [widgets, setWidgets] = useState([]);
//     const isFirstLoad = useRef(true); // <-- ADD THIS

//     useEffect(() => {
//         const saved = localStorage.getItem('widgets');
//         setWidgets(saved ? JSON.parse(saved) : widgetConfig);
//     }, []);


//     useEffect(() => {
//         if (isFirstLoad.current) {
//             isFirstLoad.current = false; // Don't write to localStorage on first load
//             return;
//         }
//         localStorage.setItem('widgets', JSON.stringify(widgets));
//     }, [widgets]);

//     const addWidget = (type) => {
//         const newWidget = {
//             id: `widget-${Date.now()}`,
//             type,
//             content: type === 'text' ? 'New Text Widget' : undefined,
//             chartType: type === 'chart' ? 'line' : undefined,
//             dataSource:
//                 type === 'chart' || type === 'table' || type === 'metric'
//                     ? 'demoData'
//                     : undefined,
//             metricLabel: type === 'metric' ? 'Active Users' : undefined,
//             value: type === 'metric' ? '1,024' : undefined,
//             columns: type === 'table' ? ['Name', 'Age'] : undefined,
//             rows: type === 'table' ? [['Alice', 24], ['Bob', 27]] : undefined,
//             position: { x: 0, y: 0 },
//         };

//         setWidgets((prev) => [...prev, newWidget]);
//     };


//     const removeWidget = (id) => {
//         setWidgets((prev) => prev.filter((widget) => widget.id !== id));
//     };

//     const reorderWidgets = (fromIndex, toIndex) => {
//         setWidgets((prev) => {
//             const updated = [...prev];
//             const [moved] = updated.splice(fromIndex, 1);
//             updated.splice(toIndex, 0, moved);
//             return updated;
//         });
//     };

//     return (
//         <WidgetContext.Provider value={{ widgets, addWidget, removeWidget, reorderWidgets }}>
//             {children}
//         </WidgetContext.Provider>
//     );
// };


//Using useReducer for better state management
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
            content: type === 'text' ? 'This month has shown exceptional growth across all key metrics. Our marketing campaigns have driven a 25% increase in user acquisition, while customer satisfaction scores have reached an all-time high of 4.8/5.' : undefined,
            chartType: type === 'chart' ? 'line' : undefined,
            dataSource: ['chart', 'table', 'metric'].includes(type) ? 'demoData' : undefined,
            metricLabel: type === 'metric' ? 'Users' : undefined,
            value: type === 'metric' ? '1,200' : undefined,
            columns: type === 'table' ? ['Name', 'Age'] : undefined,
            rows: type === 'table' ? [['Alice', 22], ['Bob', 24]] : undefined,
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
