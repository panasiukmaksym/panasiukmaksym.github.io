"use strict";

const personalMovieBD = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieBD.count = prompt("Сколько фильмов вы уже посмотрели?", "");

    while (
      personalMovieBD.count == "" ||
      personalMovieBD.count == null ||
      isNaN(personalMovieBD.count)
    ) {
      personalMovieBD.count = prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: function () {
    first: for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", "").trim();
      if (a == "" || a > 50 || a === null) {
        i--;
        continue first;
      }
      const b = prompt("На сколько оцените его?", "");
      if (b == "" || b > 50 || b === null) {
        i--;
        continue first;
      }
      personalMovieBD.movies[a] = b;
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieBD.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieBD.count >= 10 && personalMovieBD.count <= 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieBD.count > 30) {
      console.log("Вы киноман");
    }
  },
  showMyDB: function () {
    if (personalMovieBD.privat == false) {
      console.log(personalMovieBD);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieBD.privat) {
      personalMovieBD.privat = false;
    } else {
      personalMovieBD.privat = true;
    }
  },
  writeYourGenres: function () {
    for (let i = 0; i < 3; i++) {
      personalMovieBD.genres[i] = prompt(
        `Ваш любимый жанр под номером ${i + 1}`,
        ""
      );
      if (
        personalMovieBD.genres[i] == null ||
        personalMovieBD.genres[i] == ""
      ) {
        i--;
        continue;
      }
    }
    personalMovieBD.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
};
// personalMovieBD.writeYourGenres();

// WEB SHOW

const block = document.querySelector(".inside");
block.style.marginTop = "0px";
block.style.marginLeft = "0px";

const down = document.querySelector(".button__down");
const up = document.querySelector(".button__up");
const left = document.querySelector(".button__left");
const right = document.querySelector(".button__right");

let subs = document.querySelector(".subs");
subs.style.opacity = "0.8";
let numberX = document.querySelector(".insideX");
let numberY = document.querySelector(".insideY");

function update(x, y) {
  numberX.innerHTML = `Слева-${x}px`;
  numberY.innerHTML = `Сверху-${y}px`;
  if (y < 30 || y > 230 || x < 30 || x > 230) {
    block.style.background = "orange";
    block.style.boxShadow = '1px 1px 8px black';
    numberX.style.color = "black";
    numberY.style.color = "black";
  } else {
    block.style.background = "black";
    block.style.boxShadow = 'none';
    numberX.style.color = "white";
    numberY.style.color = "white";
  }
  if (y < 30) {
    subs.style.color = "black";
    subs.style.marginTop = "300px";
  } else if (y > 230) {
    subs.style.color = "black";
    subs.style.marginTop = "15px";
  } else if (x < 30) {
    subs.style.color = "black";
    if (y > 200) {
      subs.style.marginTop = "15px";
    } else if (y < 80) {
      subs.style.marginTop = "300px";
    }
  } else if (x > 230) {
    subs.style.color = "black";
    if (y > 200) {
      subs.style.marginTop = "15px";
    } else if (y < 80) {
      subs.style.marginTop = "300px";
    }
  } else {
    subs.style.color = "rgba(0,0,0,0)";
  }
}
update(0, 0);

function inform(side) {
  let info = document.querySelector(".info");
  info.style.transition = "0s all";
  info.style.opacity = "1";
  if (side == "button__down") {
    info.innerHTML = `+ 20px вниз`;
  } else if (side == "button__up") {
    info.innerHTML = `+ 20px вверх`;
  } else if (side == "button__left") {
    info.innerHTML = `+ 20px влево`;
  } else if (side == "button__right") {
    info.innerHTML = `+ 20px вправо`;
  }
  setTimeout(function () {
    info.style.opacity = "0";
    info.style.transition = "0.5s all";
  }, 700);
}

down.addEventListener("click", function () {
  let actuall = block.style.marginTop;
  let number = "";
  for (let i = 0; i < 10; i++) {
    if (actuall[i] == "p") {
      break;
    }
    number += actuall[i];
  }
  if (number < 260) {
    if ( number > 240 ) {
      number = 260;
    } else {
      number = +number + 20;
    }
    update(parseInt(block.style.marginLeft), number);
    inform(this.classList[1]);
    number = `${number}px`;
    block.style.marginTop = number;
  }
});

up.addEventListener("click", function () {
  let actuall = block.style.marginTop;
  let number = "";
  for (let i = 0; i < 10; i++) {
    if (actuall[i] == "p") {
      break;
    }
    number += actuall[i];
  }
  if (number > 0) {
    if ( number < 20 ) {
      number = 0;
    } else {
      number = +number - 20;
    }
    update(parseInt(block.style.marginLeft), number);
    inform(this.classList[1]);
    number = `${number}px`;
    block.style.marginTop = number;
  }
});

left.addEventListener("click", function () {
  let actuall = block.style.marginLeft;
  let number = "";
  for (let i = 0; i < 10; i++) {
    if (actuall[i] == "p") {
      break;
    }
    number += actuall[i];
  }
  if (number > 0) {
    if ( number < 20 ) {
      number = 0;
    } else {
      number = +number - 20;
    }
    update(number, parseInt(block.style.marginTop));
    inform(this.classList[1]);
    number = `${number}px`;
    block.style.marginLeft = number;
  }
});

right.addEventListener("click", function () {
  let actuall = block.style.marginLeft;
  let number = "";
  for (let i = 0; i < 10; i++) {
    if (actuall[i] == "p") {
      break;
    }
    number += actuall[i];
  }
  if (number < 260) {
    if ( number > 240 ) {
      number = 260;
    } else {
      number = +number + 20;
    }
    update(number, parseInt(block.style.marginTop));
    inform(this.classList[1]);
    number = `${number}px`;
    block.style.marginLeft = number;
  }
});

let glob = document.querySelector('.block');
let active = false;
let cycle;
block.addEventListener("click", function () {
  if (active == false) {
    document.querySelector(".info").style.opacity = "0";
    glob.style.background = 'yellow';
    active = true;
    cycle = setInterval(function () {
      let left = Math.floor(Math.random() * 260);
      let top = Math.floor(Math.random() * 260);
      update(left, top);
      left = `${left}px`;
      top = `${top}px`;
      block.style.marginLeft = left;
      block.style.marginTop = top;
    }, 1500);
  } else if (active == true) {
    clearInterval(cycle);
    glob.style.background = 'white';
    active = false;
  }
});

// Circles - Cross

const card = document.querySelectorAll(".chess__card");
let now = true;

let winner = document.querySelector(".winner");
let reload = document.querySelector(".reload");

let arrAct = [false, false, false, false, false, false, false, false, false];
let activeCard = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];

reload.style.opacity = "0";

reload.addEventListener("click", function () {
  reload.style.opacity = "0";
  winner.innerHTML = "Сейчас ходят - Нолики";
  now = true;
  card.forEach((item, i) => {
    item.removeAttribute("class");
    item.classList.add("chess__card");
    item.style.background = "black";
    activeCard[i] = false;
    arrAct[i] = false;
    item.style.cursor = "pointer";
  });
  winner.style.background = 'white';
  winner.style.color = 'black';
});

function searchWinner(formFactor) {
  if (formFactor == "cross") {
    winner.innerHTML = "ПОБЕДИЛИ - КРЕСТИКИ";
  } else if (formFactor == "circles") {
    winner.innerHTML = "ПОБЕДИЛИ - НОЛИКИ";
  }
  winner.style.background = 'purple';
  winner.style.color = 'orange';
  winner.style.padding = '10px';
  for (let i = 0; i < activeCard.length; i++) {
    activeCard[i] = true;
  }
  document.querySelectorAll('*').forEach( (item, i) => {
    if ( item.style.background == 'red' ) {
        item.style.background = 'purple';
    }
    });
  reload.style.opacity = "1";
  winner.style.opacity = "1";
}

function checking() {
  let full = activeCard.includes(false);
  if (!full) {
    reload.style.opacity = "1";
    winner.style.opacity = "1";
    winner.innerHTML = "НИЧЬЯ";
    winner.style.padding = '10px';
    winner.style.background = 'green';
    card.forEach( (item, i) => {
        item.style.background = 'green';
    });
  }
  if (
    (card[0].classList[1] == "circles" &&
      card[1].classList[1] == "circles" &&
      card[2].classList[1] == "circles") ||
    (card[0].classList[1] == "cross" &&
      card[1].classList[1] == "cross" &&
      card[2].classList[1] == "cross")
  ) {
    card[0].style.background = "red";
    card[1].style.background = "red";
    card[2].style.background = "red";
    searchWinner(card[0].classList[1]);
  } else if (
    (card[0].classList[1] == "circles" &&
      card[3].classList[1] == "circles" &&
      card[6].classList[1] == "circles") ||
    (card[0].classList[1] == "cross" &&
      card[3].classList[1] == "cross" &&
      card[6].classList[1] == "cross")
  ) {
    card[0].style.background = "red";
    card[3].style.background = "red";
    card[6].style.background = "red";
    searchWinner(card[0].classList[1]);
  } else if (
    (card[6].classList[1] == "circles" &&
      card[7].classList[1] == "circles" &&
      card[8].classList[1] == "circles") ||
    (card[6].classList[1] == "cross" &&
      card[7].classList[1] == "cross" &&
      card[8].classList[1] == "cross")
  ) {
    card[6].style.background = "red";
    card[7].style.background = "red";
    card[8].style.background = "red";
    searchWinner(card[6].classList[1]);
  } else if (
    (card[2].classList[1] == "circles" &&
      card[5].classList[1] == "circles" &&
      card[8].classList[1] == "circles") ||
    (card[2].classList[1] == "cross" &&
      card[5].classList[1] == "cross" &&
      card[8].classList[1] == "cross")
  ) {
    card[2].style.background = "red";
    card[5].style.background = "red";
    card[8].style.background = "red";
    searchWinner(card[2].classList[1]);
  } else if (
    (card[3].classList[1] == "circles" &&
      card[4].classList[1] == "circles" &&
      card[5].classList[1] == "circles") ||
    (card[3].classList[1] == "cross" &&
      card[4].classList[1] == "cross" &&
      card[5].classList[1] == "cross")
  ) {
    card[3].style.background = "red";
    card[4].style.background = "red";
    card[5].style.background = "red";
    searchWinner(card[3].classList[1]);
  } else if (
    (card[1].classList[1] == "circles" &&
      card[4].classList[1] == "circles" &&
      card[7].classList[1] == "circles") ||
    (card[1].classList[1] == "cross" &&
      card[4].classList[1] == "cross" &&
      card[7].classList[1] == "cross")
  ) {
    card[1].style.background = "red";
    card[4].style.background = "red";
    card[7].style.background = "red";
    searchWinner(card[1].classList[1]);
  } else if (
    (card[0].classList[1] == "circles" &&
      card[4].classList[1] == "circles" &&
      card[8].classList[1] == "circles") ||
    (card[0].classList[1] == "cross" &&
      card[4].classList[1] == "cross" &&
      card[8].classList[1] == "cross")
  ) {
    card[0].style.background = "red";
    card[4].style.background = "red";
    card[8].style.background = "red";
    searchWinner(card[0].classList[1]);
  } else if (
    (card[2].classList[1] == "circles" &&
      card[4].classList[1] == "circles" &&
      card[6].classList[1] == "circles") ||
    (card[2].classList[1] == "cross" &&
      card[4].classList[1] == "cross" &&
      card[6].classList[1] == "cross")
  ) {
    card[2].style.background = "red";
    card[4].style.background = "red";
    card[6].style.background = "red";
    searchWinner(card[2].classList[1]);
  }
}

card.forEach((item, i) => {
  item.style.cursor = "pointer";
  item.addEventListener("click", function () {
    if (activeCard[i] == false) {
      if (now == true) {
        this.classList.add("circles");
        this.style.cursor = "default";
        now = false;
        winner.innerHTML = "Сейчас ходят - Крестики";
        activeCard[i] = true;
      } else if (now == false) {
        this.classList.add("cross");
        this.style.cursor = "default";
        now = true;
        winner.innerHTML = "Сейчас ходят - Нолики";
        activeCard[i] = true;
      }
      checking();
    }
  });
});

const autostart = document.querySelector('.intel');
let inter;
let activeAuto = false;

autostart.addEventListener('click', () => {
  if ( activeAuto == false ) {

  inter = setInterval(function(){

    let number = Math.floor(Math.random() * 8);

    if ( arrAct[number] == true && number != 8 ) {
      if ( arrAct[number + 1] == false ) {
        number++;
      } else if ( arrAct[number - 1] == false ) {
        number--;
      } else if ( arrAct[number - 2] == false ) {
        number -= 2;
      } else if ( arrAct[number + 2] == false ) {
        number += 2;
      } else if ( arrAct[number - 3] == false ) {
        number -= 3;
      } else if ( arrAct[number + 3] == false ) {
        number += 3;
      } else if ( arrAct[number - 4] == false ) {
        number -= 4;
      } else if ( arrAct[number + 4] == false ) {
        number += 4;
      } else if ( arrAct[number - 5] == false ) {
        number -= 5;
      } else if ( arrAct[number + 5] == false ) {
        number += 5;
      } else if ( arrAct[number - 6] == false ) {
        number -= 6;
      } else if ( arrAct[number + 6] == false ) {
        number += 6;
      } else if ( arrAct[number - 7] == false ) {
        number -= 7;
      } else if ( arrAct[number + 7] == false ) {
        number += 7;
      }
    }

    if (activeCard[number] == false) {

      if (now == true) {
        card[number].classList.add("circles");
        card[number].style.cursor = "default";
        now = false;
        winner.innerHTML = "Сейчас ходят - Крестики";
        activeCard[number] = true;

      } else if (now == false) {
        card[number].classList.add("cross");
        card[number].style.cursor = "default";
        now = true;
        winner.innerHTML = "Сейчас ходят - Нолики";
        activeCard[number] = true;
      }
      arrAct[number] = true;
      checking();
    }

  }, 1000);

  activeAuto = true;
  autostart.style.background = 'orange';

  } else if ( activeAuto == true ) {

    clearInterval(inter);
    activeAuto = false;
    autostart.style.background = 'white';
    arrAct.forEach( (item, i) => {
      item = false;
    });

  }
});

// Learn JS object

// function painting(number) {
//     let arr = [];
//     arr.toString();
//     let count = number;
//     for ( let i = 0; i < number; i++ ) {
//         for ( let j = 0;)
//     }
//     console.log(arr);
// }
// painting(7);
