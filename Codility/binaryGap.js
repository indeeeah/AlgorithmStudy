/** 10진법을 2진법으로 바꾼 뒤 1과 1사이의 가장 큰 간격 찾기
 *  100001001인 경우 가장 큰 간격인 4가 답
 *  1000같이 0으로 1과 1사이가 없는 경우 간격은 0으로 처리
 *  1111같이 0이 없는 경우 간격 0으로 처리
 * */ 

let solution = (n) => {
    let binary = '';
    binary = n.toString(2); // 2진법으로 바꾸는 함수
    let binaryArray = binary.split('1'); // 1로 나누어 array로 만듦
    binaryArray.splice(-1, 1); // 마지막 array 제거

    let result = 0;
    for(let i = 0 ; i < binaryArray.length ; i++){
        if(result < binaryArray[i].length){
            result = binaryArray[i].length;
        }
    }

    return result;
}

solution(100)