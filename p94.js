function solution(numbers, target) {
    let answer = 0;

    function dfs(index, sum) {
        // 모든 숫자를 처리했을 때, 합이 타겟 넘버와 같은지 확인
        if (index === numbers.length) {
            if (sum === target) {
                answer++;
            }
            return;
        }

        // 현재 인덱스의 숫자를 더하거나 빼는 두 가지 경우로 재귀 호출
        dfs(index + 1, sum + numbers[index]);
        dfs(index + 1, sum - numbers[index]);
    }

    // 탐색 시작 (인덱스 0부터 시작, 초기 합은 0)
    dfs(0, 0);
    return answer;
}
