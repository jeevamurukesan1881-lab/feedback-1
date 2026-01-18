// script.js
const textarea = document.getElementById('custom-textarea');
const currentCount = document.getElementById('current-count');
const remainingCount = document.getElementById('remaining-count');
const wrapper = document.querySelector('.input-wrapper');

textarea.addEventListener('input', () => {
    const length = textarea.value.length;
    const max = 200;
    
    // Update text content
    currentCount.textContent = length;
    remainingCount.textContent = max - length;

    // Visual feedback logic
    if (length >= 180) {
        wrapper.classList.add('warning');
    } else {
        wrapper.classList.remove('warning');
    }
});