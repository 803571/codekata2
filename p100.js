function solution(x, y, n) {
    let d = [...Array(y + 1).fill(Infinity)];
    d[x] = 0;
    
    for(let i = x; i <= y; i++){
        if(i - n >= x) d[i] = Math.min(d[i], d[i - n] + 1);
        if(i % 2 === 0 && i / 2 >= x) d[i] = Math.min(d[i], d[i / 2] + 1);
        if(i % 3 === 0 && i / 3 >= x) d[i] = Math.min(d[i], d[i / 3] + 1);
    }
    
    return d[y] === Infinity ? -1 : d[y];
}