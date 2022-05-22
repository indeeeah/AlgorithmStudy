/** TODO 다시 풀어볼 것
 *  없는 숫자 찾기
 *  주어지는 array는 무작위의 length+1 범위의 숫자가 들어있는데, 한 번호는 빠져있다.
 *  A[0] = 2
 *  A[1] = 3
 *  A[2] = 1
 *  A[3] = 5
 *  위의 답은 4
 *  수가 길어지면 타임아웃 나는 문제 있음
 */

function solution(A) {
    let array = [...Array(A.length+1).keys()].map(key => key + 1); // 순차적인 숫자의 배열을 만들어준다. key+1해서 0이 아닌 1부터 배열을 만들 수도 있다.

    let result = 0;
    array.forEach(item => {
        let index = A.findIndex(element => {
            return (item === element)
        })

        if(index >= 0){

        }else{
            result = item
        }
    });

    return result;
}