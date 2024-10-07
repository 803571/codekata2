function solution(numbers) {
    const n = numbers.length;
    const answer = Array(n).fill(-1);
    const stack = [];  

    for (let i = n - 1; i >= 0; i--) {
        // 스택에 있는 값 중에서 numbers[i]보다 큰 값을 찾을 때까지
        while (stack.length > 0 && numbers[stack[stack.length - 1]] <= numbers[i]) {
            stack.pop();
        }
        
        if (stack.length > 0) {
            answer[i] = numbers[stack[stack.length - 1]];
        }

        stack.push(i);
    }

    return answer;
}

// 테스트 케이스
console.log(solution([2, 3, 3, 5]));  // [3, 5, 5, -1]
console.log(solution([9, 1, 5, 3, 6, 2]));  // [-1, 5, 6, 6, -1, -1]
