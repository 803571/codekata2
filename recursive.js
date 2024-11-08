function factorial(n) {
    if (n ===1) { //종료조건은 1! = 1
        return 1;
    }
    return n * factorial(n-1); // 재귀호출 : n * (n-1);
}

console.log(factorial(5)); // 120

// factorial(5) 는 5 * factorial(4)를 계산 ... 계산을 전부 마쳐서
// 5 * 4 * 3 * 2 *1 = 120이 나옴
// node recursive.js 하면 아래와 같이 120 값이 나옴.