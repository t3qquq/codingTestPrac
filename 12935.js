function solution(arr) {
  var answer = [];

  let sortedArr = [...arr];

  sortedArr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === sortedArr[0]) {
      arr.splice(i, 1);
    }
  }

  arr.length === 0 ? (answer = [-1]) : (answer = arr);

  return answer;
}
