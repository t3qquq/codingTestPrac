function solution(n) {
  var answer = 0;

  // �������� n�� ���ڿ� nToString���� �ٲٰ� nToString�� �迭�� �ٲ�
  let nToString = n.toString();
  let stringToArray = [];

  for (let i = 0; i < nToString.length; i++) {
    stringToArray.push(nToString[i]);
  }

  // �迭 ������������ ����
  stringToArray.sort((a, b) => b - a);

  // ���ĵ� �迭 ������ ��ȯ�� ����
  answer = Number(stringToArray.join(""));

  return answer;
}
