function solution(s) {
    let answer = '';
    const arr = s.split(" ").map(x => +x)
    let max = arr[0]
    let min = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(arr[i] >= max){
            max = arr[i]
        }
        if(arr[i] <= min){
            min = arr[i]
        }
    }
    answer = `${min} ${max}`
    return answer;
}