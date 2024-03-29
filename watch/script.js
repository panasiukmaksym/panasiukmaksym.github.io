const hourDote = document.querySelectorAll('.hours .hours__dote');
const dotesAll = document.querySelectorAll('.dotes');

let noActiveDoteColor = 'tomato';
let activeDoteColor = 'white';

// hourDote.forEach( (item, i) => {
//     item.textContent = i;
// });

function paintNumber(number, selector) {

    let arrDotes = [];
    if ( number == 0 ) {
        arrDotes = [18, 19, 20, 21, 29, 37, 45, 53, 61, 69, 77, 76, 75, 74, 66, 58, 50, 42, 34, 26];
    } else if ( number == 1 ) {
        arrDotes = [20, 28, 36, 44, 52, 60, 68, 76, 27, 75, 77];
    } else if ( number == 2 ) {
        arrDotes = [18, 19, 20, 21, 29, 37, 45, 53, 52, 51, 50, 58, 66, 74, 75, 76, 77, 26];
    } else if ( number == 3 ) {
        arrDotes = [18, 19, 20, 21, 29, 37, 45, 53, 61, 69, 77, 76, 75, 74, 44, 43, 66, 26];
    } else if ( number == 4 ) {
        arrDotes = [45, 37, 29, 21, 53, 61, 69, 77, 20, 27, 35, 42, 50, 58, 59, 60];
    } else if ( number == 5 ) {
        arrDotes = [18, 19, 20, 21, 53, 52, 51, 50, 74, 75, 76, 77, 26, 34, 42, 61, 69, 29];
    } else if ( number == 6 ) {
        arrDotes = [18, 19, 20, 21, 53, 52, 51, 50, 74, 75, 76, 77, 26, 34, 42, 61, 69, 58, 66, 29];
    } else if ( number == 7 ) {
        arrDotes = [18, 19, 20, 21, 29, 37, 45, 52, 60, 68, 76, 26];
    } else if ( number == 8 ) {
        arrDotes = [19, 20, 29, 37, 53, 61, 69, 76, 75, 66, 58, 50, 34, 26, 43, 44, 21, 18, 74, 77, 45, 42];
    } else if ( number == 9 ) {
        arrDotes = [18, 19, 20, 21, 29, 37, 45, 53, 61, 69, 77, 76, 75, 74, 42, 34, 26, 43, 44, 66];
    }

    if ( selector == 'h1' ) {

        document.querySelectorAll('.hours .dotes').forEach( item => {
            item.style.background = noActiveDoteColor;
        });

        arrDotes.forEach( item => {
            hourDote[item].style.background = activeDoteColor;
        });

    } else if ( selector == 'h2' ) {

        document.querySelectorAll('.hours-two .dotes').forEach( item => {
            item.style.background = noActiveDoteColor;
        });

        arrDotes.forEach( item => {
            document.querySelectorAll('.hours-two .hours__dote')[item].style.background = activeDoteColor;
        });

    } else if ( selector == 'm1' ) {

        document.querySelectorAll('.minutes .dotes').forEach( item => {
            item.style.background = noActiveDoteColor;
        });

        arrDotes.forEach( item => {
            document.querySelectorAll('.minutes .minutes__dote')[item].style.background = activeDoteColor;
        });

    } else if ( selector == 'm2' ) {

        document.querySelectorAll('.minutes-two .dotes').forEach( item => {
            item.style.background = noActiveDoteColor;
        });

        arrDotes.forEach( item => {
            document.querySelectorAll('.minutes-two .minutes__dote')[item].style.background = activeDoteColor;
        });

    } else if ( selector == 's1' ) {

        document.querySelectorAll('.seconds .dotes').forEach( item => {
            item.style.background = noActiveDoteColor;
        });

        arrDotes.forEach( item => {
            document.querySelectorAll('.seconds .seconds__dote')[item].style.background = activeDoteColor;
        });

    } else if ( selector == 's2' ) {

        document.querySelectorAll('.seconds-two .dotes').forEach( item => {
            item.style.background = noActiveDoteColor;
        });

        arrDotes.forEach( item => {
            document.querySelectorAll('.seconds-two .seconds__dote')[item].style.background = activeDoteColor;
        });

    }

    dotesAll.forEach( item => {
        item.style.border = 'none';
        item.style.transform = 'translate(0px) scale(1)';
        item.style.boxShadow = '1px 1px 1px black';
        if ( item.style.background == activeDoteColor ) {
            item.style.border = '1px solid black';
            item.style.boxShadow = '3px 3px 3px black';
            item.style.transform = 'translate(-4px, -7px) scale(1.4)';
        }
    });

}

setInterval( () => {

    let today = new Date();

    let hourOne;
    let hourTwo;
    let minutesOne;
    let minutesTwo;
    let secondsOne;
    let secondsTwo;

    if ( today.getHours() < 10 ) {
        hourOne = 0;
        hourTwo = today.getHours();
    } else {
        hourOne = String(today.getHours());
        hourTwo = hourOne[1];
        hourOne = hourOne[0];
    }

    if ( today.getMinutes() < 10 ) {
        minutesOne = 0;
        minutesTwo = today.getMinutes();
    } else {
        minutesOne = String(today.getMinutes());
        minutesTwo = minutesOne[1];
        minutesOne = minutesOne[0];
    }

    if ( today.getSeconds() < 10 ) {
        secondsOne = 0;
        secondsTwo = today.getSeconds();
    } else {
        secondsOne = String(today.getSeconds());
        secondsTwo = secondsOne[1];
        secondsOne = secondsOne[0];
    }

    paintNumber(hourOne, 'h1');
    paintNumber(hourTwo, 'h2');

    paintNumber(minutesOne, 'm1');
    paintNumber(minutesTwo, 'm2');

    paintNumber(secondsOne, 's1');
    paintNumber(secondsTwo, 's2');

}, 1000);

let activeParallax = false;
let eventParallax;
function parallax() {
    let widthScreen = ( document.querySelector('html').offsetWidth / 2 ) - event.clientX;
            let heightScreen = ( document.querySelector('html').clientHeight / 2 ) - event.clientY;

            document.querySelector('.hours').style.transform = `translate(${widthScreen / 20}px, ${heightScreen / 10}px)`;
            document.querySelector('.hours-two').style.transform = `translate(${widthScreen / 22}px, ${heightScreen / 12}px)`;
            document.querySelector('.minutes').style.transform = `translate(${widthScreen / 24}px, ${heightScreen / 14}px)`;
            document.querySelector('.minutes-two').style.transform = `translate(${widthScreen / 26}px, ${heightScreen / 16}px)`;
            document.querySelector('.seconds').style.transform = `translate(${widthScreen / 22}px, ${heightScreen / 12}px)`;
            document.querySelector('.seconds-two').style.transform = `translate(${widthScreen / 20}px, ${heightScreen / 10}px)`;

            document.querySelectorAll('.under')[0].style.transform = `translate(${widthScreen / 20}px, ${heightScreen / 20}px)`;
            document.querySelectorAll('.under')[1].style.transform = `translate(${widthScreen / 20}px, ${heightScreen / 20}px)`;
}
document.querySelector('html').addEventListener('click', (e) => {
    if ( activeParallax == false ) {
        eventParallax = document.querySelector('html').addEventListener('mousemove', parallax); 
        activeParallax = true;
    } else if ( activeParallax == true ) {
        eventParallax = document.querySelector('html').removeEventListener('mousemove', parallax); 
        activeParallax = false;
    }
});