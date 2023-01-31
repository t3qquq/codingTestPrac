function solution(s, n) {
  var answer = "";

  // 대소문자 구분
  let lowercaseArray = [..."abcdefghijklmnopqrstuvwxyz"];
  let uppercaseArray = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

  // for문 돌면서 s[i] 밀어주고, 민 인덱스가 25 초과시 26 뺀 인덱스에 해당되는 값 answer에 추가
  for (let i = 0; i < s.length; i++) {
    // 소문자일경우
    if (s[i] >= "a" && s[i] <= "z") {
      if (lowercaseArray.indexOf(s[i]) + n > 25) {
        answer += lowercaseArray[lowercaseArray.indexOf(s[i]) + n - 26];
      } else {
        answer += lowercaseArray[lowercaseArray.indexOf(s[i]) + n];
      }
    }
    //   대문자일경우
    if (s[i] >= "A" && s[i] <= "Z") {
      if (uppercaseArray.indexOf(s[i]) + n > 25)
        answer += uppercaseArray[uppercaseArray.indexOf(s[i]) + n - 26];
      else answer += uppercaseArray[uppercaseArray.indexOf(s[i]) + n];
    }
    if (s[i] === " ") answer += " ";
  }

  return answer;
}
