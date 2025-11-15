const history = [
  { date: '2025-10-20', machine: 'Machine 1', issue: 'Overheating', action: 'Fan replaced' },
  { date: '2025-10-28', machine: 'Machine 3', issue: 'High vibration', action: 'Bearing adjusted' }
];

const tbody = document.getElementById("historyTable");
history.forEach(h => {
  tbody.innerHTML += `<tr>
    <td>${h.date}</td>
    <td>${h.machine}</td>
    <td>${h.issue}</td>
    <td>${h.action}</td>
  </tr>`;
});
