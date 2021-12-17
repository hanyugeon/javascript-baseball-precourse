import { disableForm } from "./utils/paint-utils.js";

const $resultForm = document.getElementById('game-result-form');

function init() {
  disableForm($resultForm);
}

init();