// Automatically update the copyright year in the footer
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Add a shadow to the navigation bar on scroll for better visibility
window.addEventListener('scroll', () => {
    const header = document.getElementById('navbar');
    if (window.scrollY > 10) {
        header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    }
});