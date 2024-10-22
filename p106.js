function solution(order) {
    let stack = [];
    let index = 0; // 트럭에 실어야 하는 상자의 index
    let current = 1; // 컨테이너 벨트에서 나오는 상자 번호
    
    for (let i = 0; i < order.length; i++) {
        // 컨테이너 벨트에서 상자를 순서대로 꺼냄
        while (current <= order.length) {
            // 만약 현재 나오는 상자가 실어야 할 상자와 같으면 바로 트럭에 싣는다.
            if (order[index] === current) {
                index++; // 트럭에 실었으므로 다음 상자로 이동
                current++; // 다음 컨테이너 벨트의 상자로 이동
                break;
            } else if (stack.length > 0 && stack[stack.length - 1] === order[index]) {
                // 스택에서 트럭에 실어야 하는 상자를 찾으면 트럭에 싣는다.
                stack.pop();
                index++;
            } else {
                // 일치하지 않으면 현재 상자를 스택에 넣는다.
                stack.push(current);
                current++;
            }
        }

        // 스택에서 실어야 하는 상자가 있으면 처리
        while (stack.length > 0 && stack[stack.length - 1] === order[index]) {
            stack.pop();
            index++;
        }

        // 더 이상 실을 수 없으면 종료
        if (stack.length > 0 && stack[stack.length - 1] !== order[index] && current > order.length) {
            break;
        }
    }

    return index;
}
