function generateLetter() {
    const applicantName = document.getElementById('applicant-name').value;
    const position = document.getElementById('position').value;
    const company = document.getElementById('company').value;
    const date = document.getElementById('date').value;
    const introduction = document.getElementById('introduction').value;
    const body = document.getElementById('body').value;
    const closing = document.getElementById('closing').value;

    const letterOutput = `
        <p>${date}</p>
        <p>Hiring Manager<br>${company}</p>
        <p>Dear Hiring Manager,</p>
        <p>${introduction}</p>
        <p>${body}</p>
        <p>${closing}</p>
        <p>Sincerely,<br>${applicantName}</p>
    `;

    document.getElementById('letter-output').innerHTML = letterOutput;
    document.getElementById('letter-output').style.display = 'block';
    document.getElementById('download-letter').style.display = 'block';
}

function downloadLetter() {
    const letterContent = document.getElementById('letter-output').innerHTML;
    const blob = new Blob([letterContent], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'application_letter.html';
    link.click();
}
