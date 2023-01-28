function solution(n) {
  let answer = "";
  for (let i = 0; i < n; i++) {
    if (i % 2 === 1) {
      answer += "¹Ú";
    } else {
      answer += "¼ö";
    }
  }
  return answer;
}
