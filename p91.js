function solution(progresses, speeds) {
    // 각 기능이 완료되기까지 남은 일수를 저장하는 배열
    const daysLeft = progresses.map((progress, index) => 
        Math.ceil((100 - progress) / speeds[index])
    );

    const result = [];
    let maxDay = daysLeft[0]; // 첫 번째 기능이 완료되는 날
    let count = 1; // 첫 번째 기능은 기본적으로 하나의 배포로 포함

    // 두 번째 기능부터 마지막 기능까지 반복
    for (let i = 1; i < daysLeft.length; i++) {
        if (daysLeft[i] <= maxDay) {
            // 현재 기능이 앞선 기능과 함께 배포될 수 있는 경우
            count++;
        } else {
            // 앞선 기능들이 먼저 배포되고 새로운 배포 시작
            result.push(count);
            count = 1;
            maxDay = daysLeft[i]; // 새로운 배포의 기준 날짜를 업데이트
        }
    }

    // 마지막 배포 그룹을 추가
    result.push(count);

    return result;
}
