function solution(numbers) {
  var answer = [];

  let addedArray = [];

  // 현 인덱스 제외 원소 합 구하기, addedArray에 저장
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      addedArray.push(numbers[i] + numbers[j]);
    }
  }

  // addedArray 정렬
  addedArray.sort((a, b) => a - b);

  // 배열 내 중복되는 원소 하나만 남기고 나머지는 -1로 대체
  for (let i = 0; i < addedArray.length; i++) {
    if (addedArray[i] !== -1) {
      for (let j = i + 1; j < addedArray.length; j++) {
        if (addedArray[i] === addedArray[j]) addedArray[j] = -1;
      }
    }
  }

  // addedArray 내 -1 제거
  for (let i = 0; i < addedArray.length; i++) {
    if (addedArray[i] === -1) {
      addedArray.splice(i, 1);
      i--;
    }
  }

  answer = addedArray;

  return answer;
}
