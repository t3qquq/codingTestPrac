function solution(array, commands) {
  var answer = [];

  //각 commands 마다
  for (let i = 0; i < commands.length; i++) {
    //((해당 순서 command의 인덱스0에 해당하는 수 -1)부터 (해당 순서 command의 인덱스1에 해당하는 수)까지를 slice한 배열을 오름차순으로 sort한 배열)[해당순서command의 인덱스2 해당수 - 1]
    answer.push(
      array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b)[
        commands[i][2] - 1
      ]
    );
  }

  return answer;
}
