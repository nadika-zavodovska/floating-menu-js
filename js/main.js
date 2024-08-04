const button = document.querySelector('.button');

button.addEventListener('click', () => {
    button.classList.toggle('active');
    button.setAttribute('aria-expended', button.classList.contains('active') ? 'true' : 'false')
}
)