document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const headers = document.querySelectorAll('.section h2');

    headers.forEach((header, index) => {
        header.addEventListener('click', function() {
            sections[index].classList.toggle('expanded');
        });
    });

    const printButton = document.getElementById('printButton');
    printButton.addEventListener('click', function() {
        window.location.href = 'https://linktr.ee/ssk16';
    });
});