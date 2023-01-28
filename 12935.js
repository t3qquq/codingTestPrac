function solution(arr) {
  var answer = [];

  // arr값 sorteArr에 복붙
  let sortedArr = [...arr];

  // sortedArr 오름차순 정렬
  sortedArr.sort((a, b) => a - b);

  // 문제 제한조건상 arr내 중복원소 없으므로 오름차순 정렬시 가장 작은값은 index가 0인 경우이다
  // 따라서 원본인 arr에서 sortedArr[0]를 제거해서 리턴하면 됨
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === sortedArr[0]) {
      arr.splice(i, 1);
    }
  }

  // arr이 빈 배열이면 [-1] 리턴, 아니라면 arr 그대로 리턴
  arr.length === 0 ? (answer = [-1]) : (answer = arr);

  return answer;
}
