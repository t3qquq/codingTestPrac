function solution(array, commands) {
  var answer = [];

  //�� commands ����
  for (let i = 0; i < commands.length; i++) {
    //((�ش� ���� command�� �ε���0�� �ش��ϴ� �� -1)���� (�ش� ���� command�� �ε���1�� �ش��ϴ� ��)������ slice�� �迭�� ������������ sort�� �迭)[�ش����command�� �ε���2 �ش�� - 1]
    answer.push(
      array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b)[
        commands[i][2] - 1
      ]
    );
  }

  return answer;
}
