function solution(x) {
  var answer = true;

  let sum = 0;

  //받은 정수 x를 문자열로 변환
  let xString = x.toString();

  //문자열 인덱스 각각 정수로 변환 후 누적한 수(=자릿수 합) sum에 저장
  for (let i = 0; i < xString.length; i++) sum += parseInt(xString[i]);

  //하샤드 수 맞으면 true 아니면 false 리턴
  x % sum === 0 ? (answer = true) : (answer = false);

  return answer;
}
