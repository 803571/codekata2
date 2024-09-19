function solution(want, number, discount) {
    const wantMap = new Map();
    
    // want 배열과 number 배열을 맵으로 변환
    for (let i = 0; i < want.length; i++) {
        wantMap.set(want[i], number[i]);
    }
    
    let count = 0;
    
    // 10일 동안의 물품을 확인하기 위한 슬라이딩 윈도우 탐색
    for (let i = 0; i <= discount.length - 10; i++) {
        const discountMap = new Map();
        
        // 현재 슬라이딩 윈도우(10일간의 할인 제품 리스트)에 있는 제품 수량을 계산
        for (let j = i; j < i + 10; j++) {
            const product = discount[j];
            discountMap.set(product, (discountMap.get(product) || 0) + 1);
        }
        
        // 모든 want 제품의 수량이 맞는지 확인
        let isValid = true;
        for (let [product, qty] of wantMap) {
            if (discountMap.get(product) !== qty) {
                isValid = false;
                break;
            }
        }
        
        // 모든 조건을 만족하는 경우 count 증가
        if (isValid) count++;
    }
    
    return count;
}