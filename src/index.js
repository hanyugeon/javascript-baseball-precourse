import { $ } from "./DOM/dom.js";
import { disableForm, clearInput, disableInput } from "./utils/paint-utils.js";
import { getRandomNum, checkUserNum } from "./utils/numbers-utils.js";

const $resultForm = $('game-result-form');
const $inputNum = $('user-input');
const $submitBtn = $('submit');
const randomNumber = [];

function playGame(e) {
  e.preventDefault();

  getUsersInput();
}

function getUsersInput() {
  const userNumber = $inputNum.value;
  const userNumValidate = checkUserNum(userNumber);

  if (userNumValidate == false) {
    clearInput($inputNum);
    return ;
  } else {
    disableInput($inputNum);
    console.log('next step');
    return ;
  }
}

function init() {
  disableForm($resultForm);
  getRandomNum(randomNumber);
  $inputNum.addEventListener('submit', playGame);
  $submitBtn.addEventListener('click', playGame);
}

init();
