const navBtn = document.getElementById('nav-btn');
const navMenu = document.getElementById('nav-menu');

navBtn.addEventListener('click', function(){
    navMenu.classList.toggle('active');
})