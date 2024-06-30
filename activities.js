document.addEventListener('DOMContentLoaded', () => {
    displayPreviousActivities();
});

function displayPreviousActivities() {
    const sections = ['physicalActivities', 'dietaryHabits', 'sleepPatterns', 'mentalHealth'];
    const container = document.getElementById('previous-activity-list');
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    sections.forEach(section => {
        const activities = JSON.parse(localStorage.getItem(section)) || [];
        const filteredActivities = activities.filter(activity => new Date(activity.date) >= oneWeekAgo);
        if (filteredActivities.length) {
            const sectionElement = document.createElement('div');
            sectionElement.classList.add('previous-section');
            const title = document.createElement('h3');
            title.textContent = section.replace(/([A-Z])/g, ' $1').trim();
            sectionElement.appendChild(title);
            const list = document.createElement('ul');
            filteredActivities.forEach(activity => {
                const listItem = document.createElement('li');
                listItem.textContent = `${activity.value} (${new Date(activity.date).toLocaleDateString()})`;
                list.appendChild(listItem);
            });
            sectionElement.appendChild(list);
            container.appendChild(sectionElement);
        }
    });
}