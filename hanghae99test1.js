function solution(month, day) {
  let result = "";

  const dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let dayNum = 0;
  let graduateMonth = "";
  let graduateDate = "";

  for (let i = 0; i < month - 1; i++) {
    dayNum += dayInMonth[i];
  }

  dayNum += day;
  dayNum += 98;

  if (dayNum > 365) dayNum -= 365;

  for (let i = 0; i < dayInMonth.length; i++) {
    if (dayNum - dayInMonth[i] > 0) {
      dayNum -= dayInMonth[i];
      graduateMonth = `${i + 2}월`;
    } else break;
  }
  graduateDate = ` ${dayNum}일`;
  result = graduateMonth + graduateDate;

  return result;
}
console.log(solution(1, 18));
