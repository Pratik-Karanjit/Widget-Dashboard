// config.js
export const widgetConfig = [
  {
    id: "w1",
    type: "text",
    content: "Welcome to the dashboard!",
    position: { x: 0, y: 0 },
  },
  {
    id: "w2",
    type: "chart",
    chartType: "bar",
    dataSource: "salesData",
    position: { x: 1, y: 0 },
  },
  {
    id: "w3",
    type: "metric",
    metricLabel: "Total Users",
    value: "2,500",
    position: { x: 0, y: 1 },
  },
  {
    id: "w4",
    type: "table",
    columns: ["Name", "Score"],
    rows: [
      ["Alice", 95],
      ["Bob", 87],
    ],
    position: { x: 1, y: 1 },
  },
];
