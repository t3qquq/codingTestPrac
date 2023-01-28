function solution(x) {
  var answer = true;

  let sum = 0;
  let xString = x.toString();

  for (let i = 0; i < xString.length; i++) sum += parseInt(xString[i]);

  x % sum === 0 ? (answer = true) : (answer = false);

  return answer;
}
