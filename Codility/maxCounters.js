/** array A와 integer N이 주어지며 X가 1 <= X <= N인 경우 array[X-1]에 +1이 된다
 *  X가 N+1인 경우 현재 array에서의 Maxcount로 값이 모두 변한다.
 *  주어진 조건에 따라 array의 합을 구하라
 */

function solution(N, A) {
    let maxCounter = 0
    let array = []
    array.length = N;
    array.fill(0)

    for(let i = 0; i<A.length ; i++){
        if(A[i] === N+1){
            array.fill(maxCounter)
        }else{
            let position = A[i] -1;
            array[position] = array[position] +1;

            if(array[position] > maxCounter){
                maxCounter = array[position];
            }
        }
    }
    return array;
}