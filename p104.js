function solution(numbers) {
    // 소수 판별 함수
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    // 모든 가능한 숫자 조합을 저장할 Set (중복 제거)
    const permutations = new Set();

    // 순열을 만드는 함수
    function getPermutations(arr, current) {
        if (current.length > 0) {
            permutations.add(parseInt(current));
        }
        for (let i = 0; i < arr.length; i++) {
            getPermutations([...arr.slice(0, i), ...arr.slice(i + 1)], current + arr[i]);
        }
    }

    // numbers 문자열을 배열로 변환하여 순열 생성
    getPermutations(numbers.split(''), '');

    // 순열 중 소수인 것들의 개수 세기
    let count = 0;
    permutations.forEach(number => {
        if (isPrime(number)) {
            count++;
        }
    });

    return count;
}
