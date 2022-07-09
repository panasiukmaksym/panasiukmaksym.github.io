const arrow = document.querySelectorAll('.work__arrow');
const text = document.querySelectorAll('.work__text');
const wrapp = document.querySelectorAll('.work__wrapper');
const links = document.querySelectorAll('.work__link');
let active = [false,false,false,false];

arrow.forEach((item, i) => {
    item.addEventListener('click', (e)=>{
        if ( active[i] == false ) {
            item.style.transform = 'rotate(180deg)';
            text[i].classList.toggle('work__text-active');
            links[i].classList.toggle('work__link-active');
            active[i] = true;
        } else if ( active[i] == true ) {
            item.style.transform = 'rotate(0deg)';
            text[i].classList.toggle('work__text-active');
            links[i].classList.toggle('work__link-active');
            active[i] = false;
        }
    });
});

wrapp.forEach((item, i) => {
    item.addEventListener("mouseover", function(){
        arrow[i].style.margin = "10px 0px";
        this.addEventListener("mouseout", function(){
            arrow[i].style.margin = "5px 0px";
        });
    });
});

const over = document.querySelector('.overflou');
const closedBtn = document.querySelector('.menu__close');
const menuBtn = document.querySelector('.menu');
const hamb = document.querySelector('.nav__hamb');

hamb.addEventListener('click', ()=>{
    over.classList.add('overflou-active');
    setTimeout(function(){
        menuBtn.classList.add('menu-active');
    }, 100);
});

closedBtn.addEventListener('click', ()=>{
    menuBtn.classList.remove('menu-active');
    setTimeout(function(){
        over.classList.remove('overflou-active');
    }, 300);
});

const body = document.querySelector('body');

body.addEventListener('click',(e)=> {
    if ( e.target.classList[0] == 'overflou' ) {
        menuBtn.classList.remove('menu-active');
        setTimeout(function(){
            over.classList.remove('overflou-active');
        }, 300);
    }
});
