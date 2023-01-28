function solution(num) {
  var answer = 0;

  // 문제조건에서 주어진 수 1인경우 0 리턴하라고 했으므로
  if (num === 1) answer = 0;
  // 이외경우
  else if (num > 1 && num < 8000000) {
    let count = 0;

    while (true) {
      if (num % 2 === 0) num /= 2;
      else num = num * 3 + 1;
      count++;

      // 1로 만들었을때의 카운트를 리턴
      if (num === 1) {
        answer = count;
        break;
      }
      // 작업 500번 초과시 -1 리턴
      else if (count > 500) {
        answer = -1;
        break;
      }
    }
  }

  return answer;
}
