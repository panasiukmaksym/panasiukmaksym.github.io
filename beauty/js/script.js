const hamburger = document.querySelector('.hamburger'),
      closedBtn = document.querySelector('.menu__close'),
      menu = document.querySelector('.menu');

hamburger.addEventListener('click', ()=>{
    menu.classList.add('menu-active');
});

closedBtn.addEventListener('click', ()=>{
    menu.classList.remove('menu-active');
});