function solution(clothes) {
    let clothMap = new Map();
    
    // 각 의상의 종류별로 의상 개수 세기
    clothes.forEach(([name, type]) => {
        clothMap.set(type, (clothMap.get(type) || 0) + 1);
    });
    
    // 각 의상 종류별 선택지를 계산
    let combinations = 1;
    clothMap.forEach((count) => {
        combinations *= (count + 1);  // 의상을 입지 않는 경우도 포함
    });
    
    // 아무것도 입지 않는 경우 제외
    return combinations - 1;
}