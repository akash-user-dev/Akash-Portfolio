// Part 1: The Visual Charm (Fast Terminal Typewriter)
const text = "> Full-Stack Developer & Cloud Architect_";
let i = 0;

function typewriter() {
    if (i < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typewriter, 60); // Faster speed for the hacker aesthetic
    }
}
window.onload = typewriter;

// Part 2: The Local Comms Function
function sendMessage() {
    const userInput = document.getElementById("visitor-message").value;

    if (userInput.trim() === "") {
        alert("Radar is blank! Type a transmission first, Commander.");
        return;
    }

    // FIRE THE REAL TRANSMISSION TO THE ENGINE
    fetch('/api/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userInput })
    })
    .then(response => response.json())
    .then(data => {
        alert("System Alert: Transmission successfully locked into Akash's vault!");
        document.getElementById("visitor-message").value = ""; // Clears the box
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Warning: The engine is currently offline.");
    });
}