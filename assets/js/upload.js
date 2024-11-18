// Initialize Supabase client
import { supabase } from './supabase.js';

const documentTableBody = document.getElementById('documentTableBody');
const statusMessage = document.getElementById('statusMessage');

// Load required documents from Supabase
async function loadDocuments() {
    const { data: documents, error } = await supabase
        .from('documents')
        .select('*');

    if (error) {
        console.error('Error loading documents:', error);
        return;
    }

    documentTableBody.innerHTML = '';
    documents.forEach(doc => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${doc.name}</td>
            <td>
                <input type="file" id="file-${doc.id}" onchange="uploadDocument(${doc.id})">
            </td>
            <td id="status-${doc.id}">${doc.is_complete ? 'Complete' : 'Pending'}</td>
        `;
        documentTableBody.appendChild(row);
    });
}

// Upload document to Supabase storage
async function uploadDocument(docId) {
    const fileInput = document.getElementById(`file-${docId}`);
    const file = fileInput.files[0];
    if (!file) return;

    const filePath = `uploads/${docId}/${file.name}`;
    const { error } = await supabase.storage
        .from('uploads')
        .upload(filePath, file);

    if (error) {
        statusMessage.textContent = `Error uploading ${file.name}: ${error.message}`;
        return;
    }

    // Mark document as complete in database
    await supabase.from('documents').update({ is_complete: true }).eq('id', docId);

    // Update status in UI
    document.getElementById(`status-${docId}`).textContent = 'Complete';
    statusMessage.textContent = `${file.name} uploaded successfully!`;
}

// Add a new required document
async function addNewDocument() {
    const newDocumentName = document.getElementById('newDocumentName').value.trim();
    if (!newDocumentName) return alert('Document name is required.');

    // Insert new document in Supabase
    const { data, error } = await supabase
        .from('documents')
        .insert([{ name: newDocumentName, is_complete: false }]);

    if (error) {
        statusMessage.textContent = `Error adding document: ${error.message}`;
        return;
    }

    // Reload document list
    loadDocuments();
    document.getElementById('newDocumentName').value = ''; // Clear input field
    statusMessage.textContent = 'New document added successfully!';
}

// Initial load
loadDocuments();
