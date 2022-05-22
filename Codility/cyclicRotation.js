/** array와 int K가 주어짐
 *  K만큼 맨 뒤에 array data를 맨 앞으로 넣어줌
 *  A = [3, 8, 9, 7, 6]
 *  K = 3 일 시
 *  [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
 *  [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
 *  [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
 */

let solution = (A, K) => {
    let orgA = A; // 복사본을 만들어 주었음

    // K는 int라고 문제에 나와있었으니 parseInt는 쓰지 않았어도 됐을 것 같음.
    for(i=0 ; i<parseInt(K) ; i++){
        let lastData = A.slice(-1); // 마지막 데이터 잘라서 변수에 넣어주기
        orgA.splice(-1, 1); // 복사한 데이터에 마지막 array 데이터 제거
        orgA.unshift(lastData[0]) // 맨 앞에 lastData 추가
    }

    return orgA;
}

solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 5);