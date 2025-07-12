import React, { Suspense } from 'react';
import { VscLoading } from 'react-icons/vsc';

// Dynamically import all widget components using React.lazy
const TextWidget = React.lazy(() => import('./widgets/TextWidget'));
const MetricWidget = React.lazy(() => import('./widgets/MetricWidget'));
const TableWidget = React.lazy(() => import('./widgets/TableWidget'));
const ChartWidget = React.lazy(() => import('./widgets/ChartWidget'));

const widgetComponents = {
    text: TextWidget,
    metric: MetricWidget,
    table: TableWidget,
    chart: ChartWidget,
};

const LoadingFallback = () => (
    <div className="flex items-center justify-center p-4 min-h-[100px] text-gray-500">
        <VscLoading className="animate-spin text-2xl mr-2" />
        <span>Loading...</span>
    </div>
);

const WidgetRenderer = ({ widget, onRemove }) => {
    const WidgetComponent = widgetComponents[widget.type];

    if (!WidgetComponent) {
        return <div className="p-4 bg-red-100 text-red-700">Unknown widget type: {widget.type}</div>;
    }

    return (
        <Suspense fallback={<LoadingFallback />}>
            <WidgetComponent {...widget} onRemove={onRemove} />
        </Suspense>
    );
};

export default WidgetRenderer;