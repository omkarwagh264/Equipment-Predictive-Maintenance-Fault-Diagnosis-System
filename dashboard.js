// Simulated data (you’ll replace this with backend API calls)
const data = {
  machines: 5,
  alerts: 2,
  faults: 1,
  sensor: [
    { time: '10:00', temperature: 40 },
    { time: '10:10', temperature: 42 },
    { time: '10:20', temperature: 44 },
    { time: '10:30', temperature: 43 },
  ]
};

// Display cards
document.getElementById("machineCount").innerText = data.machines;
document.getElementById("activeAlerts").innerText = data.alerts;
document.getElementById("predictedFaults").innerText = data.faults;

// Draw chart
const ctx = document.getElementById("chart").getContext("2d");
new Chart(ctx, {
  type: "line",
  data: {
    labels: data.sensor.map(s => s.time),
    datasets: [{
      label: "Temperature (°C)",
      data: data.sensor.map(s => s.temperature),
      borderColor: "orange",
      fill: false
    }]
  }
});
