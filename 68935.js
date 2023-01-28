function solution(n) {
  var answer = 0;

  // digit=3���� ��ȯ �� �ڸ���
  let digit = 0;
  let arr = [];

  // digit ���ϱ�
  for (let i = 0; ; i++) {
    if (3 ** i <= n && n < 3 ** (i + 1)) break;
    digit++;
  }

  // ���� n 3�������� ��ȯ
  for (let i = digit; i > -1; i--) {
    arr[i] = n % 3;
    n = Math.floor(n / 3);
  }

  // 3���� ������ 10�������� ��ȯ
  for (let i = 0; i < arr.length; i++) {
    answer += 3 ** i * arr[i];
  }

  return answer;
}
