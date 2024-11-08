function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;
    const visited = Array.from(Array(rows), () => Array(cols).fill(false)); // 방문 여부를 체크하기 위한 배열
    const directions = [
        [1, 0], [-1, 0], [0, 1], [0, -1] // 하, 상, 우, 좌 방향으로 이동하기 위한 배열
    ];
    const islands = []; // 각 섬에서 머무를 수 있는 일수를 저장할 배열

    // BFS 탐색 함수 정의
    function bfs(x, y) {
        let queue = [[x, y]];
        visited[x][y] = true;
        let foodSum = parseInt(maps[x][y]);

        while (queue.length > 0) {
            const [currentX, currentY] = queue.shift();

            for (const [dx, dy] of directions) {
                const nx = currentX + dx;
                const ny = currentY + dy;

                if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && !visited[nx][ny] && maps[nx][ny] !== 'X') {
                    visited[nx][ny] = true;
                    foodSum += parseInt(maps[nx][ny]);
                    queue.push([nx, ny]);
                }
            }
        }
        return foodSum;
    }

    // 지도를 순회하면서 섬을 발견할 때마다 BFS로 섬을 탐색하여 최대 머무는 일수 계산
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (maps[i][j] !== 'X' && !visited[i][j]) {
                islands.push(bfs(i, j));
            }
        }
    }

    // 결과가 없을 경우 -1을 반환
    return islands.length > 0 ? islands.sort((a, b) => a - b) : [-1];
}
