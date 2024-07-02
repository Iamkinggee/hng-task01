// Function to get current UTC time in HH:mm:ss format
function getCurrentUTCTime() {
    const now = new Date();
    const hours = now.getUTCHours().toString().padStart(2, '0');
    const minutes = now.getUTCMinutes().toString().padStart(2, '0');
    const seconds = now.getUTCSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// Function to get current day of the week
function getCurrentDayOfWeek() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    const dayOfWeek = days[now.getUTCDay()];
    return dayOfWeek;
}

// Function to update HTML elements with current UTC time and day of the week
function updateDateTime() {
    const utcTimeElement = document.getElementById('utc-time');
    const dayOfWeekElement = document.getElementById('day-of-week');

    const utcTime = getCurrentUTCTime();
    const dayOfWeek = getCurrentDayOfWeek();

    utcTimeElement.textContent = `${utcTime}`;
    dayOfWeekElement.textContent = `${dayOfWeek}`;
}

// Update time and day every second
setInterval(updateDateTime, 1000);
