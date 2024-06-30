
document.addEventListener('DOMContentLoaded', () => {
    displayProfile();
});

function displayProfile() {
    const username = localStorage.getItem('username') || 'User';
    const age = localStorage.getItem('age') || '18';
    const gender = localStorage.getItem('gender') || 'F';
    const dob = localStorage.getItem('dob') || '01.02.2005';
    
    document.getElementById('profile-username').textContent = username;
    document.getElementById('profile-age').textContent = age;
    document.getElementById('profile-gender').textContent = gender;
    document.getElementById('profile-dob').textContent = dob;
}

function editProfile() {
    const newUsername = prompt('Enter your new username:', localStorage.getItem('username') || '');
    const newAge = prompt('Enter your age:', localStorage.getItem('age') || '');
    const newGender = prompt('Enter your gender:', localStorage.getItem('gender') || '');
    const newDob = prompt('Enter your date of birth (YYYY-MM-DD):', localStorage.getItem('dob') || '');

    if (newUsername) localStorage.setItem('username', newUsername);
    if (newAge) localStorage.setItem('age', newAge);
    if (newGender) localStorage.setItem('gender', newGender);
    if (newDob) localStorage.setItem('dob', newDob);

    displayProfile();
}