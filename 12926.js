function solution(s, n) {
  var answer = "";

  // ��ҹ��� ����
  let lowercaseArray = [..."abcdefghijklmnopqrstuvwxyz"];
  let uppercaseArray = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

  // for�� ���鼭 s[i] �о��ְ�, �� �ε����� 25 �ʰ��� 26 �� �ε����� �ش�Ǵ� �� answer�� �߰�
  for (let i = 0; i < s.length; i++) {
    // �ҹ����ϰ��
    if (s[i] >= "a" && s[i] <= "z") {
      if (lowercaseArray.indexOf(s[i]) + n > 25) {
        answer += lowercaseArray[lowercaseArray.indexOf(s[i]) + n - 26];
      } else {
        answer += lowercaseArray[lowercaseArray.indexOf(s[i]) + n];
      }
    }
    //   �빮���ϰ��
    if (s[i] >= "A" && s[i] <= "Z") {
      if (uppercaseArray.indexOf(s[i]) + n > 25)
        answer += uppercaseArray[uppercaseArray.indexOf(s[i]) + n - 26];
      else answer += uppercaseArray[uppercaseArray.indexOf(s[i]) + n];
    }
    if (s[i] === " ") answer += " ";
  }

  return answer;
}
