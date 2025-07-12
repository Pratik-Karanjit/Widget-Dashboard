import React from 'react';
import { X } from 'lucide-react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
);

const ChartWidget = ({ chartType = 'bar', title = 'Chart', onRemove }) => {
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const data = {
        labels,
        datasets: [
            {
                label: 'Data 1',
                data: [65, 59, 80, 81, 56, 55],
                backgroundColor: 'rgba(79, 70, 229, 0.8)',
                borderColor: 'rgba(79, 70, 229, 1)',
                borderWidth: 1,
            },
            {
                label: 'Data 2',
                data: [28, 48, 40, 19, 86, 27],
                backgroundColor: 'rgba(16, 185, 129, 0.8)',
                borderColor: 'rgba(16, 185, 129, 1)',
                borderWidth: 1,
            }
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: title,
                padding: {
                    bottom: 10
                }
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    drawBorder: false
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    };

    return (
        <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 relative group"
            style={{ height: '250px' }}>
            <button
                onClick={onRemove}
                className="absolute top-2 right-2 p-1 rounded-full text-gray-400 hover:bg-black hover:text-white transition-all duration-200 opacity-0 group-hover:opacity-100 cursor-pointer"
                aria-label="Remove widget"
            >
                <X className="h-4 w-4" />
            </button>

            <div className="h-full w-full">
                {chartType === 'bar' ? (
                    <Bar data={data} options={options} />
                ) : (
                    <Line data={data} options={options} />
                )}
            </div>
        </div>
    );
};

export default React.memo(ChartWidget);