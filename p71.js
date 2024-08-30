const changeToDate = (year, month, date) => {
  return +year * 12 * 28 + +month * 28 + +date;
};

function solution(today, terms, privacies) {
  var answer = [];

  const termsObj = {};
  for (const info of terms) {
    const [type, month] = info.split(" ");
    termsObj[type] = changeToDate(0, month, 0);
  }

  const todayDate = changeToDate(...today.split("."));

  for (let i = 0; i < privacies.length; i++) {
    const [date, type] = privacies[i].split(" ");
    const dueDate = changeToDate(...date.split(".")) + termsObj[type] - 1;

    if (todayDate > dueDate) answer.push(i + 1);
  }

  return answer;
}
