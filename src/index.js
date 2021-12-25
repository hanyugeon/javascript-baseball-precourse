import { $ } from "./DOM/dom.js";
import { disableForm } from "./utils/paint-utils.js";
import { getRandomNumArr, checkUserNum } from "./utils/numbers-utils.js";

const $resultForm = $('game-result-form');
const $inputNum = $('user-input');
const $submitBtn = $('submit');
const randomNumber = [];

function playGame(e) {
  e.preventDefault();
  const userNumber = $inputNum.value;

  checkUserNum(userNumber)
}

function init() {
  disableForm($resultForm);
  getRandomNumArr(randomNumber);
  $inputNum.addEventListener('submit', playGame);
  $submitBtn.addEventListener('click', playGame);
}

init();
