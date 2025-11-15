const equipmentData = [
  { name: 'Temperature', value: '42°C', status: 'Normal' },
  { name: 'Vibration', value: '6.5 mm/s', status: 'Warning' },
  { name: 'Pressure', value: '3.2 bar', status: 'Normal' },
];

const tbody = document.getElementById("equipmentTable");
equipmentData.forEach(item => {
  const row = `<tr>
    <td>${item.name}</td>
    <td>${item.value}</td>
    <td>${item.status}</td>
  </tr>`;
  tbody.innerHTML += row;
});
