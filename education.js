// validation.js

// Validate education links
function validateLink(event) {
    const url = event.target.getAttribute('href');
    if (!url) {
        event.preventDefault();
        console.error('Invalid link.');
    }
}
