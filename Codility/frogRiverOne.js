/** 다시 풀어볼 것. example은 맞췄으나 문제 자체를 이해하지 못함
 * 
 */

 function solution(X, A) {
    let result = -1;
    let findResult = A.find(item => {
        return item === X
    })

    if(findResult){
        result = A.findIndex(item => {
            return item === findResult
        })
    }

    return result;
}