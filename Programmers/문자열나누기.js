function solution(s) {
    var answer = 0;
    
    let firstWord = '';
    let first = 0;
    let other = 0;
    
    for (let i = 0 ; i < s.length ; i++) {
        if (firstWord === '') {
            firstWord = s[i];
            first++;
        } else {
            if (firstWord === s[i]) {
                first++;
            } else {
                other++;
            }
            
            if (first === other) {
                answer++;
                firstWord = '';
            }
        }
    }
    
    if (firstWord !== '') answer++;
    
    return answer;
}