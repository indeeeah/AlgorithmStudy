function solution(s) {
    var answer = [];
    
    let string = [];
    
    for (let i = 0 ; i < s.length ; i++) {
        let idxArr = [];
        for (let j = 0 ; j < string.length ; j++) {
            if (s[i] === string[j]) idxArr.push(j);
        }
        if (idxArr.length > 0) {
            let max = Math.max(...idxArr);
            answer.push(i - max);
        }
        else
            answer.push(-1)
        
        string.push(s[i]);
    }
    
    return answer;
}