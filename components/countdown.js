let countdownInterval; // Variable to store the interval ID

// Function to calculate the time remaining until the target date
function calculateTimeRemaining() {
    const targetDate = new Date("9/13/2023 18:42:00").getTime();
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    if (timeRemaining <= 0) {
        const linkElement = document.querySelector('h1 a');

        linkElement.textContent = 'CLICK HERE';
        linkElement.href = 'http://jurmy.life/firststep';

        timeRemaining = 0;
    }

    const seconds = Math.floor((timeRemaining / 1000) % 60);
    const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    return {
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0")
    };
}

// Function to update the countdown timer
function updateCountdown() {
    const countdownElements = {
        days: document.getElementById("days"),
        hours: document.getElementById("hours"),
        minutes: document.getElementById("minutes"),
        seconds: document.getElementById("seconds")
    };

    const timeRemaining = calculateTimeRemaining();

    countdownElements.days.textContent = timeRemaining.days;
    countdownElements.hours.textContent = timeRemaining.hours;
    countdownElements.minutes.textContent = timeRemaining.minutes;
    countdownElements.seconds.textContent = timeRemaining.seconds;
}

// Start the countdown interval
countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to update the countdown immediately
updateCountdown();
