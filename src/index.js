import { $ } from "./DOM/dom.js";
import { disableForm } from "./utils/paint-utils.js";
import { getRandomNumArr } from "./utils/numbers-utils.js";

const $resultForm = $('game-result-form');
const randomNumbers = [];

function init() {
  disableForm($resultForm);
  getRandomNumArr(randomNumbers);
}

init();
