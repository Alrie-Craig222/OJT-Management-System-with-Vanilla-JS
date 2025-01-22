document.getElementById('uploadButton').addEventListener('click', function() {
    const fileInputs = document.querySelectorAll('input[type="file"]');
    let filesUploaded = false;
  
    fileInputs.forEach(input => {
      if (input.files.length > 0) {
        filesUploaded = true;
      }
    });
  
    if (filesUploaded) {
      const successMessage = document.getElementById('successMessage');
      successMessage.classList.remove('d-none');
      setTimeout(() => {
        successMessage.classList.add('d-none');
      }, 3000);
    }
  });
  
  function handleView(inputId) {
    const input = document.getElementById(inputId);
    if (input.files[0]) {
      const fileURL = URL.createObjectURL(input.files[0]);
      window.open(fileURL, '_blank');
    } else {
      alert('No file selected to view.');
    }
  }
  
//   function handleUpdate(inputId) {
//     const input = document.getElementById(inputId);
//     input.click(); // Trigger file selection for update
//   }
  
  function handleDelete(inputId) {
    const input = document.getElementById(inputId);
    input.value = ''; // Clear the file input
    alert('File deleted successfully.');
  }
  