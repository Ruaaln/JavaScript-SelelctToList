const workers = [
  { name: "Alice Johnson", status: "Active", department: "Engineering" },
  { name: "Bob Smith", status: "Inactive", department: "Marketing" },
  { name: "Charlie Davis", status: "Active", department: "Finance" },
  { name: "Diana Lee", status: "Active", department: "Human Resources" },
  { name: "Ethan Clark", status: "On Leave", department: "Operations" },
  { name: "Fiona White", status: "Active", department: "Engineering" },
  { name: "George Hall", status: "Inactive", department: "Sales" },
  { name: "Hannah Lewis", status: "Active", department: "Customer Support" },
  { name: "Ian Walker", status: "Active", department: "IT" },
  { name: "Julia Roberts", status: "On Leave", department: "Finance" },
  { name: "Kevin Turner", status: "Active", department: "Marketing" },
  { name: "Laura King", status: "Inactive", department: "Operations" },
  { name: "Michael Young", status: "Active", department: "Engineering" },
  { name: "Nina Scott", status: "Active", department: "Sales" },
  { name: "Oliver Adams", status: "On Leave", department: "Human Resources" }
];

const tableBody = document.querySelector("#workersTable tbody");
const departmentFilter = document.getElementById("departmentFilter");
const nameSearch = document.getElementById("nameSearch");

const departments = [...new Set(workers.map(w => w.department))];
departments.forEach(dep => {
  const opt = document.createElement("option");
  opt.value = dep;
  opt.textContent = dep;
  departmentFilter.appendChild(opt);
});

function renderTable(data) {
  tableBody.innerHTML = "";
  data.forEach(w => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${w.name}</td>
      <td>${w.status}</td>
      <td>${w.department}</td>
    `;
    tableBody.appendChild(tr);
  });
}

function filterWorkers() {
  const depVal = departmentFilter.value;
  const nameVal = nameSearch.value.toLowerCase();

  const filtered = workers.filter(w => {
    const matchesDep = depVal ? w.department === depVal : true;
    const matchesName = w.name.toLowerCase().includes(nameVal);
    return matchesDep && matchesName;
  });

  renderTable(filtered);
}

departmentFilter.addEventListener("change", filterWorkers);
nameSearch.addEventListener("input", filterWorkers);

renderTable(workers);
