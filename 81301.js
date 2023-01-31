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
    //   ���ڸ� �׳� answerArray�� push
    if (s[i] >= 0 && s[i] <= 9) answerArray.push(s[i]);
    else {
      // ���ڰ� �ƴѰ�� �ش� �ε������� textToNum�� ���Ե� ���ڿ� �˻��ؼ� value push
      for (let j = 0; j < Object.keys(textToNum).length; j++) {
        if (s.startsWith(Object.keys(textToNum)[j], i) === true)
          answerArray.push(textToNum[Object.keys(textToNum)[j]]);
      }
    }
  }

  answer = Number(answerArray.join(""));

  return answer;
}
