const arrow = document.querySelectorAll('.work__arrow');
const text = document.querySelectorAll('.work__text');
let active = false;
const wrapp = document.querySelectorAll('.work__wrapper');
const links = document.querySelectorAll('.work__link');

arrow.forEach((item, i) => {
    item.addEventListener('click', (e)=>{
        if ( active == false ) {
            item.style.transform = 'rotate(180deg)';
            text[i].classList.add('work__text-active');
            links[i].classList.add('work__link-active');
            active = true;
        } else if ( active == true ) {
            item.style.transform = 'rotate(0deg)';
            text[i].classList.remove('work__text-active');
            links[i].classList.remove('work__link-active');
            active = false;
        }
    });
});

const over = document.querySelector('.overflou');
const closedBtn = document.querySelector('.menu__close');
const menuBtn = document.querySelector('.menu');
const hamb = document.querySelector('.nav__hamb');

hamb.addEventListener('click', ()=>{
    over.classList.add('overflou-active');
    menuBtn.classList.add('menu-active');
});

closedBtn.addEventListener('click', ()=>{
    over.classList.remove('overflou-active');
    menuBtn.classList.remove('menu-active');
});

const body = document.querySelector('body');

body.addEventListener('click',(e)=> {
    if ( e.target.classList[0] == 'overflou' ) {
        over.classList.remove('overflou-active');
        menuBtn.classList.remove('menu-active');
    }
});