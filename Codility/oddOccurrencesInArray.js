/** TODO : 다시 풀어볼 것
 *  array 중 1개만 있는 odd number 찾기
 *  A[0] = 9  A[1] = 3  A[2] = 9
 *  A[3] = 3  A[4] = 9  A[5] = 7
 *  A[6] = 9
 *  위의 문제에서 답은 7
 *  array가 길 시 타임아웃 나는 문제가 있음
 */

// 33점 받은 코드
 function solution(A) {
    let matchedArray = [];
    let unMachedArray = [];

    for(let i = 0 ; i < A.length ; i++){
        for(let j = 0 ; j < A.length ; j++){
            if(A[i] === A[j] && i !== j){
                matchedArray.push(A[i])
            }else if(A[i] !== A[j] && i !== j){
                unMachedArray.push(A[i])
            }
        }
    }

    let result = 0;
    unMachedArray.forEach(item => {
        let find = matchedArray.find(element => {
            return item === element
        });

        if(!find){
            result = item
        }else{

        }
    })

    return result;
}

// 55점 받은 코드
let solution = (A) => {
    let result = 0;
    A.forEach(item => {
        let find =  A.filter(element => {
            return item === element
        })

        if(find.length === 1){
            result = find[0];
        }
    })
   
    return result;
}
