let navbar=document.querySelector('header');

if (window.scrollY===0){
    navbar.classList.remove('nav-container');
    navbar.classList.add('nav-top-container');
}
else{
    navbar.classList.remove('nav-top-container');
    navbar.classList.add('nav-container');
}

window.addEventListener('scroll',function() {
    if (window.scrollY===0){
        navbar.classList.remove('nav-container');
        navbar.classList.add('nav-top-container');
    }
    else{
        navbar.classList.remove('nav-top-container');
        navbar.classList.add('nav-container');
    }
})