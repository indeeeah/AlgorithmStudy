/** array A가 주어지며, 해당 array가 숫자 빠짐없이 들어있어야 true
 *  true일 시 1 반환, false일 시 0 반환
 */

 function solution(A) {
    A.sort((a, b)=>{
        return b-a;
    });

    if(A[0] === A.length){
        return 1;
    }else{
        return 0;
    }
}