function solution(n, k) {
    // 1. n을 k진수로 변환
    const converted = n.toString(k);
    
    // 2. '0'을 기준으로 분리
    const parts = converted.split('0');
    
    // 3. 소수인지 확인하는 함수
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    // 4. 분리된 숫자 중 소수인 숫자의 개수를 셈
    let primeCount = 0;
    for (let part of parts) {
        if (part && isPrime(Number(part))) {
            primeCount++;
        }
    }
    
    return primeCount;
}

// 테스트
console.log(solution(437674, 3)); // 3
console.log(solution(110011, 10)); // 2
