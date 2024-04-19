// Function to initialize the event listeners
function initButtonListeners() {
    // Define the buttons and their corresponding IDs
    const buttonIds = ['lowseason-topnav', 'lowseason-bigbutton', 'lowseason-offer', 'adventures-topnav', 'adventures-bigbutton', 'adventures-offer'];
    
    // Iterate over each button ID
    buttonIds.forEach((id) => {
        // Find the button by ID
        const button = document.getElementById(id);
        if (button) {
            // Add click event listener to the button
            button.addEventListener('click', function() {
                redirectToSignUp(id);
            });
        }
    });
}

// Function to redirect to the sign-up page with the appropriate query parameter
function redirectToSignUp(id) {
    // Construct the URL with the query parameter
    const destinationUrl = `../account/sign-up.html?id=${id}`;
    // Redirect to the constructed URL
    window.location.href = destinationUrl;
}

// Ensure the DOM is fully loaded before initializing button listeners
document.addEventListener('DOMContentLoaded', initButtonListeners);