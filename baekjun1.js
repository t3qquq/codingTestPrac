function solution(money) {
  let answer = 0;

  // �Ž����� �ִ� ���ڸ����̹Ƿ� ���ڸ��� �ƴҽ� �������ڸ� 0���� ä�� length 3¥�� ���ڿ��� ��ȯ
  let change = (1000 - money).toString().padStart(3, "0");
  let moneycount = 0;

  //���ڸ� �� ù° �ڸ� (=100���ڸ���) 5�̻��̸� 500�� + ��
  if (change[0] >= 5) {
    moneycount++;
    moneycount += Number(change[0]) - 5;
  } else moneycount += Number(change[0]);

  //10���ڸ���
  if (change[1] >= 5) {
    moneycount++;
    moneycount += Number(change[1]) - 5;
  } else moneycount += Number(change[1]);

  //1���ڸ���
  if (change[2] >= 5) {
    moneycount++;
    moneycount += Number(change[2]) - 5;
  } else moneycount += Number(change[2]);

  answer = moneycount;

  return answer;
}

console.log(solution(380));
console.log(solution(1));
