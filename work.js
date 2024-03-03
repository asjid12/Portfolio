// validation.js

// Validate GitHub links
function validateLink(event) {
    const url = event.target.getAttribute('href');
    if (!url) {
        event.preventDefault();
        console.error('Invalid GitHub link.');
    }
}
