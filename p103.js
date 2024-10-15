function solution(numbers) {
    // numbers 배열의 숫자들을 문자열로 변환한 뒤 정렬
    const answer = numbers
        .map(num => String(num)) // 숫자를 문자열로 변환
        .sort((a, b) => (b + a) - (a + b)) // 두 숫자를 이어 붙여 비교해서 정렬
        .join(''); // 정렬된 결과를 하나의 문자열로 합침

    // 모든 숫자가 0일 경우 "0"을 반환 (ex: [0, 0, 0])
    return answer[0] === '0' ? '0' : answer;
}
