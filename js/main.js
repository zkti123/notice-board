const toggleBtn = document.querySelector('.navber__toogleBtn');
const menu = document.querySelector('.navbar__manu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});
