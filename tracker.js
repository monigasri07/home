document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('loggedIn')) {
        window.location.href = 'index.html';
    }
    displayDailyQuote();
});

function openProfilePage() {
    window.location.href = 'profile.html';
}


function addActivity() {
    const activityInput = document.getElementById('activity');
    const activityList = document.getElementById('activity-list');
    if (activityInput.value) {
        const listItem = document.createElement('li');
        listItem.textContent = activityInput.value;
        activityList.appendChild(listItem);
        saveActivity('physicalActivities', activityInput.value);
        activityInput.value = '';
    }
}

function addDiet() {
    const dietInput = document.getElementById('diet');
    const dietList = document.getElementById('diet-list');
    if (dietInput.value) {
        const listItem = document.createElement('li');
        listItem.textContent = dietInput.value;
        dietList.appendChild(listItem);
        saveActivity('dietaryHabits', dietInput.value);
        dietInput.value = '';
    }
}

function addSleep() {
    const sleepInput = document.getElementById('sleep');
    const sleepList = document.getElementById('sleep-list');
    if (sleepInput.value) {
        const listItem = document.createElement('li');
        listItem.textContent = sleepInput.value;
        sleepList.appendChild(listItem);
        saveActivity('sleepPatterns', sleepInput.value);
        sleepInput.value = '';
    }
}

function addMental() {
    const mentalInput = document.getElementById('mental');
    const mentalList = document.getElementById('mental-list');
    if (mentalInput.value) {
        const listItem = document.createElement('li');
        listItem.textContent = mentalInput.value;
        mentalList.appendChild(listItem);
        saveActivity('mentalHealth', mentalInput.value);
        mentalInput.value = '';
    }
}

function saveActivity(type, value) {
    const activities = JSON.parse(localStorage.getItem(type)) || [];
    activities.push({ value, date: new Date().toISOString() });
    localStorage.setItem(type, JSON.stringify(activities));
}












