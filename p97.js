function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const positionWeights = [781, 156, 31, 6, 1]; // 자리별 사전 단어 수
    let result = 0;

    // 각 자리의 문자가 사전에서 몇 번째에 해당하는지 계산
    for (let i = 0; i < word.length; i++) {
        const idx = vowels.indexOf(word[i]); // 현재 자리 문자의 인덱스
        result += idx * positionWeights[i] + 1; // 현재 자리에 해당하는 값을 더함
    }

    return result;
}


// AEIOU 만 사용하여 만들 수 있는 길이가 5이하의 모든 단어가 있음.
// 첫 단어는 A, 그다음 AA, 마지막 단어는 UUUUU
// 단어 하나가  = word가 매개변수로 주어지면 이게 몇번째 단어일지?




// AEIOU로만 이루어진 단어임
// A가 첫 단어고 그다음이 AA이니 그다음은 AAA, AAAA, AAAAA... A부터 AAAAA가 5번이고 6번째가 AAAAE라고 했음
// A, AA, AAA, AAAA, AAAAA, AAAAE, AAAAI, AAAAO, AAAAU, 'AAAE' 10번째'.. 
// 이걸 일일히 다 세는건 불가능하니까 규칙을 세워보면

// 첫번째 자리에 오는 단어 A E I O U, 첫번째 자리가 같으면 두번째 자리를 보고, 그것도 같으면 그 다음 자리로 가는 방식
// 첫번쨰 자리가 뭐가 나올지 결정되면 길이가 최대 5인 단어이므로 첫자리가 A라면 

// 길이 1 : A 1가지
// 길이 2 : AA AE AI AO Au 5가지
// 길이 3 : AAA AAE AAI AAO AAU, AEE 등으로 시작해서 25가지 (AA~, AE~, AI~, AO~, AU~ 총 5가지에 각각 5개므로 5x5)
// 길이 4 : AAAA, AAAE, AAAI, AAAO, AAAU 등으로 시작해서 125가지. AAEA. AAEE. AAEI ...
// 길이 5 : 5 x 5 x 5 x 5= 625가지 가짓수 합산 시 781

// 두번째 자리가 정해지면 5x5x5 + 5+5+1 156개