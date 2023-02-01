function solution(n) {
  var answer = 0;

  function isPrime(num) {
    if (num === 2) return true;

    // i <= Math.floor(Math.sqrt(num))대신 i<=num/2를 사용했을때는 불합격 처리였음
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) answer++;
  }

  return answer;
}
