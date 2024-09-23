function solution(priorities, location) {
    let queue = priorities.map((priority, index) => ({
        priority,
        index,
    })); // 각 프로세스의 우선순위와 위치를 큐에 저장

    let count = 0; // 실행된 프로세스의 순서

    while (queue.length > 0) {
        let current = queue.shift(); // 큐에서 가장 앞에 있는 프로세스 꺼냄
        if (queue.some(process => process.priority > current.priority)) {
            // 현재 프로세스보다 높은 우선순위가 있다면
            queue.push(current); // 다시 큐에 넣음
        } else {
            count++; // 프로세스 실행
            if (current.index === location) {
                // 찾고자 하는 프로세스라면
                return count; // 실행 순서 반환
            }
        }
    }
}