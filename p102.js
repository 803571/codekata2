function solution(bridge_length, weight, truck_weights) {
    let time = 0;  // 경과 시간
    let bridge = [];  // 다리 위의 트럭을 저장하는 배열
    let currentWeight = 0;  // 현재 다리 위의 총 무게

    while (truck_weights.length > 0 || bridge.length > 0) {
        time++;  // 매 초마다 시간 증가

        // 다리에서 나간 트럭이 있다면 제거
        if (bridge.length > 0 && bridge[0].endTime === time) {
            currentWeight -= bridge.shift().weight;  // 다리에서 나간 트럭의 무게를 빼줌
        }

        // 다음 트럭이 다리에 올라갈 수 있는지 확인
        if (truck_weights.length > 0) {
            const nextTruckWeight = truck_weights[0];  // 대기 중인 트럭의 무게

            // 다리에 올라갈 수 있다면 트럭을 다리에 추가
            if (currentWeight + nextTruckWeight <= weight && bridge.length < bridge_length) {
                bridge.push({ weight: nextTruckWeight, endTime: time + bridge_length });  // 다리에 트럭 추가
                currentWeight += nextTruckWeight;  // 현재 무게 업데이트
                truck_weights.shift();  // 대기 중인 트럭 제거
            }
        }
    }

    return time;  // 모든 트럭이 다리를 건넌 후의 시간 반환
}
