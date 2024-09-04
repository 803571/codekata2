function solution(s) {
    //내 풀이
    // 문자열을 모두 소문자로 먼저 변경한 후
    // 각 단어의 첫문자가 알파벳일 경우만 대문자로 변경
    const lower_s = s.toLowerCase()
    return lower_s.split(' ').map(word => 
      word.replace(/^[a-z]/, word.charAt(0).toUpperCase())
    ).join(' ')
  
    // 다른사람 풀이
    // 해당 문자가 숫자일 경우 UpperCase를 하여도 그대로이기 때문에
    // 각 단어의 첫문자를 UpperCase로 변경하고 그 이후의 문자는 모두 LowerCase 처리
    return s.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
    ).join(' ')
  }