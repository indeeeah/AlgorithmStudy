/** 음수와 양수가 있는 array가 주어짐
 *  해당 값 중 세 데이터를 곱해서 가장 큰 양수를 return
 */

 function solution(A) {
    A.sort((a, b)=>{
        return Math.abs(b)-Math.abs(a)
    })
    
    let result = -1

    for(let i=0 ; i<A.length ; i++){
        result = (A[0] * A[1] * A[i+2])
        if(result > 0){
            break;
        }
    }

    return result
}