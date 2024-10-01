function solution(fees, records) {
    let [basicTime, basicFee, unitTime, unitFee] = fees;
    let parkingTimes = {}; // 각 차량의 누적 주차 시간
    let inParking = {}; // 현재 주차장에 있는 차량의 입차 시간 기록

    // 시간을 분으로 변환하는 함수
    function timeToMinutes(time) {
        let [hour, minute] = time.split(':').map(Number);
        return hour * 60 + minute;
    }

    // 주차 요금을 계산하는 함수
    function calculateFee(parkingTime) {
        if (parkingTime <= basicTime) {
            return basicFee;
        }
        return basicFee + Math.ceil((parkingTime - basicTime) / unitTime) * unitFee;
    }

    // 각 기록을 처리
    records.forEach(record => {
        let [time, carNumber, action] = record.split(' ');

        if (action === 'IN') {
            inParking[carNumber] = timeToMinutes(time);
        } else { // OUT
            let inTime = inParking[carNumber];
            let outTime = timeToMinutes(time);
            let parkedTime = outTime - inTime;

            parkingTimes[carNumber] = (parkingTimes[carNumber] || 0) + parkedTime;
            delete inParking[carNumber];
        }
    });

    // 출차 기록이 없는 차량은 23:59에 출차된 것으로 간주
    let endOfDay = timeToMinutes('23:59');
    for (let carNumber in inParking) {
        let inTime = inParking[carNumber];
        let parkedTime = endOfDay - inTime;
        parkingTimes[carNumber] = (parkingTimes[carNumber] || 0) + parkedTime;
    }

    // 차량 번호 순으로 요금 계산
    let result = Object.keys(parkingTimes)
        .sort()
        .map(carNumber => calculateFee(parkingTimes[carNumber]));

    return result;
}
