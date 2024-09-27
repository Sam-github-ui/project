document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.idowu button');
    const displayBox = document.querySelector('.samuel .text');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            displayBox.textContent = button.textContent;

        });
    });
});