function solution(n, m) {
  var answer = [];

  //�ִ����� ���ϴ� �Լ�
  let getGCD = (num1, num2) => {
    let gcd = 1;
    for (let i = 2; i <= Math.min(num1, num2); i++) {
      if (num1 % i === 0 && num2 % i === 0) {
        gcd = i;
      }
    }
    return gcd;
  };

  let GCD = getGCD(n, m);
  // n= a*GCD, m=b*GCD�� LCD=a*b*GCD
  let LCD = (n * m) / GCD;
  answer = [GCD, LCD];

  return answer;
}
