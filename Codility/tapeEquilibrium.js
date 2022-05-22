/** TODO : 다시 풀어볼 것.. 나에게 굉장히 어려웠음
 *  둘로 나눈 array를 각각 더한 뒤 두 값을 빼서 나오는 최소 값 구하기
 *  아래와같은 array가 있을 떄
 *  A[0] = 3
 *  A[1] = 1
 *  A[2] = 2
 *  A[3] = 4
 *  A[4] = 3
 *  P의 값을 기준으로 arry를 나눠서 더할 수 있음
 *  P = 1, difference = |3 − 10| = 7 
 *  P = 2, difference = |4 − 9| = 5 
 *  P = 3, difference = |6 − 7| = 1 
 *  P = 4, difference = |10 − 3| = 7 
 *  여기서 답은 1
 */

 function solution(A) {
    let orgA = A.slice();
    let result = 10000000000;

    for(let i = 0 ; i < A.length ; i++){
        arry2 = orgA.splice(-(i+1), A.length)
        let sum1 = -1
        let sum2 = -1

        if(arry2.length > 0){
            sum1 = arry2.reduce((acc, cur)=>{
                return acc+cur;
            })
        }

        if(orgA.length > 0){
            sum2 = orgA.reduce((acc, cur)=>{
                return acc+cur;
            })
        }

        let abs = Math.abs(sum1-sum2);

        if(abs<result){
            result = abs;
        }

        orgA = A.slice();
    }
    return result;
}