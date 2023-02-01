function solution(money) {
  let answer = 0;

  // 거스름돈 최대 세자리수이므로 세자리수 아닐시 나머지자리 0으로 채운 length 3짜리 문자열로 변환
  let change = (1000 - money).toString().padStart(3, "0");
  let moneycount = 0;

  //세자리 중 첫째 자리 (=100의자리수) 5이상이면 500엔 + α
  if (change[0] >= 5) {
    moneycount++;
    moneycount += Number(change[0]) - 5;
  } else moneycount += Number(change[0]);

  //10의자리수
  if (change[1] >= 5) {
    moneycount++;
    moneycount += Number(change[1]) - 5;
  } else moneycount += Number(change[1]);

  //1의자리수
  if (change[2] >= 5) {
    moneycount++;
    moneycount += Number(change[2]) - 5;
  } else moneycount += Number(change[2]);

  answer = moneycount;

  return answer;
}

console.log(solution(380));
console.log(solution(1));
