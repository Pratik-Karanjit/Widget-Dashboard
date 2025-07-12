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
    type: "chart",
    chartType: "bar",
    dataSource: "salesData",
    position: { x: 1, y: 0 },
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
    type: "metric",
    metricLabel: "Total Users",
    value: "2,500",
    position: { x: 0, y: 1 },
  },
  // {
  //   id: "w5",
  //   type: "table",
  //   columns: ["Name", "Score", "Age"],
  //   rows: [
  //     ["Alice", 95, 25],
  //     ["Bob", 87, 30],
  //     ["Andrew", 17, 30],
  //   ],
  //   position: { x: 1, y: 1 },
  // },
  // {
  //   id: "w6",
  //   type: "metric",
  //   metricLabel: "Total Projects",
  //   value: "50",
  //   position: { x: 0, y: 1 },
  // },
  // {
  //   id: "w7",
  //   type: "table",
  //   columns: ["Name", "Score", "Age"],
  //   rows: [
  //     ["Pratik", 91, 25],
  //     ["Bimala", 82, 28],
  //     ["Kritika", 77, 28],
  //   ],
  //   position: { x: 1, y: 1 },
  // },
  // {
  //   id: "w8",
  //   title: "Monthly Report",
  //   type: "text",
  //   content:
  //     "We are excited to announce the launch of our new product line next month. Stay tuned for more updates! We are also working on enhancing our customer support system to provide better service.",
  //   position: { x: 0, y: 0 },
  //   status: "Information",
  //   department: "Development",
  // },
];
