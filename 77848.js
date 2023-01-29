function solution(lottos, win_nums) {
  var answer = [];

  // 훼손된 번호 개수 저장할 변수
  let messedNumCount = 0;

  // lottos에서 0인 원소 개수 카운트
  for (let i = 0; i < 6; i++) {
    if (lottos[i] === 0) messedNumCount++;
  }

  // lottos에서 0인 원소 제거한 배열 구하기
  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] === 0) {
      lottos.splice(i, 1);
      i--;
    }
  }

  let correctNumCount = 0;

  // lottos 중 당첨번호 개수 저장
  for (let i = 0; i < lottos.length; i++) {
    for (let j = 0; j < win_nums.length; j++) {
      if (lottos[i] === win_nums[j]) correctNumCount++;
    }
  }

  // 맞춘개수 넣으면 몇등인지 리턴해주는 함수
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
