function solution(x) {
  var answer = true;

  let sum = 0;

  //���� ���� x�� ���ڿ��� ��ȯ
  let xString = x.toString();

  //���ڿ� �ε��� ���� ������ ��ȯ �� ������ ��(=�ڸ��� ��) sum�� ����
  for (let i = 0; i < xString.length; i++) sum += parseInt(xString[i]);

  //�ϻ��� �� ������ true �ƴϸ� false ����
  x % sum === 0 ? (answer = true) : (answer = false);

  return answer;
}
