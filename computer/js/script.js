const closeddiv = document.querySelector('.main__menu-close');
const menudiv = document.querySelector('.main__menu');
const blackscreen = document.querySelector('.main__black-screen');
const burger = document.querySelector('.main__burger');
const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const sub = document.querySelector('.footer__button');

burger.addEventListener('click', function(){
    menudiv.classList.add('main__menu_active');
    blackscreen.classList.add('main__black-screen_active');
});

closeddiv.addEventListener('click', (e) => {
    menudiv.classList.remove('main__menu_active');
    blackscreen.classList.remove('main__black-screen_active');
});

body.addEventListener('click', (e) => {
    if (e.target.classList[0] == 'main__black-screen') {
        menudiv.classList.remove('main__menu_active');
        blackscreen.classList.remove('main__black-screen_active');
        modal.classList.remove('modal_active');
        modalprofile.classList.remove('modal__profile_active');
    }
});

sub.addEventListener('click', (e) => {

    e.preventDefault();
    blackscreen.classList.add('main__black-screen_active');
    modal.classList.add('modal_active');

    setTimeout(function(){
        blackscreen.style.opacity = '0';
        modal.style.opacity = '0';
    }, 1500);

    setTimeout(function(){
        blackscreen.classList.remove('main__black-screen_active');
        modal.classList.remove('modal_active');
        blackscreen.style.opacity = '0.8';
        modal.style.opacity = '1';
    }, 2000);

});

const deadline = '2022-07-15';


function getTime(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t / (1000 * 60 * 60) % 24));
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const seconds = Math.floor((t / 1000) % 60);

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function setClock(endtime) {
    const daysElem = document.querySelector('.days');
    const hoursElem = document.querySelector('.hours');
    const minutesElem = document.querySelector('.minutes');
    const secondsElem = document.querySelector('.seconds');
    const timeInterval = setInterval( updateClock, 1000);

    function updateClock() {
        const t = getTime(endtime);

        daysElem.innerHTML = t.days;
        hoursElem.innerHTML = t.hours;
        minutesElem.innerHTML = t.minutes;
        secondsElem.innerHTML = t.seconds;

        if ( t.total <= 0 ) {
            clearInterval(timeInterval);
        }
    }
}

setClock(deadline);

const btnprofile = document.querySelector('.main__button');
const btnProfMenu = document.querySelector('.main__menu-btn');
const modalprofile = document.querySelector('.modal__profile');

btnprofile.addEventListener('click', (e) => {
    e.preventDefault();
    blackscreen.classList.add('main__black-screen_active');
    modalprofile.classList.add('modal__profile_active');
});

btnProfMenu.addEventListener('click', (e) => {
    e.preventDefault();
    blackscreen.classList.add('main__black-screen_active');
    modalprofile.classList.add('modal__profile_active');
    menudiv.classList.remove('main__menu_active');
});

// Настройка слайдера

$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icon/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icon/arrow_right.png"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
      });
});