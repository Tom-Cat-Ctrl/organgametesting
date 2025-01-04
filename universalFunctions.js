// Function to start the typewriter effect
function startTypewriterEffect(elementId, speed, fnCallback) {
    console.log(`Starting typewriter effect for ${elementId}`); //debug
    const textElement = document.getElementById(elementId);
    const text = textElement.innerHTML;
    textElement.innerHTML = ""; // Clear the text initially
    textElement.classList.remove('hidden');
    typeWriter(text, elementId, 0, speed, fnCallback);
}

// Typewriter effect function
function typeWriter(text, elementId, i, speed, fnCallback) {
    if (i < (text.length)) {
        document.getElementById(elementId).innerHTML = text.substring(0, i + 1);
        document.getElementById(elementId).classList.remove('hidden');
        setTimeout(function() {
            typeWriter(text, elementId, i + 1, speed, fnCallback);
        }, speed); // Adjust the speed here (in milliseconds)
    } else if (typeof fnCallback == 'function') {
        fnCallback();
    }
}

function setupInputField(secondTextElementId, inputFieldId, nextPageUrl) {
    const secondTextElement = document.getElementById(secondTextElementId);
    const inputField = document.getElementById(inputFieldId);
    // inputField.classList = "hidden";

    if (secondTextElement && inputField) {
        // Position the input field over the second text
        inputField.style.position = "absolute";
        inputField.style.top = `${secondTextElement.offsetTop}px`;
        inputField.style.left = `${secondTextElement.offsetLeft}px`;
        inputField.style.width = `${secondTextElement.offsetWidth}px`;
        inputField.style.height = `${secondTextElement.offsetHeight}px`;

        inputField.autofocus = false;
        
        inputField.addEventListener("touchstart", function(){
            console.log("Input field touched!");
            this.focus();
            // this.style.visibiliy = 'visible';
        });
        
        inputField.addEventListener("click", function(){
            console.log("Input field clicked!");
            this.focus();
            // this.style.visibiliy = 'visible';
        });

        // Check if the user's input matches the second text
        inputField.addEventListener("input", function() {
            if (inputField.value === secondTextElement.innerHTML) {
                window.location.href = nextPageUrl; // Redirect to the next page
            }
        });
    }
}

// document.getElementById('inputField').addEventListener('touchstart', function() {
//     this.classList.remove('hidden');
// });