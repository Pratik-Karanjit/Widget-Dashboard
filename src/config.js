export const widgetConfig = [
  {
    id: "w1",
    title: "Welcome",
    type: "text",
    content:
      "Welcome to widget dashboard! You can find various widgets here to visualize your data effectively. Use the buttons to add, hover individual to remove, or rearrange widgets by simply grabbing them and placing as needed. Enjoy customizing your dashboard!",
    position: { x: 0, y: 0 },
    status: "Information",
    department: "General",
  },

  {
    id: "w2",
    type: "metric",
    metricLabel: "Total Users",
    value: "2,500",
    position: { x: 0, y: 1 },
  },
  {
    id: "w3",
    type: "chart",
    chartType: "line",
    dataSource: "salesData",
    position: { x: 1, y: 0 },
  },
  {
    id: "w4",
    type: "table",
    columns: ["Name", "Score", "Age"],
    rows: [
      ["Alice", 95, 25],
      ["Bob", 87, 30],
      ["Andrew", 17, 30],
    ],
    position: { x: 1, y: 1 },
  },
];
