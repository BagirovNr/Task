const openToggle = document.querySelector('#toggle_menu_open');
const closeToggle = document.querySelector('#toggle_menu_close');
const navContainer = document.querySelector('#nav_container')
openToggle.addEventListener('click',()=>{
openToggle.style.display = 'none'
closeToggle.classList.remove('toggle')
navContainer.style.display = 'block'
})

closeToggle.addEventListener('click', ()=>{
    closeToggle.classList.add('toggle');
    openToggle.style.display = 'block';
    navContainer.style.display = 'none'
})

