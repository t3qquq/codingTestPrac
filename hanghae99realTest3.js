function solution(N, arr1) {
  // let x = [1, -1, 0, 0, 1, 1, -1, -1];
  // let y = [0, 0, 1, -1, 1, -1, 1, -1];
  let answer = [];

  //(N+2) * (N+2) ������ �迭
  let extendedArr = [];

  //ù����
  extendedArr.push(Array(N + 2).fill("."));

  //�����迭 ó���� ���� "." �߰�
  for (let i = 0; i < N; i++) {
    extendedArr.push(["."].concat(arr1[i]).concat(["."]));
  }

  //��������
  extendedArr.push(Array(N + 2).fill("."));


  // for (let i = 1; i <= N; i++) {
  //   for (let j = 1; j <= N; j++) {
  //     if (!isNaN(parseInt(extendedArr[i][j]))) answer.push("*");
  //     else {
  //       let mineCount = 0;
  //       //extended[i][j]�� ���� 3��
  //       for (let k = j - 1; k <= j + 1; j++) {
  //         if (!isNaN(parseInt(extendedArr[i - 1][k])))
  //           mineCount += parseInt(extendedArr[i - 1][k]);
  //       }
  //       //extended[i][j] ����
  //       if (!isNaN(parseInt(extendedArr[i][j - 1])))
  //         mineCount += parseInt(extendedArr[i][j - 1]);
  //       // extended[i][j] ������
  //       if (!isNaN(parseInt(extendedArr[i][j + 1])))
  //         mineCount += parseInt(extendedArr[i][j + 1]);
  //       //extended[i][j] �Ʒ��� 3��
  //       for (let k = j - 1; k <= j + 1; j++) {
  //         if (!isNaN(parseInt(extendedArr[i + 1][k])))
  //           mineCount += parseInt(extendedArr[i - 1][k]);
  //       }

  //       mineCount >= 10 ? answer.push("M") : answer.push(mineCount.toString());
  //     }
  //   }
  // }

  console.log(answer);

  return answer;
}

let N = 5;
let arr1 = [
  ["1", ".", ".", ".", "."],
  [".", ".", "3", ".", "."],
  [".", ".", ".", ".", "."],
  [".", "4", ".", ".", "."],
  [".", ".", ".", "9", "."],
];
console.log(solution(N, arr1));
