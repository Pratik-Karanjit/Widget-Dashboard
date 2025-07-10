export const widgetConfig = [
  {
    id: "widget-1",
    type: "text",
    content: "Welcome to the Dashboard!",
    position: { x: 0, y: 0 },
  },
  {
    id: "widget-2",
    type: "chart",
    chartType: "bar",
    dataSource: "salesData",
    position: { x: 1, y: 0 },
  },
];
