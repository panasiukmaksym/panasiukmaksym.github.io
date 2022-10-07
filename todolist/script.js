const inputBlock = document.querySelector('.block__input');
const buttonBlock = document.querySelector('.block__button');
const listBlock = document.querySelector('.block__list');
const infoBlock = document.querySelector('.block__info');
const clearning = document.querySelector('.block__clear');
let point = 1;
function infoText(title) {
    infoBlock.textContent = title;
    infoBlock.style.bottom = '-30px';
    infoBlock.style.opacity = '1';
    setTimeout( ()=>{
        infoBlock.style.opacity = '0';
        setTimeout( ()=> {
            infoBlock.style.bottom = '0px';
        }, 500);
    }, 300);
}
clearning.addEventListener('click', () => {
    document.querySelectorAll('.block__item').forEach( item => {
        item.style.margin = '0px 150% 5px -150%';
    });
    setTimeout( () => {
        localStorage.clear();
        point = 1;
        listBlock.innerHTML = '';
        inputBlock.value = '';
        infoText('Список очищено');
        clearning.style.display = 'none';
    }, 600);
});
function addedNewItem() {
    if ( inputBlock.value != '' ) {
        let dataFromUser = inputBlock.value;
        localStorage.setItem(point, dataFromUser);
        const newPoint = document.createElement('div');
        newPoint.innerHTML = 
        `<div class="block__text"><span>${point}</span>. ${dataFromUser}</div><div class="block__trash"></div>`;
        newPoint.classList.add('block__item');
        listBlock.append(newPoint);
        point++;
        inputBlock.value = '';
        infoText('Добавлено новий пункт');
        clearning.style.display = 'flex';
    }
}
buttonBlock.addEventListener('click', () => {
    addedNewItem();
});
document.addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
        addedNewItem();
    }
});
listBlock.addEventListener('click', (event) => {
    if ( event.target.classList[0] == 'block__trash' ) {
        console.log(event.target.parentNode);
        event.target.parentNode.style.margin = '0px 150% 5px -150%';
        setTimeout(function(){
            localStorage.removeItem(Number(event.target.parentNode.firstChild.firstChild.textContent));
            infoText('Видалено один пункт');
            if ( localStorage.length < 1 ) {
                clearning.style.display = 'none';
            }
            repaint();
        }, 600);
    }
});
function repaint() {
    const arrFromStorage = Object.values(localStorage);
    localStorage.clear();
    listBlock.innerHTML = '';
    point = 1;
    arrFromStorage.forEach( (item) => {
        localStorage.setItem(point, item);
        const newPoint = document.createElement('div');
        newPoint.innerHTML = 
            `<div class="block__text"><span>${point}</span>. ${item}</div><div class="block__trash"></div>`;
        newPoint.classList.add('block__item');
        listBlock.append(newPoint);
        point++;
    });
    if ( localStorage.length > 0 ) {
        clearning.style.display = 'flex';
    }
}
repaint();
document.querySelector('.block__title').addEventListener('click', () => {
    console.log(Object.values(localStorage));
});