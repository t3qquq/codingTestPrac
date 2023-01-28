function solution(n) {
  var answer = 0;
  let nToString = n.toString();
  let stringToArray = [];

  for (let i = 0; i < nToString.length; i++) {
    stringToArray.push(nToString[i]);
  }

  stringToArray.sort((a, b) => b - a);

  answer = Number(stringToArray.join(""));

  return answer;
}
