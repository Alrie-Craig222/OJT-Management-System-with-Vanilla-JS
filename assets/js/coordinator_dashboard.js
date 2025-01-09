const trainees = [
  { profile: 'https://via.placeholder.com/40', name: 'Francis Arina Atienza', email: 'francis@domain.com', studentID: '202-00001', course: 'BSIT', year: 4, deployed: 'YES', evaluated: 'NO', completed: 'NO' },
  { profile: 'https://via.placeholder.com/40', name: 'John Wick', email: 'john@domain.com', studentID: '202-00002', course: 'BSIT', year: 4, deployed: 'YES', evaluated: 'YES', completed: 'NO' },
  { profile: 'https://via.placeholder.com/40', name: 'Lionel Messi', email: 'lionel@domain.com', studentID: '202-00003', course: 'BSIT', year: 4, deployed: 'NO', evaluated: 'YES', completed: 'YES' },
];

const agencies = [
  { companyName: 'Agency A', representativeName: 'Alice Smith', representativeEmail: 'alice@agency.com', numberOfTrainees: 5 },
  { companyName: 'Agency B', representativeName: 'Bob Johnson', representativeEmail: 'bob@agency.com', numberOfTrainees: 3 },
  { companyName: 'Agency C', representativeName: 'Charlie Brown', representativeEmail: 'charlie@agency.com', numberOfTrainees: 2 },
];

// Tab switching functionality
const tabs = document.querySelectorAll('.tab');
const tableBody = document.getElementById('tableBody');
const tableTitle = document.getElementById('tableTitle');
const tableHead = document.getElementById('tableHead');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    if (tab.dataset.tab === 'trainees') {
      renderTrainees();
      tableTitle.innerText = "List of All Trainee's";
      updateTableHeadersForTrainees();
    } else {
      renderAgencies();
      tableTitle.innerText = 'List of All Agencies';
      updateTableHeadersForAgencies();
    }
  });
});

// Render trainees
function renderTrainees() {
  tableBody.innerHTML = '';
  trainees.forEach(trainee => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><img src="${trainee.profile}" alt="Profile"></td>
      <td>${trainee.name}</td>
      <td>${trainee.email}</td>
      <td>${trainee.studentID}</td>
      <td>${trainee.course}</td>
      <td>${trainee.year}</td>
      <td>${trainee.deployed}</td>
      <td>${trainee.evaluated}</td>
      <td>${trainee.completed}</td>
      <td><button><i class="bi bi-eye"></i></button></td>
      <td><button class="action-btn"><i class="bi bi-pencil"></i></button></td>
    `;
    tableBody.appendChild(row);
  });
}

// Render agencies
function renderAgencies() {
  tableBody.innerHTML = '';
  agencies.forEach(agency => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${agency.companyName}</td>
      <td>${agency.representativeName}</td>
      <td>${agency.representativeEmail}</td>
      <td>${agency.numberOfTrainees}</td>
      <td><button><i class="bi bi-eye"></i></button></td>
    `;
    tableBody.appendChild(row);
  });
}

// Update table headers for trainees
function updateTableHeadersForTrainees() {
  tableHead.innerHTML = `
    <tr>
      <th>Profile</th>
      <th>Name</th>
      <th>Email</th>
      <th>Student ID</th>
      <th>Course</th>
      <th>Year</th>
      <th>Deployed</th>
      <th>Evaluated</th>
      <th>Completed</th>
      <th>Actions</th>
    </tr>
  `;
}

// Update table headers for agencies
function updateTableHeadersForAgencies() {
  tableHead.innerHTML = `
    <tr>
      <th>Company Name</th>
      <th>Representative Name</th>
      <th>Representative Email</th>
      <th>Number of Trainees</th>
      <th>Actions</th>
    </tr>
  `;
}

// Initial render
renderTrainees();



