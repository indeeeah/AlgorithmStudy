/** 다시 풀어볼 것. 타임아웃 등등..
 *  개구리는 position 0에 있고, X의 위치까지 가려고 한다.
 *  개구리는 한번에 한 칸 밖에 갈 수 없으며, 모든 칸이 채워져야지 건널 수 있다.
 *  X가 5이고
 *  A[0] = 1
 *  A[1] = 3
 *  A[2] = 1
 *  A[3] = 4
 *  A[4] = 2
 *  A[5] = 3
 *  A[6] = 5
 *  A[7] = 4
 *  일 때 답은 6이 된다.
 */

 function solution(X, A) {
    let result = -1;
    let findResult = A.find(item => {
        return item === X
    })

    if(findResult){
        result = A.findIndex(item => {
            return item === findResult
        })
    }

    return result;
}

function solution(X, A) {
    let result = -1;
    let array = []
    A.forEach(item =>{
        let index = array.findIndex(element =>{
            return element === item
        })
        if(index >= 0){

        }else{
            array.push(item)
        }
    })
    if(array.length === X){
        result = A.findIndex(item =>{
            return X === item
        })
    }

    return result;
}

function solution(X, A) {
    let array = []
    array.length = X
    array.fill(-1);
    let check = 0
    for(let i =0 ; i<A.length ; i++){
        if(array[A[i]-1] === -1){
            array[A[i]-1] = i;
            check++
        }

        if(check === X){
            break;
        }
    }

    let maxTime = 0;
    for(let i = 0 ; i < X ; i++){
        if(array[i] === -1){
            maxTime = -1;
            break;
        }

        if(array[i] > maxTime){
            maxTime = array[i]
        }
    }

    return maxTime;
}
