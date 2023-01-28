function solution(n) {
  var answer = 0;

  // 받은정수 n을 문자열 nToString으로 바꾸고 nToString을 배열로 바꿈
  let nToString = n.toString();
  let stringToArray = [];

  for (let i = 0; i < nToString.length; i++) {
    stringToArray.push(nToString[i]);
  }

  // 배열 내림차순으로 정렬
  stringToArray.sort((a, b) => b - a);

  // 정렬된 배열 정수로 변환후 리턴
  answer = Number(stringToArray.join(""));

  return answer;
}
