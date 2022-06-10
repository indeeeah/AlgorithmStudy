/* P, Q, R이 삼각형일 때 
 * 0 ≤ P < Q < R < N
 * A[P] + A[Q] > A[R],
 * A[Q] + A[R] > A[P],
 * A[R] + A[P] > A[Q].
 * 배열에 삼각형이 있으면 1 리턴, 없으면 0 리턴
 * 
 * 배열 크기가 3 이하일 경우 처리 필요
 * 정렬을 한 상태이면 첫번째, 마지막 합은 중간보다 항상 크고, 중간 마지막 합은 첫번째보다 항상 크다.
 * 그렇기떄뮨에 A[P] + A[Q] > A[R]만 신경써주면 됨
 */

function solution(A) {
    if(A.length <3){
        return 0;
    }

    A.sort((a, b)=>{
        return a-b;
    });

    for(let i=0 ; i<A.length-2 ; i++){
        let P = A[i];
        let Q = A[i+1];
        let R = A[i+2];
        
        if((P+Q) > R){
            return 1;
        }
    }
    return 0;
}