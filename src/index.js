import { $ } from "./DOM/dom.js";
import { disableForm } from "./utils/paint-utils.js";
import { getRandomNumArr } from "./utils/numbers-utils.js";

const $resultForm = $('game-result-form');
const $inputNum = $('user-input');
const $submitBtn = $('submit');
const randomNumbers = [];

function playGame(e) {
  e.preventDefault();
  const userNumbers = $inputNum.value;
}

function init() {
  disableForm($resultForm);
  getRandomNumArr(randomNumbers);
  $inputNum.addEventListener('submit', playGame);
  $submitBtn.addEventListener('click', playGame);
}

init();
