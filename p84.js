function isValid(s) {
    let stack = [];
    let map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else if (char === ')' || char === ']' || char === '}') {
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

function solution(s) {
    let count = 0;
    let len = s.length;

    for (let i = 0; i < len; i++) {
        let rotated = s.slice(i) + s.slice(0, i); // 문자열을 왼쪽으로 회전
        if (isValid(rotated)) {
            count++;
        }
    }

    return count;
}