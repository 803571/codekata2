function solution(k, tangerine) {
    // 귤의 크기별 개수를 저장할 Map
    let countMap = new Map();

    // 귤의 크기별 개수 세기
    for (let size of tangerine) {
        countMap.set(size, (countMap.get(size) || 0) + 1);
    }

    // 귤의 크기별 개수를 내림차순으로 정렬
    let countArr = [...countMap.values()].sort((a, b) => b - a);

    // 최소한의 크기 종류로 k개를 고르기
    let total = 0;
    let kindCount = 0;
    for (let count of countArr) {
        total += count;
        kindCount++;
        if (total >= k) {
            break;
        }
    }

    return kindCount;
}