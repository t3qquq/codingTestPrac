function solution(n, ...results) {
  let answer = [];

  for (let i = 0; i < n; i++) {
    let lastResult = false;
    let score = 0;
    let currentPoint = 1;
    for (let j = 0; j < results[i].length; j++) {
      if (results[i][j] === "O") {
        if (lastResult === false) score += currentPoint;
        else {
          currentPoint++;
          score += currentPoint;
          lastResult = true;
        }
        lastResult = true;
      }
      if (results[i][j] === "X") {
        currentPoint = 1;
        lastResult = false;
      }
    }
    answer.push(score);
  }

  return answer;
}

console.log(
  solution(
    5,
    "OOXXOXXOOO",
    "OOXXOOXXOO",
    "OXOXOXOXOXOXOX",
    "OOOOOOOOOO",
    "OOOOXOOOOXOOOOX"
  )
);
