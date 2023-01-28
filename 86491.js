function solution(sizes) {
  var answer = 0;
  var min = 0;
  var max = 0;

  //   길이 오름차순 정렬
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] > sizes[i][1]) {
      let tmp = sizes[i][0];
      sizes[i][0] = sizes[i][1];
      sizes[i][1] = tmp;
    }

    console.log(sizes[i][0], sizes[i][1]);
    // 작은놈들중에서 가장 큰값, 큰놈들중에서 가장 큰값을 min. max에 저장
    if (sizes[i][0] > min) min = sizes[i][0];
    if (sizes[i][1] > max) max = sizes[i][1];
  }

  answer = min * max;

  return answer;
}
