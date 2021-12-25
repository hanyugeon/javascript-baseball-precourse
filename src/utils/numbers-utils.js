import { ALERT_MSG } from "./alert-utils.js";

const maxNum = 9;
const arrSize = 3;
const baseArr = [];

for (let i = 0; i < maxNum; i++) {
  baseArr.push(i + 1);
}

function shuffleArr(arr) {
  for (let i = 0; i < maxNum; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

export function getRandomNumArr(arr) { 
  const shuffledArr = shuffleArr(baseArr);

  for (let i = 0; i < arrSize; i++) {
    arr.push(shuffledArr[i]);
  }
}

function checkLengthOfNum(num) {
  if (num.length != arrSize) {
    return false;
  }
}

function checkTypeOfNum(num) {
  const checkType = /\d/;

  if (!checkType.test(num)) {
    return false;
  }
}

function checkDuplicateNum(num) {
  if (num.lastIndexOf(num[0]) != 0) {
    return false;
  }

  if (num.indexOf(num[arrSize - 1]) != arrSize - 1) {
    return false;
  }
}

export function checkUserNum(userNum) {
  if (checkLengthOfNum(userNum) == false) {
    alert(ALERT_MSG.INPUT_VALIDATE_LENGTH_ERROR);
  } else if (checkTypeOfNum(userNum) == false) {
    alert(ALERT_MSG.INPUT_VALIDATE_TYPE_ERROR);
  } else if (checkDuplicateNum(userNum) == false) {
    alert(ALERT_MSG.INPUT_VALIDATE_OVERLAP_ERROR);
  }
}
