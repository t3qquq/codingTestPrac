function solution(s) {
  var answer = 0;
  let answerArray = [];
  const textToNum = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  for (let i = 0; i < s.length; i++) {
    //   숫자면 그냥 answerArray에 push
    if (s[i] >= 0 && s[i] <= 9) answerArray.push(s[i]);
    else {
      // 숫자가 아닌경우 해당 인덱스부터 textToNum에 포함된 문자열 검색해서 value push
      for (let j = 0; j < Object.keys(textToNum).length; j++) {
        if (s.startsWith(Object.keys(textToNum)[j], i) === true)
          answerArray.push(textToNum[Object.keys(textToNum)[j]]);
      }
    }
  }

  answer = Number(answerArray.join(""));

  return answer;
}
