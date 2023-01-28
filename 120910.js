function solution(arr, divisor) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    // �������� ���� ���� ���ο� �迭�� �߰�
    let a = arr[i]; // 5 / 9 / 7
    let mod = arr[i] % divisor; // 0 / 4 / 2 ..
    if (mod === 0) {
      answer.push(a); // [5, 10]
    }
  }
  if (answer.length === 0) {
    return [-1];
  }
  // ����
  return answer.sort((a, b) => a - b);
}
