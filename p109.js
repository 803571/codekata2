function solution(sequence, k) {
    let start = 0, end = 0;
    let sum = sequence[0];
    let minLength = Infinity; // 가장 짧은 부분 수열의 길이를 저장
    let answer = [-1, -1]; // 정답으로 반환할 부분 수열의 시작과 끝 인덱스

    while (end < sequence.length) {
        if (sum === k) {
            // 부분 수열의 길이가 기존의 가장 짧은 수열보다 짧다면 갱신
            if (end - start < minLength) {
                minLength = end - start;
                answer = [start, end];
            }
            // 또는 부분 수열의 길이가 같으나 시작 인덱스가 더 작으면 갱신
        }

        // 합이 k보다 크거나 같으면 start를 이동시키며 합을 줄임
        if (sum >= k) {
            sum -= sequence[start];
            start++;
        } 
        // 합이 k보다 작으면 end를 이동시키며 합을 키움
        else {
            end++;
            if (end < sequence.length) {
                sum += sequence[end];
            }
        }
    }

    return answer;
}
