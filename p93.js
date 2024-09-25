
function solution(k, dungeons) {
    let maxDungeons = 0;

    // 주어진 배열의 순열을 구하는 함수
    function getPermutations(arr, selectNumber) {
        if (selectNumber === 1) return arr.map((v) => [v]);
        const result = [];
        arr.forEach((fixed, index, origin) => {
            const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
            const permutations = getPermutations(rest, selectNumber - 1);
            const attached = permutations.map((v) => [fixed, ...v]);
            result.push(...attached);
        });
        return result;
    }

    // 던전 순열을 모두 구함
    const permutations = getPermutations(dungeons, dungeons.length);

    // 각 순열에 대해 탐험할 수 있는 던전 수 계산
    permutations.forEach((dungeonList) => {
        let currentK = k; // 현재 피로도
        let dungeonCount = 0;

        for (let i = 0; i < dungeonList.length; i++) {
            const [minRequired, fatigueCost] = dungeonList[i];
            if (currentK >= minRequired) { // 최소 필요 피로도가 충분할 때
                currentK -= fatigueCost; // 피로도 소모
                dungeonCount++; // 던전 탐험 수 증가
            } else {
                break; // 더 이상 탐험할 수 없으면 중단
            }
        }

        // 최대 탐험 수 업데이트
        maxDungeons = Math.max(maxDungeons, dungeonCount);
    });

    return maxDungeons;
}
