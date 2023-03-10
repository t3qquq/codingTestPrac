function solution(n) {
  var answer = 0;

  // digit=3진법 변환 후 자릿수
  let digit = 0;
  let arr = [];

  // digit 구하기
  for (let i = 0; ; i++) {
    if (3 ** i <= n && n < 3 ** (i + 1)) break;
    digit++;
  }

  // 받은 n 3진법으로 변환
  for (let i = digit; i > -1; i--) {
    arr[i] = n % 3;
    n = Math.floor(n / 3);
  }

  // 3진법 뒤집고 10진법으로 변환
  for (let i = 0; i < arr.length; i++) {
    answer += 3 ** i * arr[i];
  }

  return answer;
}
