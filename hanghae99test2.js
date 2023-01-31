// [9, 9, 8, 8, 7, 8, 9]	[21, 25, 30, 29, 22, 23, 30]	96
// [9, 7, 8, 9, 7, 9, 8]    [23, 22, 26, 26, 29, 27, 22]	110

// [9, 9, 9, 9, 7, 9, 8]	[23, 23, 30, 28, 30, 23, 23]	102

function solution(arr1, arr2) {
  let answer = 0;

  let accmTime = 0;

  for (let i = 0; i < 7; i++) {
    accmTime += (arr2[i] >= 29 ? 21 : arr2[i]) - arr1[i];
  }

  answer = accmTime;

  return answer;
}

let arr1 = [9, 9, 9, 9, 7, 9, 8];
let arr2 = [23, 23, 30, 28, 30, 23, 23];
console.log(solution(arr1, arr2));

let arr3 = [9, 9, 8, 8, 7, 8, 9];
let arr4 = [21, 25, 30, 29, 22, 23, 30];
console.log(solution(arr3, arr4));

let arr5 = [9, 7, 8, 9, 7, 9, 8];
let arr6 = [23, 22, 26, 26, 29, 27, 22];
console.log(solution(arr5, arr6));
