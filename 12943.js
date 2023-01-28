function solution(num) {
  var answer = 0;
  if (num === 1) answer = 0;
  else if (num > 1 && num < 8000000) {
    let count = 0;

    while (true) {
      if (num % 2 === 0) num /= 2;
      else num = num * 3 + 1;
      count++;

      if (num === 1) {
        answer = count;
        break;
      } else if (count > 500) {
        answer = -1;
        break;
      }
    }
  }

  return answer;
}
