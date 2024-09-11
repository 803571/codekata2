function solution(n, left, right) {
    const result = [];
    
    for (let k = left; k <= right; k++) {
        const row = Math.floor(k / n);  // 해당 인덱스의 행 계산
        const col = k % n;  // 해당 인덱스의 열 계산
        result.push(Math.max(row, col) + 1);  // 최댓값에 1을 더한 값을 배열에 추가
    }
    
    return result;
}

// 2차원 배열 i행 j열의 값이 max(i, j) 
// left, right에 해당하는 1차원 배열의 값만 계산하기