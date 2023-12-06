const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/cucumberReports",
  reportPath: "cypress/cucumberReports/cucumber-htmlreport.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "119.0.6045",
    },
    device: "HP ProBook",
    platform: {
      name: "Windows",
      version: "10 Pro",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "GuestReservation" },
      { label: "Release", value: "1.7.2" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "Dec 5th 2017, 02:31 PM EST" },
      { label: "Execution End Time", value: "Dec 5th 2017, 02:41 PM EST" },
    ],
  },
});