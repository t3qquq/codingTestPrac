function solution(a, b) {
  var answer = "";

  const month = a;
  const date = b;

  let dayNum = 0;

  const dayInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  for (let i = 0; i < month - 1; i++) {
    dayNum += dayInMonth[i];
  }

  dayNum += date;

  const days = {
    3: "SUN",
    4: "MON",
    5: "TUE",
    6: "WED",
    0: "THU",
    1: "FRI",
    2: "SAT",
  };

  dayNum = dayNum % 7;

  answer = days[dayNum];

  return answer;
}
