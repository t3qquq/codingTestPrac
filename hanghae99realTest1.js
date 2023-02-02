function solution(num) {
  let answer = 0;

  let change = (1000 - num).toString().padStart(3, "0");
  let moneycount = 0;

  if (change[0] >= 5) {
    moneycount++;
    moneycount += Number(change[0]) - 5;
  } else moneycount += Number(change[0]);

  if (change[1] >= 5) {
    moneycount++;
    moneycount += Number(change[1]) - 5;
  } else moneycount += Number(change[1]);

  answer = moneycount;

  return answer;
}
let num1 = 160;
console.log(solution(num1));
