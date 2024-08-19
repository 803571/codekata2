// 64번 문제
// 문제 설명
// 점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

// 전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 전체 학생의 수는 2명 이상 30명 이하입니다.
// 체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
// 여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
// 여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
// 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.

function solution(n, lost, reserve) {

    let answer = 0;

    // 체육복을 도난당하고 여벌이 없는 학생(여벌 받아야하는 학생)
    const noReserveLost = lost.sort((a, b) => a - b).filter((lost) => !reserve.includes(lost));
    // 1. lost 배열에 존재하는 요소 (예를 들어 1,2,3,4,5)를 임의로 a와 b에 넣은 뒤, 이를 a - b로 계산합니다.
    // 2. 그렇게 계산되어 요소별로 순서가 정해진 뒤, 이를 가지고 필터를 거쳐야 합니다.
    // 3. (lost) => !reserve.includes(lost)는 화살표함수이므로 lost 배열의 학생번호 = 요소가 reserve 배열에 포함되어있지않은가?를 따져야합니다.
    // 3-2. !reserve 에서 !는 부정연산자입니다. 즉 (lost) => !reserve.includes(lost) 이 값이 false라면 true로 반환합니다. 반대의 경우도 성립

    // 여벌이 있고 체육복을 도난당하지 않은 학생(빌려줄 수 있는 학생)
    let hasReserve = reserve.sort((a, b) => a - b).filter((reserve) => !lost.includes(reserve));
    // 1. reserve 배열에 존재하는 요소 (예를 들어 3,1,2)를 임의로 a와 b에 넣은 뒤, 이를 a - b로 계산합니다.
    // 2. 그렇게 계산되어 요소별로 순서가 정해진 뒤 (3,1,2라면 sort 오름차순에 의해 1,2,3가 됩니다.) 이를 가지고 필터를 거쳐야 합니다.

    const finalLost = noReserveLost.filter((lost) => {

        // 첫번째로 체육복을 빌려줄 수 있는 사람 
        const lend = hasReserve.find((reserve) => Math.abs(reserve - lost) == 1);

        // 체육복 빌려줄 사람이 없으면 그대로 lost 리턴
        if (!lend) return lost;

        // 빌려준 사람 제외하기
        hasReserve = hasReserve.filter((reserve) => reserve !== lend);
    })

    // 답 = 전체 학생 수 - 체육복이 없는 학생 수 
    answer = n - finalLost.length;

    return answer;
}
