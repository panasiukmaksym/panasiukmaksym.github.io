"use strict";

// OXO GAMES

const card = document.querySelectorAll(".chess__card");
let now = true;

const varPvp = document.querySelector(".pvp");
const varPve = document.querySelector(".pve");
const varEve = document.querySelector(".eve");
let pveActive = false;

varPvp.style.background = "orange";

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

function nulling() {
  card.forEach((item, i) => {
    item.removeAttribute("class");
    item.classList.add("chess__card");
    item.style.background = "black";
    activeCard[i] = false;
    arrAct[i] = false;
    item.style.cursor = "pointer";
    reload.style.opacity = "0";
    winner.innerHTML = "ЗАРАЗ ХОДЯТЬ - НОЛИКИ";
    now = true;
    winner.style.background = "white";
    winner.style.color = "black";
    whyAtBox[i] = "";
    step = 0;
  });
  if (varPve.style.background == "orange") {
    pveActive = true;
  }
}

reload.addEventListener("click", function () {
  // reload.style.opacity = "0";
  // winner.innerHTML = "Сейчас ходят - Нолики";
  // now = true;
  nulling();
  // winner.style.background = 'white';
  // winner.style.color = 'black';
});

function searchWinner(formFactor) {
  pveActive = false;
  if (formFactor == "cross") {
    winner.innerHTML = "ПЕРЕМОГЛИ - ХРЕСТИКИ";
  } else if (formFactor == "circles") {
    winner.innerHTML = "ПЕРЕМОГЛИ - НОЛИКИ";
  }
  winner.style.background = "purple";
  winner.style.color = "orange";
  winner.style.padding = "10px";
  for (let i = 0; i < activeCard.length; i++) {
    activeCard[i] = true;
  }
  document.querySelectorAll("*").forEach((item, i) => {
    if (item.style.background == "red") {
      item.style.background = "purple";
    }
  });
  reload.style.opacity = "1";
  winner.style.opacity = "1";
}

function checking() {
  let full = activeCard.includes(false);
  if (!full) {
    pveActive = false;
    reload.style.opacity = "1";
    winner.style.opacity = "1";
    winner.innerHTML = "НІЧІЯ";
    winner.style.padding = "10px";
    winner.style.background = "green";
    card.forEach((item, i) => {
      item.style.background = "green";
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

function actionForComputer(number) {
  setTimeout(function () {
    if (activeCard[number] == false) {
      card[number].classList.add("cross");
      card[number].style.cursor = "default";
      now = true;
      winner.innerHTML = "ЗАРАЗ ХОДЯТЬ - НОЛИКИ";
      activeCard[number] = true;
      whyAtBox[number] = "cross";
    } else {
      let randomNumber = getRandomPve();
      card[randomNumber].classList.add("cross");
      card[randomNumber].style.cursor = "default";
      now = true;
      winner.innerHTML = "ЗАРАЗ ХОДЯТЬ - НОЛИКИ";
      activeCard[randomNumber] = true;
      whyAtBox[randomNumber] = "cross";
    }
    checking();
  }, 500);
}

let whyAtBox = ["", "", "", "", "", "", "", "", ""];
let step = 0;

// HAND ON TORCH

card.forEach((item, i) => {
  item.style.cursor = "pointer";
  item.addEventListener("click", function () {
    if (activeCard[i] == false) {
      if (now == true) {
        this.classList.add("circles");
        this.style.cursor = "default";
        now = false;
        winner.innerHTML = "ЗАРАЗ ХОДЯТЬ - ХРЕСТИКИ";
        activeCard[i] = true;
        whyAtBox[i] = "circles";
        step++;
      } else if (now == false) {
        this.classList.add("cross");
        this.style.cursor = "default";
        now = true;
        winner.innerHTML = "ЗАРАЗ ХОДЯТЬ - НОЛИКИ";
        activeCard[i] = true;
        whyAtBox[i] = "cross";
        step++;
      }
    }
    checking();

    if (pveActive == true) {
      // let whyHim = whyAtBox.indexOf('circles');

      if (step == 1) {
        let ranNum = Math.floor(Math.random() * 4);

        // if ( ranNum == 0 || ranNum == 2 || ranNum == 6 || ranNum == 8 )
        console.log(ranNum);
        if (ranNum == 0 && activeCard[0] == false) {
          ranNum = 0;
        } else if (ranNum == 1 && activeCard[2] == false) {
          ranNum = 2;
        } else if (ranNum == 2 && activeCard[6] == false) {
          ranNum = 6;
        } else if (ranNum == 3 && activeCard[8] == false) {
          ranNum = 8;
        } else if (activeCard[6] == false) {
          ranNum = 6;
        } else if (activeCard[8] == false) {
          ranNum = 8;
        }
        console.log(ranNum);

        if (activeCard[0] == true) {
          actionForComputer(ranNum);
        } else if (activeCard[1] == true) {
          actionForComputer(ranNum);
        } else if (activeCard[2] == true) {
          actionForComputer(ranNum);
        } else if (activeCard[3] == true) {
          actionForComputer(ranNum);
        } else if (activeCard[4] == true) {
          actionForComputer(ranNum);
        } else if (activeCard[5] == true) {
          actionForComputer(ranNum);
        } else if (activeCard[6] == true) {
          actionForComputer(ranNum);
        } else if (activeCard[7] == true) {
          actionForComputer(ranNum);
        } else if (activeCard[8] == true) {
          actionForComputer(ranNum);
        }

        // VERSION WITHOUT RANDOM FIRST NUMBER
        // if ( activeCard[0] == true ) {
        //   actionForComputer(8);
        // } else if ( activeCard[1] == true ) {
        //   actionForComputer(8);
        // } else if ( activeCard[2] == true ) {
        //   actionForComputer(8);
        // } else if ( activeCard[3] == true ) {
        //   actionForComputer(8);
        // } else if ( activeCard[4] == true ) {
        //   actionForComputer(8);
        // } else if ( activeCard[5] == true ) {
        //   actionForComputer(8);
        // } else if ( activeCard[6] == true ) {
        //   actionForComputer(8);
        // } else if ( activeCard[7] == true ) {
        //   actionForComputer(8);
        // } else if ( activeCard[8] == true ) {
        //   actionForComputer(0);
        // }

      } else if (step == 2) {
        if (whyAtBox[0] == "circles" && whyAtBox[1] == "circles") {
          actionForComputer(2);
        } else if (whyAtBox[0] == "circles" && whyAtBox[2] == "circles") {
          actionForComputer(1);
        } else if (whyAtBox[0] == "circles" && whyAtBox[3] == "circles") {
          actionForComputer(6);
        } else if (whyAtBox[0] == "circles" && whyAtBox[4] == "circles") {
          actionForComputer(8);
        } else if (whyAtBox[0] == "circles" && whyAtBox[5] == "circles") {
          actionForComputer(6);
        } else if (whyAtBox[0] == "circles" && whyAtBox[6] == "circles") {
          actionForComputer(3);
        } else if (whyAtBox[0] == "circles" && whyAtBox[7] == "circles") {
          actionForComputer(2);
        } else if (whyAtBox[0] == "circles" && whyAtBox[8] == "circles") {
          actionForComputer(4);
        } else if (whyAtBox[8] == "circles" && whyAtBox[1] == "circles") {
          actionForComputer(6);
        } else if (whyAtBox[8] == "circles" && whyAtBox[2] == "circles") {
          actionForComputer(5);
        } else if (whyAtBox[8] == "circles" && whyAtBox[3] == "circles") {
          actionForComputer(2);
        } else if (whyAtBox[8] == "circles" && whyAtBox[4] == "circles") {
          actionForComputer(0);
        } else if (whyAtBox[8] == "circles" && whyAtBox[5] == "circles") {
          actionForComputer(2);
        } else if (whyAtBox[8] == "circles" && whyAtBox[6] == "circles") {
          actionForComputer(7);
        } else if (whyAtBox[8] == "circles" && whyAtBox[7] == "circles") {
          actionForComputer(6);
        } else if (whyAtBox[1] == "circles" && whyAtBox[2] == "circles") {
          actionForComputer(0);
        } else if (whyAtBox[1] == "circles" && whyAtBox[3] == "circles") {
          actionForComputer(6);
        } else if (whyAtBox[1] == "circles" && whyAtBox[4] == "circles") {
          actionForComputer(7);
        } else if (whyAtBox[1] == "circles" && whyAtBox[5] == "circles") {
          actionForComputer(6);
        } else if (whyAtBox[1] == "circles" && whyAtBox[6] == "circles") {
          actionForComputer(2);
        } else if (whyAtBox[1] == "circles" && whyAtBox[7] == "circles") {
          actionForComputer(4);
        } else if (whyAtBox[2] == "circles" && whyAtBox[3] == "circles") {
          actionForComputer(6);
        } else if (whyAtBox[2] == "circles" && whyAtBox[4] == "circles") {
          actionForComputer(6);
        } else if (whyAtBox[2] == "circles" && whyAtBox[5] == "circles") {
          actionForComputer(8);
        } else if (whyAtBox[2] == "circles" && whyAtBox[6] == "circles") {
          actionForComputer(4);
        } else if (whyAtBox[2] == "circles" && whyAtBox[7] == "circles") {
          actionForComputer(0);
        } else if (whyAtBox[3] == "circles" && whyAtBox[4] == "circles") {
          actionForComputer(5);
        } else if (whyAtBox[3] == "circles" && whyAtBox[5] == "circles") {
          actionForComputer(4);
        } else if (whyAtBox[3] == "circles" && whyAtBox[6] == "circles") {
          actionForComputer(0);
        } else if (whyAtBox[3] == "circles" && whyAtBox[7] == "circles") {
          actionForComputer(0);
        } else if (whyAtBox[4] == "circles" && whyAtBox[5] == "circles") {
          actionForComputer(3);
        } else if (whyAtBox[4] == "circles" && whyAtBox[6] == "circles") {
          actionForComputer(2);
        } else if (whyAtBox[4] == "circles" && whyAtBox[7] == "circles") {
          actionForComputer(1);
        } else if (whyAtBox[5] == "circles" && whyAtBox[6] == "circles") {
          actionForComputer(0);
        } else if (whyAtBox[5] == "circles" && whyAtBox[7] == "circles") {
          actionForComputer(0);
        } else if (whyAtBox[6] == "circles" && whyAtBox[7] == "circles") {
          actionForComputer(0);
        }
      } else if (step == 3) {
        if (
          whyAtBox[0] == "cross" &&
          whyAtBox[2] == "cross" &&
          whyAtBox[1] == ""
        ) {
          actionForComputer(1);
        } else if (
          whyAtBox[8] == "cross" &&
          whyAtBox[4] == "cross" &&
          whyAtBox[0] == ""
        ) {
          actionForComputer(0);
        } else if (
          whyAtBox[3] == "cross" &&
          whyAtBox[5] == "cross" &&
          whyAtBox[4] == ""
        ) {
          actionForComputer(4);
        } else if (
          whyAtBox[6] == "cross" &&
          whyAtBox[8] == "cross" &&
          whyAtBox[7] == ""
        ) {
          actionForComputer(7);
        } else if (
          whyAtBox[2] == "cross" &&
          whyAtBox[6] == "cross" &&
          whyAtBox[4] == ""
        ) {
          actionForComputer(4);
        } else if (
          whyAtBox[0] == "cross" &&
          whyAtBox[6] == "cross" &&
          whyAtBox[3] == ""
        ) {
          actionForComputer(3);
        } else if (
          whyAtBox[1] == "cross" &&
          whyAtBox[7] == "cross" &&
          whyAtBox[4] == ""
        ) {
          actionForComputer(4);
        } else if (
          whyAtBox[2] == "cross" &&
          whyAtBox[8] == "cross" &&
          whyAtBox[5] == ""
        ) {
          actionForComputer(5);
        } else if (
          whyAtBox[0] == "cross" &&
          whyAtBox[8] == "cross" &&
          whyAtBox[4] == ""
        ) {
          actionForComputer(4);
        } else if (
          whyAtBox[0] == "cross" &&
          whyAtBox[3] == "cross" &&
          whyAtBox[6] == ""
        ) {
          actionForComputer(6);
        } else if (
          whyAtBox[1] == "cross" &&
          whyAtBox[4] == "cross" &&
          whyAtBox[7] == ""
        ) {
          actionForComputer(7);
        } else if (
          whyAtBox[2] == "cross" &&
          whyAtBox[5] == "cross" &&
          whyAtBox[8] == ""
        ) {
          actionForComputer(8);
        } else if (
          whyAtBox[6] == "cross" &&
          whyAtBox[3] == "cross" &&
          whyAtBox[0] == ""
        ) {
          actionForComputer(0);
        } else if (
          whyAtBox[7] == "cross" &&
          whyAtBox[5] == "cross" &&
          whyAtBox[1] == ""
        ) {
          actionForComputer(1);
        } else if (
          whyAtBox[8] == "cross" &&
          whyAtBox[5] == "cross" &&
          whyAtBox[2] == ""
        ) {
          actionForComputer(2);
        } else if (
          whyAtBox[0] == "cross" &&
          whyAtBox[1] == "cross" &&
          whyAtBox[2] == ""
        ) {
          actionForComputer(2);
        } else if (
          whyAtBox[3] == "cross" &&
          whyAtBox[4] == "cross" &&
          whyAtBox[5] == ""
        ) {
          actionForComputer(5);
        } else if (
          whyAtBox[6] == "cross" &&
          whyAtBox[7] == "cross" &&
          whyAtBox[8] == ""
        ) {
          actionForComputer(8);
        } else if (
          whyAtBox[2] == "cross" &&
          whyAtBox[1] == "cross" &&
          whyAtBox[0] == ""
        ) {
          actionForComputer(0);
        } else if (
          whyAtBox[5] == "cross" &&
          whyAtBox[4] == "cross" &&
          whyAtBox[3] == ""
        ) {
          actionForComputer(3);
        } else if (
          whyAtBox[8] == "cross" &&
          whyAtBox[7] == "cross" &&
          whyAtBox[6] == ""
        ) {
          actionForComputer(6);
        } else if (
          whyAtBox[0] == "cross" &&
          whyAtBox[4] == "cross" &&
          whyAtBox[8] == ""
        ) {
          actionForComputer(8);
        } else if (
          whyAtBox[6] == "cross" &&
          whyAtBox[4] == "cross" &&
          whyAtBox[2] == ""
        ) {
          actionForComputer(2);
        } else if (
          whyAtBox[0] == "circles" &&
          whyAtBox[1] == "circles" &&
          whyAtBox[2] == ""
        ) {
          actionForComputer(2);
        } else if (
          whyAtBox[0] == "circles" &&
          whyAtBox[2] == "circles" &&
          whyAtBox[1] == ""
        ) {
          actionForComputer(1);
        } else if (
          whyAtBox[1] == "circles" &&
          whyAtBox[2] == "circles" &&
          whyAtBox[0] == ""
        ) {
          actionForComputer(0);
        } else if (
          whyAtBox[3] == "circles" &&
          whyAtBox[4] == "circles" &&
          whyAtBox[5] == ""
        ) {
          actionForComputer(5);
        } else if (
          whyAtBox[3] == "circles" &&
          whyAtBox[5] == "circles" &&
          whyAtBox[4] == ""
        ) {
          actionForComputer(4);
        } else if (
          whyAtBox[4] == "circles" &&
          whyAtBox[5] == "circles" &&
          whyAtBox[3] == ""
        ) {
          actionForComputer(3);
        } else if (
          whyAtBox[6] == "circles" &&
          whyAtBox[7] == "circles" &&
          whyAtBox[8] == ""
        ) {
          actionForComputer(8);
        } else if (
          whyAtBox[6] == "circles" &&
          whyAtBox[8] == "circles" &&
          whyAtBox[7] == ""
        ) {
          actionForComputer(7);
        } else if (
          whyAtBox[7] == "circles" &&
          whyAtBox[8] == "circles" &&
          whyAtBox[6] == ""
        ) {
          actionForComputer(2);
        } else if (
          whyAtBox[0] == "circles" &&
          whyAtBox[4] == "circles" &&
          whyAtBox[8] == ""
        ) {
          actionForComputer(8);
        } else if (
          whyAtBox[0] == "circles" &&
          whyAtBox[8] == "circles" &&
          whyAtBox[4] == ""
        ) {
          actionForComputer(4);
        } else if (
          whyAtBox[4] == "circles" &&
          whyAtBox[8] == "circles" &&
          whyAtBox[0] == ""
        ) {
          actionForComputer(0);
        } else if (
          whyAtBox[2] == "circles" &&
          whyAtBox[4] == "circles" &&
          whyAtBox[6] == ""
        ) {
          actionForComputer(6);
        } else if (
          whyAtBox[2] == "circles" &&
          whyAtBox[6] == "circles" &&
          whyAtBox[4] == ""
        ) {
          actionForComputer(4);
        } else if (
          whyAtBox[4] == "circles" &&
          whyAtBox[6] == "circles" &&
          whyAtBox[2] == ""
        ) {
          actionForComputer(2);
        } else if (
          whyAtBox[0] == "circles" &&
          whyAtBox[3] == "circles" &&
          whyAtBox[6] == ""
        ) {
          actionForComputer(6);
        } else if (
          whyAtBox[0] == "circles" &&
          whyAtBox[6] == "circles" &&
          whyAtBox[3] == ""
        ) {
          actionForComputer(3);
        } else if (
          whyAtBox[6] == "circles" &&
          whyAtBox[3] == "circles" &&
          whyAtBox[0] == ""
        ) {
          actionForComputer(0);
        } else if (
          whyAtBox[1] == "circles" &&
          whyAtBox[4] == "circles" &&
          whyAtBox[7] == ""
        ) {
          actionForComputer(7);
        } else if (
          whyAtBox[1] == "circles" &&
          whyAtBox[7] == "circles" &&
          whyAtBox[4] == ""
        ) {
          actionForComputer(4);
        } else if (
          whyAtBox[4] == "circles" &&
          whyAtBox[7] == "circles" &&
          whyAtBox[1] == ""
        ) {
          actionForComputer(1);
        } else if (
          whyAtBox[2] == "circles" &&
          whyAtBox[5] == "circles" &&
          whyAtBox[8] == ""
        ) {
          actionForComputer(8);
        } else if (
          whyAtBox[2] == "circles" &&
          whyAtBox[8] == "circles" &&
          whyAtBox[5] == ""
        ) {
          actionForComputer(2);
        } else if (
          whyAtBox[5] == "circles" &&
          whyAtBox[8] == "circles" &&
          whyAtBox[2] == ""
        ) {
          actionForComputer(2);
        } else {
          if (
            whyAtBox[0] == "circles" &&
            whyAtBox[1] == "circles" &&
            whyAtBox[3] == "circles"
          ) {
            actionForComputer(5);
          } else if (
            whyAtBox[0] == "circles" &&
            whyAtBox[1] == "circles" &&
            whyAtBox[4] == "circles"
          ) {
            actionForComputer(5);
          } else if (
            whyAtBox[0] == "circles" &&
            whyAtBox[1] == "circles" &&
            whyAtBox[5] == "circles"
          ) {
            actionForComputer(6);
          } else if (
            whyAtBox[0] == "circles" &&
            whyAtBox[1] == "circles" &&
            whyAtBox[6] == "circles"
          ) {
            actionForComputer(5);
          } else if (
            whyAtBox[0] == "circles" &&
            whyAtBox[1] == "circles" &&
            whyAtBox[7] == "circles"
          ) {
            actionForComputer(2);
          } else if (
            whyAtBox[0] == "circles" &&
            whyAtBox[2] == "circles" &&
            whyAtBox[3] == "circles"
          ) {
            actionForComputer(6);
          } else if (
            whyAtBox[0] == "circles" &&
            whyAtBox[2] == "circles" &&
            whyAtBox[4] == "circles"
          ) {
            actionForComputer(6);
          } else if (
            whyAtBox[0] == "circles" &&
            whyAtBox[2] == "circles" &&
            whyAtBox[5] == "circles"
          ) {
            actionForComputer(1);
          } else if (
            whyAtBox[0] == "circles" &&
            whyAtBox[2] == "circles" &&
            whyAtBox[6] == "circles"
          ) {
            actionForComputer(4);
          } else if (
            whyAtBox[0] == "circles" &&
            whyAtBox[2] == "circles" &&
            whyAtBox[7] == "circles"
          ) {
            actionForComputer(4);
          } else if (
            whyAtBox[0] == "circles" &&
            whyAtBox[3] == "circles" &&
            whyAtBox[4] == "circles"
          ) {
            actionForComputer(7);
          } else if (
            whyAtBox[0] == "circles" &&
            whyAtBox[3] == "circles" &&
            whyAtBox[5] == "circles"
          ) {
            actionForComputer(6);
          } else if (
            whyAtBox[0] == "circles" &&
            whyAtBox[3] == "circles" &&
            whyAtBox[8] == "circles"
          ) {
            actionForComputer(5);
          } else if (
            whyAtBox[0] == "circles" &&
            whyAtBox[4] == "circles" &&
            whyAtBox[5] == "circles"
          ) {
            actionForComputer(7);
          } else if (
            whyAtBox[0] == "circles" &&
            whyAtBox[4] == "circles" &&
            whyAtBox[6] == "circles"
          ) {
            actionForComputer(5);
          } else if (
            whyAtBox[0] == "circles" &&
            whyAtBox[4] == "circles" &&
            whyAtBox[7] == "circles"
          ) {
            actionForComputer(5);
          } else if (
            whyAtBox[0] == "circles" &&
            whyAtBox[5] == "circles" &&
            whyAtBox[7] == "circles"
          ) {
            actionForComputer(2);
          } else if (
            whyAtBox[0] == "circles" &&
            whyAtBox[6] == "circles" &&
            whyAtBox[7] == "circles"
          ) {
            actionForComputer(2);
          } else if (
            whyAtBox[1] == "circles" &&
            whyAtBox[2] == "circles" &&
            whyAtBox[3] == "circles"
          ) {
            actionForComputer(4);
          } else if (
            whyAtBox[1] == "circles" &&
            whyAtBox[2] == "circles" &&
            whyAtBox[4] == "circles"
          ) {
            actionForComputer(6);
          } else if (
            whyAtBox[1] == "circles" &&
            whyAtBox[2] == "circles" &&
            whyAtBox[5] == "circles"
          ) {
            actionForComputer(4);
          } else if (
            whyAtBox[1] == "circles" &&
            whyAtBox[2] == "circles" &&
            whyAtBox[6] == "circles"
          ) {
            actionForComputer(4);
          } else if (
            whyAtBox[1] == "circles" &&
            whyAtBox[2] == "circles" &&
            whyAtBox[7] == "circles"
          ) {
            actionForComputer(4);
          } else if (
            whyAtBox[1] == "circles" &&
            whyAtBox[3] == "circles" &&
            whyAtBox[4] == "circles"
          ) {
            actionForComputer(7);
          } else if (
            whyAtBox[1] == "circles" &&
            whyAtBox[3] == "circles" &&
            whyAtBox[5] == "circles"
          ) {
            actionForComputer(6);
          } else if (
            whyAtBox[1] == "circles" &&
            whyAtBox[3] == "circles" &&
            whyAtBox[7] == "circles"
          ) {
            actionForComputer(2);
          } else if (
            whyAtBox[1] == "circles" &&
            whyAtBox[4] == "circles" &&
            whyAtBox[5] == "circles"
          ) {
            actionForComputer(7);
          } else if (
            whyAtBox[1] == "circles" &&
            whyAtBox[4] == "circles" &&
            whyAtBox[6] == "circles"
          ) {
            actionForComputer(2);
          } else if (
            whyAtBox[1] == "circles" &&
            whyAtBox[5] == "circles" &&
            whyAtBox[7] == "circles"
          ) {
            actionForComputer(0);
          } else if (
            whyAtBox[1] == "circles" &&
            whyAtBox[5] == "circles" &&
            whyAtBox[6] == "circles"
          ) {
            actionForComputer(0);
          } else if (
            whyAtBox[2] == "circles" &&
            whyAtBox[3] == "circles" &&
            whyAtBox[4] == "circles"
          ) {
            actionForComputer(5);
          } else if (
            whyAtBox[2] == "circles" &&
            whyAtBox[3] == "circles" &&
            whyAtBox[5] == "circles"
          ) {
            actionForComputer(7);
          } else if (
            whyAtBox[2] == "circles" &&
            whyAtBox[3] == "circles" &&
            whyAtBox[7] == "circles"
          ) {
            actionForComputer(0);
          } else if (
            whyAtBox[2] == "circles" &&
            whyAtBox[4] == "circles" &&
            whyAtBox[8] == "circles"
          ) {
            actionForComputer(5);
          } else if (
            whyAtBox[2] == "circles" &&
            whyAtBox[4] == "circles" &&
            whyAtBox[7] == "circles"
          ) {
            actionForComputer(1);
          } else if (
            whyAtBox[4] == "circles" &&
            whyAtBox[5] == "circles" &&
            whyAtBox[6] == "circles"
          ) {
            actionForComputer(2);
          } else if (
            whyAtBox[0] == "circles" &&
            whyAtBox[2] == "circles" &&
            whyAtBox[8] == "circles"
          ) {
            actionForComputer(5);
          } else if (
            whyAtBox[0] == "circles" &&
            whyAtBox[6] == "circles" &&
            whyAtBox[8] == "circles"
          ) {
            actionForComputer(3);
          } else {
            actionForComputer(getRandomPve());
          }
        }
      } else if (step > 3) {
        if (
          whyAtBox[0] == "cross" &&
          whyAtBox[2] == "cross" &&
          whyAtBox[1] == ""
        ) {
          actionForComputer(1);
        } else if (
          whyAtBox[8] == "cross" &&
          whyAtBox[4] == "cross" &&
          whyAtBox[0] == ""
        ) {
          actionForComputer(0);
        } else if (
          whyAtBox[3] == "cross" &&
          whyAtBox[5] == "cross" &&
          whyAtBox[4] == ""
        ) {
          actionForComputer(4);
        } else if (
          whyAtBox[6] == "cross" &&
          whyAtBox[8] == "cross" &&
          whyAtBox[7] == ""
        ) {
          actionForComputer(7);
        } else if (
          whyAtBox[2] == "cross" &&
          whyAtBox[6] == "cross" &&
          whyAtBox[4] == ""
        ) {
          actionForComputer(4);
        } else if (
          whyAtBox[0] == "cross" &&
          whyAtBox[6] == "cross" &&
          whyAtBox[3] == ""
        ) {
          actionForComputer(3);
        } else if (
          whyAtBox[1] == "cross" &&
          whyAtBox[7] == "cross" &&
          whyAtBox[4] == ""
        ) {
          actionForComputer(4);
        } else if (
          whyAtBox[2] == "cross" &&
          whyAtBox[8] == "cross" &&
          whyAtBox[5] == ""
        ) {
          actionForComputer(5);
        } else if (
          whyAtBox[0] == "cross" &&
          whyAtBox[8] == "cross" &&
          whyAtBox[4] == ""
        ) {
          actionForComputer(4);
        } else if (
          whyAtBox[0] == "cross" &&
          whyAtBox[3] == "cross" &&
          whyAtBox[6] == ""
        ) {
          actionForComputer(6);
        } else if (
          whyAtBox[1] == "cross" &&
          whyAtBox[4] == "cross" &&
          whyAtBox[7] == ""
        ) {
          actionForComputer(7);
        } else if (
          whyAtBox[2] == "cross" &&
          whyAtBox[5] == "cross" &&
          whyAtBox[8] == ""
        ) {
          actionForComputer(8);
        } else if (
          whyAtBox[6] == "cross" &&
          whyAtBox[3] == "cross" &&
          whyAtBox[0] == ""
        ) {
          actionForComputer(0);
        } else if (
          whyAtBox[7] == "cross" &&
          whyAtBox[5] == "cross" &&
          whyAtBox[1] == ""
        ) {
          actionForComputer(1);
        } else if (
          whyAtBox[8] == "cross" &&
          whyAtBox[5] == "cross" &&
          whyAtBox[2] == ""
        ) {
          actionForComputer(2);
        } else if (
          whyAtBox[0] == "cross" &&
          whyAtBox[1] == "cross" &&
          whyAtBox[2] == ""
        ) {
          actionForComputer(2);
        } else if (
          whyAtBox[3] == "cross" &&
          whyAtBox[4] == "cross" &&
          whyAtBox[5] == ""
        ) {
          actionForComputer(5);
        } else if (
          whyAtBox[6] == "cross" &&
          whyAtBox[7] == "cross" &&
          whyAtBox[8] == ""
        ) {
          actionForComputer(8);
        } else if (
          whyAtBox[2] == "cross" &&
          whyAtBox[1] == "cross" &&
          whyAtBox[0] == ""
        ) {
          actionForComputer(0);
        } else if (
          whyAtBox[5] == "cross" &&
          whyAtBox[4] == "cross" &&
          whyAtBox[3] == ""
        ) {
          actionForComputer(3);
        } else if (
          whyAtBox[8] == "cross" &&
          whyAtBox[7] == "cross" &&
          whyAtBox[6] == ""
        ) {
          actionForComputer(6);
        } else if (
          whyAtBox[0] == "cross" &&
          whyAtBox[4] == "cross" &&
          whyAtBox[8] == ""
        ) {
          actionForComputer(8);
        } else if (
          whyAtBox[6] == "cross" &&
          whyAtBox[4] == "cross" &&
          whyAtBox[2] == ""
        ) {
          actionForComputer(2);
        } else if (
          whyAtBox[0] == "circles" &&
          whyAtBox[1] == "circles" &&
          whyAtBox[2] == ""
        ) {
          actionForComputer(2);
        } else if (
          whyAtBox[0] == "circles" &&
          whyAtBox[2] == "circles" &&
          whyAtBox[1] == ""
        ) {
          actionForComputer(1);
        } else if (
          whyAtBox[1] == "circles" &&
          whyAtBox[2] == "circles" &&
          whyAtBox[0] == ""
        ) {
          actionForComputer(0);
        } else if (
          whyAtBox[3] == "circles" &&
          whyAtBox[4] == "circles" &&
          whyAtBox[5] == ""
        ) {
          actionForComputer(5);
        } else if (
          whyAtBox[3] == "circles" &&
          whyAtBox[5] == "circles" &&
          whyAtBox[4] == ""
        ) {
          actionForComputer(4);
        } else if (
          whyAtBox[4] == "circles" &&
          whyAtBox[5] == "circles" &&
          whyAtBox[3] == ""
        ) {
          actionForComputer(3);
        } else if (
          whyAtBox[6] == "circles" &&
          whyAtBox[7] == "circles" &&
          whyAtBox[8] == ""
        ) {
          actionForComputer(8);
        } else if (
          whyAtBox[6] == "circles" &&
          whyAtBox[8] == "circles" &&
          whyAtBox[7] == ""
        ) {
          actionForComputer(7);
        } else if (
          whyAtBox[7] == "circles" &&
          whyAtBox[8] == "circles" &&
          whyAtBox[6] == ""
        ) {
          actionForComputer(2);
        } else if (
          whyAtBox[0] == "circles" &&
          whyAtBox[4] == "circles" &&
          whyAtBox[8] == ""
        ) {
          actionForComputer(8);
        } else if (
          whyAtBox[0] == "circles" &&
          whyAtBox[8] == "circles" &&
          whyAtBox[4] == ""
        ) {
          actionForComputer(4);
        } else if (
          whyAtBox[4] == "circles" &&
          whyAtBox[8] == "circles" &&
          whyAtBox[0] == ""
        ) {
          actionForComputer(0);
        } else if (
          whyAtBox[2] == "circles" &&
          whyAtBox[4] == "circles" &&
          whyAtBox[6] == ""
        ) {
          actionForComputer(6);
        } else if (
          whyAtBox[2] == "circles" &&
          whyAtBox[6] == "circles" &&
          whyAtBox[4] == ""
        ) {
          actionForComputer(4);
        } else if (
          whyAtBox[4] == "circles" &&
          whyAtBox[6] == "circles" &&
          whyAtBox[2] == ""
        ) {
          actionForComputer(2);
        } else if (
          whyAtBox[0] == "circles" &&
          whyAtBox[3] == "circles" &&
          whyAtBox[6] == ""
        ) {
          actionForComputer(6);
        } else if (
          whyAtBox[0] == "circles" &&
          whyAtBox[6] == "circles" &&
          whyAtBox[3] == ""
        ) {
          actionForComputer(3);
        } else if (
          whyAtBox[6] == "circles" &&
          whyAtBox[3] == "circles" &&
          whyAtBox[0] == ""
        ) {
          actionForComputer(0);
        } else if (
          whyAtBox[1] == "circles" &&
          whyAtBox[4] == "circles" &&
          whyAtBox[7] == ""
        ) {
          actionForComputer(7);
        } else if (
          whyAtBox[1] == "circles" &&
          whyAtBox[7] == "circles" &&
          whyAtBox[4] == ""
        ) {
          actionForComputer(4);
        } else if (
          whyAtBox[4] == "circles" &&
          whyAtBox[7] == "circles" &&
          whyAtBox[1] == ""
        ) {
          actionForComputer(1);
        } else if (
          whyAtBox[2] == "circles" &&
          whyAtBox[5] == "circles" &&
          whyAtBox[8] == ""
        ) {
          actionForComputer(8);
        } else if (
          whyAtBox[2] == "circles" &&
          whyAtBox[8] == "circles" &&
          whyAtBox[5] == ""
        ) {
          actionForComputer(2);
        } else if (
          whyAtBox[5] == "circles" &&
          whyAtBox[8] == "circles" &&
          whyAtBox[2] == ""
        ) {
          actionForComputer(2);
        } else {
          actionForComputer(getRandomPve());
        }
      }
    }

    checking();
  });
});

let inter;
let activeAuto = false;

function getRandom() {
  let number = Math.floor(Math.random() * 8);

  if (arrAct[number] == true) {
    if (arrAct[number + 1] == false) {
      number++;
    } else if (arrAct[number - 1] == false) {
      number--;
    } else if (arrAct[number - 2] == false) {
      number -= 2;
    } else if (arrAct[number + 2] == false) {
      number += 2;
    } else if (arrAct[number - 3] == false) {
      number -= 3;
    } else if (arrAct[number + 3] == false) {
      number += 3;
    } else if (arrAct[number - 4] == false) {
      number -= 4;
    } else if (arrAct[number + 4] == false) {
      number += 4;
    } else if (arrAct[number - 5] == false) {
      number -= 5;
    } else if (arrAct[number + 5] == false) {
      number += 5;
    } else if (arrAct[number - 6] == false) {
      number -= 6;
    } else if (arrAct[number + 6] == false) {
      number += 6;
    } else if (arrAct[number - 7] == false) {
      number -= 7;
    } else if (arrAct[number + 7] == false) {
      number += 7;
    }
  }
  return number;
}

function getRandomPve() {
  let number = Math.floor(Math.random() * 8);

  if (activeCard[number] == true && activeCard[number] < 9) {
    if (activeCard[number + 1] == false) {
      number++;
    } else if (activeCard[number - 1] == false) {
      number--;
    } else if (activeCard[number - 2] == false) {
      number -= 2;
    } else if (activeCard[number + 2] == false) {
      number += 2;
    } else if (activeCard[number - 3] == false) {
      number -= 3;
    } else if (activeCard[number + 3] == false) {
      number += 3;
    } else if (activeCard[number - 4] == false) {
      number -= 4;
    } else if (activeCard[number + 4] == false) {
      number += 4;
    } else if (activeCard[number - 5] == false) {
      number -= 5;
    } else if (activeCard[number + 5] == false) {
      number += 5;
    } else if (activeCard[number - 6] == false) {
      number -= 6;
    } else if (activeCard[number + 6] == false) {
      number += 6;
    } else if (activeCard[number - 7] == false) {
      number -= 7;
    } else if (activeCard[number + 7] == false) {
      number += 7;
    } else if (activeCard[number - 8] == false) {
      number -= 8;
    } else if (activeCard[number + 8] == false) {
      number += 8;
    }
  }
  return number;
}

varEve.addEventListener("click", () => {
  if (activeAuto == false) {
    nulling();

    inter = setInterval(function () {
      let number = getRandom();

      if (activeCard[number] == false) {
        if (now == true) {
          card[number].classList.add("circles");
          card[number].style.cursor = "default";
          now = false;
          winner.innerHTML = "ЗАРАЗ ХОДЯТЬ - ХРЕСТИКИ";
          activeCard[number] = true;
        } else if (now == false) {
          card[number].classList.add("cross");
          card[number].style.cursor = "default";
          now = true;
          winner.innerHTML = "ЗАРАЗ ХОДЯТЬ - НОЛИКИ";
          activeCard[number] = true;
        }
        arrAct[number] = true;
        checking();
      }
    }, 1000);

    activeAuto = true;
    varEve.style.background = "orange";
    varPvp.style.background = "gray";
    varPve.style.background = "gray";
  } else if (activeAuto == true) {
    clearInterval(inter);
    activeAuto = false;
    varEve.style.background = "gray";
    varPvp.style.background = "orange";
    arrAct.forEach((item, i) => {
      item = false;
    });
  }
});

varPvp.addEventListener("click", function () {
  this.style.background = "orange";
  varPve.style.background = "gray";
  varEve.style.background = "gray";
  pveActive = false;
  activeAuto = false;
  clearInterval(inter);
  nulling();
});

varPve.addEventListener("click", function () {
  if (pveActive == false) {
    clearInterval(inter);
    varPve.style.background = "orange";
    varPvp.style.background = "gray";
    varEve.style.background = "gray";
    pveActive = true;
    clearInterval(inter);
    activeAuto = false;
    nulling();
  } else {
    pveActive = false;
    activeAuto = false;
    clearInterval(inter);
  }
});