function solution(s) {
  var answer = "";

  let sArray = [...s];

  sArray.sort().reverse();

  for (let i = 0; i < sArray.length; i++) {
    answer += sArray[i];
  }

  return answer;
}
