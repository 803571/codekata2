function solution(number, k) {
    let stack = [];
    for (let i = 0; i < number.length; i++) {
        let current = number[i];

        // 스택의 마지막 값이 현재 값보다 작고, 제거할 수 있는 k가 남아있으면 제거
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] < current) {
            stack.pop();
            k--;
        }
        stack.push(current);
    }

    // k가 남아있을 경우 뒤에서 k개 만큼 제거
    stack = stack.slice(0, stack.length - k);

    return stack.join('');
}
