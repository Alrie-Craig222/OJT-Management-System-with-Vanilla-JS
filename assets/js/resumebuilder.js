// function generateResume() {
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('phone').value;
//     const address = document.getElementById('address').value;
//     const education = document.getElementById('education').value;
//     const experience = document.getElementById('experience').value;
//     const skills = document.getElementById('skills').value;

//     const resumeOutput = `
//         <h2>${name}</h2>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Address:</strong> ${address}</p>
//         <h3>Education</h3>
//         <p>${education}</p>
//         <h3>Experience</h3>
//         <p>${experience}</p>
//         <h3>Skills</h3>
//         <p>${skills}</p>
//     `;

//     document.getElementById('resume-output').innerHTML = resumeOutput;
//     document.getElementById('resume-output').style.display = 'block';
//     document.getElementById('download-resume').style.display = 'block';
// }

// function downloadResume() {
//     const resumeContent = document.getElementById('resume-output').innerHTML;
//     const blob = new Blob([resumeContent], { type: 'text/html' });
//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(blob);
//     link.download = 'resume.html';
//     link.click();
// }



function generateResume() {
    // Gather user input values
    const name = document.getElementById('name').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const about = document.getElementById('about').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    // Get the profile photo and handle the display
    const profilePhoto = document.getElementById('profilePhoto').files[0];
    let profilePhotoHTML = '';

    if (profilePhoto) {
        const reader = new FileReader();
        reader.onload = function(event) {
            profilePhotoHTML = `<img src="${event.target.result}" alt="Profile Photo" class="profile-picture">`;
            displayResume(profilePhotoHTML, name, jobTitle, phone, email, address, about, education, experience, skills);
        };
        reader.readAsDataURL(profilePhoto);
    } else {
        displayResume('', name, jobTitle, phone, email, address, about, education, experience, skills);
    }
}

function displayResume(profilePhotoHTML, name, jobTitle, phone, email, address, about, education, experience, skills) {
    // Format resume output with the collected data
    const resumeContent = `
        <div class="resume-section">
            ${profilePhotoHTML}
            <h2>${name}</h2>
            <h4>${jobTitle}</h4>

            <div class="section">
                <h3 class="section-title">Contact Information</h3>
                <p>Phone: ${phone}</p>
                <p>Email: ${email}</p>
                <p>Address: ${address}</p>
            </div>

            <div class="section">
                <h3 class="section-title">About Me</h3>
                <p>${about}</p>
            </div>

            <div class="section">
                <h3 class="section-title">Education</h3>
                <p>${education.replace(/\n/g, '<br>')}</p>
            </div>

            <div class="section">
                <h3 class="section-title">Experience</h3>
                <p>${experience.replace(/\n/g, '<br>')}</p>
            </div>

            <div class="section">
                <h3 class="section-title">Skills</h3>
                <p>${skills.split(',').map(skill => `<span class="skill">${skill.trim()}</span>`).join(', ')}</p>
            </div>
        </div>
    `;

    // Display the formatted resume in the resume output area
    document.getElementById('resume-content').innerHTML = resumeContent;
    document.getElementById('resume-output').style.display = 'block';
}

function downloadResume() {
    const resumeContent = document.getElementById('resume-content').innerHTML;
    const blob = new Blob([resumeContent], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'resume.html';
    link.click();
}
