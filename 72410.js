function solution(new_id) {
  var answer = "";
  let rcmdID;

  //1단계
  rcmdID = [...new_id.toLowerCase()];

  //2단계
  for (let i = 0; i < rcmdID.length; i++) {
    if (
      !(
        (rcmdID[i] >= "a" && rcmdID[i] <= "z") ||
        (rcmdID[i] >= "0" && rcmdID[i] <= "9")
      )
    ) {
      if (!(rcmdID[i] === "-" || rcmdID[i] === "_" || rcmdID[i] === ".")) {
        rcmdID.splice(i, 1);
        i--;
      }
    }
  }

  //3단계
  for (let i = 0; i < rcmdID.length; i++) {
    if (rcmdID[i] === "." && rcmdID[i + 1] === ".") {
      rcmdID.splice(i, 1);
      i--;
    }
  }

  //4단계
  if (rcmdID[0] === ".") rcmdID.splice(0, 1);
  if (rcmdID[rcmdID.length - 1] === ".") rcmdID.splice(rcmdID.length - 1, 1);

  //5단계
  if (rcmdID.length === 0) rcmdID.push("a");

  //6단계
  if (rcmdID.length >= 16) {
    rcmdID = rcmdID.slice(0, 15);
    if (rcmdID[rcmdID.length - 1] === ".") rcmdID.splice(rcmdID.length - 1, 1);
  }

  //7단계
  if (rcmdID.length <= 2) {
    for (let i = rcmdID.length; i < 3; i++) {
      rcmdID.push(rcmdID[rcmdID.length - 1]);
    }
  }

  answer = rcmdID.join("");
  return answer;
}
