function solution(citations) {
    // 1. 인용 횟수를 내림차순으로 정렬합니다.
    citations.sort((a, b) => b - a);
    
    // 2. H-Index를 계산합니다.
    let hIndex = 0;
    for (let i = 0; i < citations.length; i++) {
        // 논문 순위(i+1)와 인용 횟수를 비교
        if (citations[i] >= i + 1) {
            hIndex = i + 1;
        } else {
            break;
        }
    }
    
    return hIndex;
}