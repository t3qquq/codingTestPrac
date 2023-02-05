function solution(N, arr1) {
  let x = [1, -1, 0, 0, 1, 1, -1, -1];
  let y = [0, 0, 1, -1, 1, -1, 1, -1];
  let answer = [];
  let dimen1Arr = [];

  //(N+2) * (N+2) 사이즈 배열
  let extendedArr = [];

  //첫쨰줄
  extendedArr.push(Array(N + 2).fill("."));

  //기존배열 처음과 끝에 "." 추가
  for (let i = 0; i < N; i++) {
    extendedArr.push(["."].concat(arr1[i]).concat(["."]));
  }

  //마지막줄
  extendedArr.push(Array(N + 2).fill("."));

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (!isNaN(parseInt(extendedArr[i][j]))) dimen1Arr.push("*");
      else {
        //x, y 활용하여 인접 8곳 순회하면서 확인
        let mineCount = 0;
        for (let k = 0; k < 8; k++) {
          if (!isNaN(parseInt(extendedArr[i + x[k]][j + y[k]])))
            mineCount += parseInt(extendedArr[i + x[k]][j + y[k]]);
        }
        mineCount >= 10
          ? dimen1Arr.push("M")
          : dimen1Arr.push(mineCount.toString());
      }
    }
  }

  for (let i = 0; i < N; i++) {
    answer.push(dimen1Arr.slice(i * N + 0, i * N + N));
  }

  return answer;
}

let N = 5;
let arr1 = [
  ["1", ".", ".", ".", "."],
  [".", ".", "3", ".", "."],
  [".", ".", ".", ".", "."],
  [".", "4", ".", ".", "."],
  [".", ".", ".", "9", "."],
];
console.log(solution(N, arr1));
