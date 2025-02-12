const documents = [
    "Student Internship Contract - MOA",
    "Internship Work Plan",
    "Parents Consent",
    "Medical Certificate",
    "Student Pledge",
    "Departmental Acceptance",
    "Insurance",
    "Student History Statement"
];

let uploadedDocuments = {}; 
let narrativeFile = null;

function openTab(tabName) {
    document.querySelectorAll(".tab-content").forEach(tab => {
        tab.classList.remove("active");
    });

    document.querySelectorAll(".tab-button").forEach(btn => {
        btn.classList.remove("active");
    });

    document.getElementById(tabName).classList.add("active");
    document.querySelector(`[onclick="openTab('${tabName}')"]`).classList.add("active");
}

function renderDocuments() {
    const tableBody = document.getElementById("document-list");
    tableBody.innerHTML = "";
    
    documents.forEach(doc => {
        const status = uploadedDocuments[doc] ? uploadedDocuments[doc].status : "Missing";
        const row = `
            <tr>
                <td>${doc}</td>
                <td>${status}</td>
                <td class="actions">
                    ${status === "Missing" ? `<input type="file" onchange="uploadDocument(event, '${doc}')" accept=".pdf">` : ""}
                    ${status === "Uploaded" ? `
                        <button onclick="viewDocument('${doc}')">View</button>
                        <button onclick="downloadDocument('${doc}')">Download</button>
                        <button onclick="deleteDocument('${doc}')">Delete</button>
                        <button onclick="submitDocument('${doc}')">Submit</button>
                    ` : ""}
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function uploadDocument(event, docName) {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
        uploadedDocuments[docName] = { file, status: "Uploaded" };
        renderDocuments();
    } else {
        alert("Only PDF files are allowed.");
    }
}

function viewDocument(docName) {
    const fileURL = URL.createObjectURL(uploadedDocuments[docName].file);
    window.open(fileURL);
}

function downloadDocument(docName) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(uploadedDocuments[docName].file);
    a.download = docName + ".pdf";
    a.click();
}

function deleteDocument(docName) {
    delete uploadedDocuments[docName];
    renderDocuments();
}

function submitDocument(docName) {
    uploadedDocuments[docName].status = "Submitted";
    renderDocuments();
}

// Narrative Report Functions
function uploadNarrative() {
    const fileInput = document.getElementById("narrative-file");
    const file = fileInput.files[0];

    if (file && file.type === "application/pdf") {
        narrativeFile = file;
        document.getElementById("narrative-status").innerText = "Status: Uploaded";
        document.getElementById("narrative-actions").style.display = "block";
    } else {
        alert("Only PDF files are allowed.");
    }
}

function viewNarrative() {
    const fileURL = URL.createObjectURL(narrativeFile);
    window.open(fileURL);
}

function downloadNarrative() {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(narrativeFile);
    a.download = "Narrative_Report.pdf";
    a.click();
}

function deleteNarrative() {
    narrativeFile = null;
    document.getElementById("narrative-status").innerText = "Status: Missing";
    document.getElementById("narrative-actions").style.display = "none";
}

function submitNarrative() {
    document.getElementById("narrative-status").innerText = "Status: Submitted";
    document.getElementById("narrative-actions").style.display = "none";
}

// Initialize the document table
renderDocuments();
