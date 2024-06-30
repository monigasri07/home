document.addEventListener('DOMContentLoaded', () => {
    displayTodayActivities();
});

function displayTodayActivities() {
    const container = document.getElementById('today-activity-list');
    const sections = ['physicalActivities', 'dietaryHabits', 'sleepPatterns', 'mentalHealth'];
    const today = new Date().toLocaleDateString();
    let hasActivities = false;

    sections.forEach(section => {
        const activities = JSON.parse(localStorage.getItem(section)) || [];
        const todayActivities = activities.filter(activity => new Date(activity.date).toLocaleDateString() === today);
        if (todayActivities.length) {
            const sectionElement = document.createElement('div');
            sectionElement.classList.add('tracker-section');
            const title = document.createElement('h3');
            title.textContent = section.replace(/([A-Z])/g, ' $1').trim();
            sectionElement.appendChild(title);
            const list = document.createElement('ul');
            todayActivities.forEach(activity => {
                const listItem = document.createElement('li');
                listItem.textContent = activity.value;
                list.appendChild(listItem);
            });
            sectionElement.appendChild(list);
            container.appendChild(sectionElement);
            hasActivities = true;
        }
    });

    if (!hasActivities) {
        container.innerHTML = '<p>No activities for today.</p>';
    }
}

