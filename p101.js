function solution(numbers) {
  var answer = [];
  for (num of numbers) {
    var pivot = [];

    var pivot = num.toString(2).split("");
    pivot.unshift("0");
    if (pivot[pivot.length - 1] == 0) {
      pivot[pivot.length - 1] = "1";
      answer.push(parseInt(pivot.join(""), 2));
    } else {
      var copyPivot = pivot.reverse();
      var firstZero = copyPivot.indexOf("0");
      copyPivot[firstZero] = "1";
      copyPivot[firstZero - 1] = "0";
      answer.push(parseInt(copyPivot.reverse().join(""), 2));
    }
  }
  return answer;
}
