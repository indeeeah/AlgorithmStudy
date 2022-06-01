/** 주어진 A array의 distinct한 수 구하기
 */
function solution(A) {
    let array = new Set(A);
    return array.size;
}