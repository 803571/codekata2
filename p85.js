function solution(elements) {
    const n = elements.length;
    const extended = elements.concat(elements); // 원형 수열을 처리하기 위해 배열을 2배로 확장
    const uniqueSums = new Set(); // 고유한 합을 저장할 Set

    // 각 길이별로 가능한 부분 수열의 합을 구한다
    for (let length = 1; length <= n; length++) {
        for (let start = 0; start < n; start++) {
            let sum = 0;
            for (let i = 0; i < length; i++) {
                sum += extended[start + i]; // 부분 수열의 합 계산
            }
            uniqueSums.add(sum); // Set에 합을 저장해 중복 제거
        }
    }

    return uniqueSums.size; // 고유한 합의 개수 반환
}