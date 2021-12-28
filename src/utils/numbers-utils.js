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

export function getRandomNum(arr) { 
  const shuffledArr = shuffleArr(baseArr);

  for (let i = 0; i < arrSize; i++) {
    arr.push(shuffledArr[i]);
  }
}

function checkLengthOfNum(num) {
  if (num.length != arrSize) {
    alert(ALERT_MSG.INPUT_VALIDATE_LENGTH_ERROR);
    return false;
  }
}

function checkTypeOfNum(num) {
  const str = num.replace(/[^0-9]/g, '');

  if (num.length != str.length) {
    alert(ALERT_MSG.INPUT_VALIDATE_TYPE_ERROR);
    return false;
  }
}

function checkZeroInNum(num) {
  if (num.indexOf(0) != -1) {
    alert(ALERT_MSG.INPUT_VALIDATE_INCLUDE_ZERO_ERROR);
    return false;
  }
}

function checkDuplicatedNum(num) {
  if (num.lastIndexOf(num[0]) != 0) {
    alert(ALERT_MSG.INPUT_VALIDATE_OVERLAP_ERROR);
    return false;
  } else if (num.indexOf(num[arrSize - 1]) != arrSize - 1) {
    alert(ALERT_MSG.INPUT_VALIDATE_OVERLAP_ERROR);
    return false;
  }
}

export function checkUserNum(userNum) {
  if (checkLengthOfNum(userNum) == false) {
    return false;
  } else if (checkTypeOfNum(userNum) == false) {
    return false;
  } else if (checkZeroInNum(userNum) == false) {
    return false;
  } else if (checkDuplicatedNum(userNum) == false) {
    return false;
  }

  return true;
}