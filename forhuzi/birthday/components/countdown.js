let countdownInterval; // Variable to store the interval ID
// Function to calculate the time remaining until the target date
function calculateTimeRemaining() {
    const targetDate = new Date("5/5/2024 0:0:0").getTime();
    const currentDate = new Date().getTime();
    let timeRemaining = targetDate - currentDate;

    if (timeRemaining <= 0) {
        const h1a = document.querySelector('h1 a');
        const h1div = document.querySelector('h1 div');
        h1a.href = './firststep';
        h1a.textContent = 'A small gift for huzi';
        h1div.textContent = 'Please click the link below';
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
    
    if (timeRemaining.days <= "-2" && timeRemaining.hours <= "-2" && timeRemaining.minutes <= "-2" && timeRemaining.seconds <= "-2") {
        clearInterval(countdownInterval); // Stop the interval when time reaches <= 0
    }
}

// Start the countdown interval
countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to update the countdown immediately
updateCountdown();