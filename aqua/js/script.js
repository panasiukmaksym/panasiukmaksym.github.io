

const hamburger = document.querySelector('.header__hamburger');
const closedBtn = document.querySelector('.menu__close');
const over = document.querySelector('.overflow');
const menu = document.querySelector('.menu');

closedBtn.addEventListener('click', (e)=> {
    over.classList.remove('overflow_active');
    menu.classList.remove('menu_active');
});

hamburger.addEventListener('click', (e)=> {
    over.classList.add('overflow_active');
    menu.classList.add('menu_active');
});

document.addEventListener('click', (e)=>{
    if (e.target.classList[0] == 'overflow') {
        over.classList.remove('overflow_active');
        menu.classList.remove('menu_active');
    }
});