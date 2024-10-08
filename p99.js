
function solution(topping) {
    const leftSet = new Set();  // 왼쪽 부분의 서로 다른 토핑 종류
    const rightMap = new Map(); // 오른쪽 부분의 토핑 개수를 저장할 Map

    // 처음에는 오른쪽 전체를 모두 카운팅
    topping.forEach(t => {
        rightMap.set(t, (rightMap.get(t) || 0) + 1);
    });

    let count = 0;

    for (let i = 0; i < topping.length - 1; i++) {
        // 왼쪽에 토핑을 추가
        leftSet.add(topping[i]);

        // 오른쪽에서 해당 토핑을 하나 줄임
        rightMap.set(topping[i], rightMap.get(topping[i]) - 1);
        if (rightMap.get(topping[i]) === 0) {
            rightMap.delete(topping[i]); // 토핑 개수가 0이면 Map에서 제거
        }

        // 왼쪽과 오른쪽의 서로 다른 토핑 종류 수가 같으면 공평하게 나눌 수 있는 방법
        if (leftSet.size === rightMap.size) {
            count++;
        }
    }

    return count;
}
