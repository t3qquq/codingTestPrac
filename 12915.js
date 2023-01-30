function solution(strings, n) {
  var answer = [];
  var tempArr = [];

  // 인덱스 n에 해당하는 원소를 기존배열 맨앞에 추가
  for (let i = 0; i < strings.length; i++) {
    tempArr[i] = strings[i][n] + strings[i];
  }

  // 정렬
  tempArr.sort();

  // 맨앞에 추가했던 원소 제거
  for (let i = 0; i < strings.length; i++) {
    answer[i] = tempArr[i].slice(1);
  }

  return answer;
}
