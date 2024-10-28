function solution(queue1, queue2) {
    // 두 큐의 합 구하기
    let sum1 = queue1.reduce((a, b) => a + b, 0);
    let sum2 = queue2.reduce((a, b) => a + b, 0);
    const target = (sum1 + sum2) / 2;

    // 전체 합이 홀수면 불가능
    if ((sum1 + sum2) % 2 !== 0) return -1;

    // 두 큐를 이어붙여서 하나의 배열처럼 생각
    const combinedQueue = [...queue1, ...queue2];
    let i = 0;
    let j = queue1.length;
    let moveCount = 0;
    const maxMoves = queue1.length * 4;

    // 투 포인터 방식으로 합 맞추기
    while (moveCount <= maxMoves) {
        if (sum1 === target) return moveCount;
        if (sum1 < target) {
            sum1 += combinedQueue[j];
            sum2 -= combinedQueue[j];
            j = (j + 1) % combinedQueue.length;
        } else {
            sum1 -= combinedQueue[i];
            sum2 += combinedQueue[i];
            i = (i + 1) % combinedQueue.length;
        }
        moveCount++;
    }

    return -1;
}
