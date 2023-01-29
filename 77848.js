function solution(lottos, win_nums) {
  var answer = [];

  // �Ѽյ� ��ȣ ���� ������ ����
  let messedNumCount = 0;

  // lottos���� 0�� ���� ���� ī��Ʈ
  for (let i = 0; i < 6; i++) {
    if (lottos[i] === 0) messedNumCount++;
  }

  // lottos���� 0�� ���� ������ �迭 ���ϱ�
  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] === 0) {
      lottos.splice(i, 1);
      i--;
    }
  }

  let correctNumCount = 0;

  // lottos �� ��÷��ȣ ���� ����
  for (let i = 0; i < lottos.length; i++) {
    for (let j = 0; j < win_nums.length; j++) {
      if (lottos[i] === win_nums[j]) correctNumCount++;
    }
  }

  // ���ᰳ�� ������ ������� �������ִ� �Լ�
  let rank = (num) => {
    switch (num) {
      case 6:
        return 1;
      case 5:
        return 2;
      case 4:
        return 3;
      case 3:
        return 4;
      case 2:
        return 5;
      default:
        return 6;
    }
  };

  let ranks = [rank(messedNumCount + correctNumCount), rank(correctNumCount)];

  answer = ranks;

  return answer;
}
