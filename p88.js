function solution(arr1, arr2) {
    const result = [];

    // arr1의 행 개수만큼 반복
    for (let i = 0; i < arr1.length; i++) {
        const row = [];

        // arr2의 열 개수만큼 반복
        for (let j = 0; j < arr2[0].length; j++) {
            let sum = 0;

            // 행렬의 곱셈 수행
            for (let k = 0; k < arr1[0].length; k++) {
                sum += arr1[i][k] * arr2[k][j];
            }

            row.push(sum);  // 계산된 값을 새로운 행렬의 (i, j) 위치에 저장
        }

        result.push(row);  // 결과 행을 최종 결과 행렬에 추가
    }

    return result;
}