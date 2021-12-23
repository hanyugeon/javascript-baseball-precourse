const maxNum = 9;
const arrSize = 3;
const baseArr = [];

for (let i = 0; i < maxNum; i++) {
  baseArr.push(i + 1);
}

export function getRandomNumArr(arr) { 
  const shuffledArr = shuffle(baseArr);

  for (let i = 0; i < arrSize; i++) {
    arr.push(shuffledArr[i]);
  }
}

function shuffle(arr) {
  for (let i = 0; i < maxNum; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
};