function solution(numbers) {
  var answer = [];

  let addedArray = [];

  // �� �ε��� ���� ���� �� ���ϱ�, addedArray�� ����
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      addedArray.push(numbers[i] + numbers[j]);
    }
  }

  // addedArray ����
  addedArray.sort((a, b) => a - b);

  // �迭 �� �ߺ��Ǵ� ���� �ϳ��� ����� �������� -1�� ��ü
  for (let i = 0; i < addedArray.length; i++) {
    if (addedArray[i] !== -1) {
      for (let j = i + 1; j < addedArray.length; j++) {
        if (addedArray[i] === addedArray[j]) addedArray[j] = -1;
      }
    }
  }

  // addedArray �� -1 ����
  for (let i = 0; i < addedArray.length; i++) {
    if (addedArray[i] === -1) {
      addedArray.splice(i, 1);
      i--;
    }
  }

  answer = addedArray;

  return answer;
}
