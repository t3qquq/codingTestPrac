function solution(strings, n) {
  var answer = [];
  var tempArr = [];

  // �ε��� n�� �ش��ϴ� ���Ҹ� �����迭 �Ǿտ� �߰�
  for (let i = 0; i < strings.length; i++) {
    tempArr[i] = strings[i][n] + strings[i];
  }

  // ����
  tempArr.sort();

  // �Ǿտ� �߰��ߴ� ���� ����
  for (let i = 0; i < strings.length; i++) {
    answer[i] = tempArr[i].slice(1);
  }

  return answer;
}
