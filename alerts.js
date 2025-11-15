const alerts = [
  { message: 'Vibration level high in Machine 2', time: '11:30 AM', severity: 'High' },
  { message: 'Temperature rising in Machine 1', time: '11:45 AM', severity: 'Medium' }
];

const container = document.getElementById("alertsList");
alerts.forEach(a => {
  const div = document.createElement('div');
  div.className = 'card';
  div.innerHTML = `<h3>${a.message}</h3><p>Time: ${a.time}</p><p>Severity: ${a.severity}</p>`;
  container.appendChild(div);
});
