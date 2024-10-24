function solution(n) {
    // 결과를 담을 2차원 배열 생성
    const triangle = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));

    let number = 1; // 채울 숫자
    let x = -1, y = 0; // 시작 위치를 (x, y)로 설정 (삼각형의 위에서 시작)

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            // 반시계 방향으로 아래 -> 오른쪽 -> 위로 순회
            if (i % 3 === 0) {
                // 아래로 이동
                x++;
            } else if (i % 3 === 1) {
                // 오른쪽으로 이동
                y++;
            } else if (i % 3 === 2) {
                // 위로 이동
                x--;
                y--;
            }
            // 현재 위치에 숫자 채우기
            triangle[x][y] = number++;
        }
    }

    // 2차원 배열을 1차원 배열로 변환하여 반환
    return triangle.flat();
}
