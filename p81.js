function solution(arr) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    
    return arr.reduce((acc, curr) => {
        return lcm(acc, curr);
    }, arr[0]);
}
