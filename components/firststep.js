// Get a reference to the audio element
const audio = document.getElementById('myAudio');
const delay = 10000;

// Function to autoplay the audio after the specified delay
function autoplayAudio() {
    audio.play();
}
// Use setTimeout to trigger autoplay after the specified delay
setTimeout(autoplayAudio, delay);

document.addEventListener('DOMContentLoaded', function () {
    // Get the form and result message elements
    const form = document.getElementById('myform');
    const resultMessage = document.getElementById('resultMessage');

    // Add an event listener to the form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the input value
        const inputValue = document.getElementById('number').value;

        // Check if the input value is equal to "552001"
        if (inputValue === '552001') {
            // Redirect the user to a new page
            h1Element.style.display = 'none';
            window.location.href = '../loading/';
        } else {
            // Display a notification and require the user to re-enter
            resultMessage.textContent = 'RE-ENTER UNTIL CORRECT';
            resultMessage.classList.add('fade-out');
            resultMessage.classList.remove('fade-out'); // Remove the fade-out class
        }
    });
});

const h1Element = document.getElementById('resultMessage');
// Get references to the button and the <h1> element
const showButton = document.getElementById('submit');

// Add a click event listener to the button
showButton.addEventListener('click', function () {
    // Show the <h1> element
    h1Element.style.display = 'block';
    // Use setTimeout to hide it after 2 seconds
    
    setTimeout(function () {
        h1Element.style.display = 'none'; // Hide the element
    }, 1000); // 2000 milliseconds = 2 seconds
}); 