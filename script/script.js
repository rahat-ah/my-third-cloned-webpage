let navbar=document.querySelector('header');
const searchIcon = document.querySelector('.search-icon-box a');

if (window.scrollY===0){
    navbar.classList.remove('nav-container');
    navbar.classList.add('nav-top-container');
    searchIcon.style.color = '#636363';
}
else{
    navbar.classList.remove('nav-top-container');
    navbar.classList.add('nav-container');
    searchIcon.style.color = 'black';
}

window.addEventListener('scroll',function() {
    if (window.scrollY===0){
        navbar.classList.remove('nav-container');
        navbar.classList.add('nav-top-container');
        searchIcon.style.color = '#636363';
    }
    else{
        navbar.classList.remove('nav-top-container');
        navbar.classList.add('nav-container');
        searchIcon.style.color = 'black';
    }
})