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

        if (inputValue === '552001') {
            // Redirect the user to a new page
            h1Element.style.display = 'none';
            window.location.href = '../loading/';
        } else {
            resultMessage.textContent = 'RE-ENTER UNTIL CORRECT';
            resultMessage.classList.add('fade-out');
            resultMessage.classList.remove('fade-out'); // Remove the fade-out class
        }
    });
});

const h1Element = document.getElementById('resultMessage');
const showButton = document.getElementById('submit');

showButton.addEventListener('click', function () {
    h1Element.style.display = 'block';
    
    setTimeout(function () {
        h1Element.style.display = 'none'; // Hide the element
    }, 1000); 
}); 