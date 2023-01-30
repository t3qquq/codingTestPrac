function solution(answers) {
  var answer = [];

  let student1 = [],
    student2 = [],
    student3 = [];

  // 수포자 1 2 3배열에 주어진 answers의 길이만큼 원소 할당
  for (let i = 0; i < answers.length; i++) {
    student1[i] = (i % 5) + 1;
    switch (i % 8) {
      case 1:
        student2[i] = 1;
        break;
      case 3:
        student2[i] = 3;
        break;
      case 5:
        student2[i] = 4;
        break;
      case 7:
        student2[i] = 5;
        break;
      default:
        student2[i] = 2;
        break;
    }
    switch (i % 10) {
      case 0:
        student3[i] = 3;
        break;
      case 2:
        student3[i] = 1;
        break;
      case 4:
        student3[i] = 2;
        break;
      case 6:
        student3[i] = 4;
        break;
      case 8:
        student3[i] = 5;
        break;
      default:
        student3[i] = student3[i - 1];
        break;
    }
  }

  let stu1Correct = 0,
    stu2Correct = 0,
    stu3Correct = 0;

  // 수포자 1 2 3이 맞춘 정답 개수 각각 카운트
  for (let i = 0; i < answers.length; i++) {
    if (student1[i] === answers[i]) stu1Correct++;
    if (student2[i] === answers[i]) stu2Correct++;
    if (student3[i] === answers[i]) stu3Correct++;
  }

  let correctCounts = [stu1Correct, stu2Correct, stu3Correct];

  // 최대정답카운트와 일치하는 인덱스+1을 anwer에 추가
  for (let i = 0; i < 3; i++) {
    if (correctCounts[i] === Math.max(...correctCounts)) answer.push(i + 1);
  }

  return answer;
}
