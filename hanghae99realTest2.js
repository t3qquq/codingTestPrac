function solution(str) {
  let answer = 0;

  let lastResult = false;
  let score = 0;
  let currentPoint = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "O") {
      if (lastResult === false) score += currentPoint;
      else {
        currentPoint++;
        score += currentPoint;
        lastResult = true;
      }
      lastResult = true;
    }
    if (str[i] === "X") {
      currentPoint = 1;
      lastResult = false;
    }
  }

  answer = score;

  return answer;
}
let str = "OXOOOXXXOXOOXOOOOOXO";
console.log(solution(str));
