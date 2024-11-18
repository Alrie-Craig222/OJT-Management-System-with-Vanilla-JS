let uploadedDocs = [];
let selectedFile = null;
let currentEditId = null;

document.getElementById('fileInput').addEventListener('change', function(event) {
    selectedFile = event.target.files[0];
});

document.getElementById('uploadButton').addEventListener('click', function() {
    if (selectedFile) {
        const newDoc = {
            id: Date.now(),
            name: selectedFile.name,
            file: selectedFile
        };
        uploadedDocs.push(newDoc);
        selectedFile = null;
        renderDocuments();
    }
});

function renderDocuments() {
    const documentList = document.getElementById('documentList');
    documentList.innerHTML = '';

    uploadedDocs.forEach(doc => {
        const li = document.createElement('li');
        li.classList.add('documentItem');
        
        const div = document.createElement('div');
        div.innerHTML = `
            <span class="fileName">${doc.name}</span>
            <div class="crudButtons">
                <button class="viewButton" onclick="handleView(${doc.id})">View</button>
                <button class="updateButton" onclick="handleUpdate(${doc.id})">Update</button>
                <button class="deleteButton" onclick="handleDelete(${doc.id})">Delete</button>
            </div>
        `;
        li.appendChild(div);
        documentList.appendChild(li);
    });
}

function handleView(id) {
    const doc = uploadedDocs.find(d => d.id === id);
    const fileURL = URL.createObjectURL(doc.file);
    window.open(fileURL, '_blank');
}

function handleUpdate(id) {
    currentEditId = id;
    const newFileInput = document.createElement('input');
    newFileInput.type = 'file';
    newFileInput.accept = '.pdf, .doc, .docx, .txt, .jpg, .png, .jpeg';  // Adjust file types if necessary
    newFileInput.addEventListener('change', function(event) {
        const updatedFile = event.target.files[0];
        if (updatedFile) {
            // Replace the file
            const docIndex = uploadedDocs.findIndex(d => d.id === currentEditId);
            if (docIndex > -1) {
                uploadedDocs[docIndex].file = updatedFile;
                uploadedDocs[docIndex].name = updatedFile.name;
                renderDocuments();
            }
        }
    });

    // Trigger the file input for the user to choose a new file
    newFileInput.click();
}

function handleDelete(id) {
    uploadedDocs = uploadedDocs.filter(doc => doc.id !== id);
    renderDocuments();
}
