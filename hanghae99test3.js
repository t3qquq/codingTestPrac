function solution(s) {
  let answer = "";

  let arr = [];
  let primeArray = [];
  let restArray = [];

  arr = s.split(" ");

  const isPrime = (num) => {
    if (num === 2) return true;

    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) primeArray.push(Number(arr[i]));
    else restArray.push(Number(arr[i]));
  }

  answer += Math.min(...restArray);
  answer += " ";
  answer += Math.max(...primeArray);

  return answer;
}

let s = "97 75 88 99 95 92 73";
console.log(solution(s));

let s1 = "2 3 4 5";
console.log(solution(s1));

let s2 = "15 3 10 9 7 8";
console.log(solution(s2));
