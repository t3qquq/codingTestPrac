function solution(arr) {
  var answer = [];

  // arr�� sorteArr�� ����
  let sortedArr = [...arr];

  // sortedArr �������� ����
  sortedArr.sort((a, b) => a - b);

  // ���� �������ǻ� arr�� �ߺ����� �����Ƿ� �������� ���Ľ� ���� �������� index�� 0�� ����̴�
  // ���� ������ arr���� sortedArr[0]�� �����ؼ� �����ϸ� ��
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === sortedArr[0]) {
      arr.splice(i, 1);
    }
  }

  // arr�� �� �迭�̸� [-1] ����, �ƴ϶�� arr �״�� ����
  arr.length === 0 ? (answer = [-1]) : (answer = arr);

  return answer;
}
