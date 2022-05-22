/** 작은 개구리 길 건너기
 *  작은 개구리의 현재 좌효는 X, 도착해야할 곳은 Y, 개구리가 뛸 수 있는 거리를 D라고 할 때
 *  최소로 개구리가 뛰어야하는 횟수를 구하시오
 *  X = 10
    Y = 85
    D = 30
    일 때 3번 뛰어야 한다.
 */

let solution = (X, Y, D) => {
    let flogLogation = Y-X;
    let isNeededOneMoreJump = (flogLogation%D > 0) ? true : false
    let flogJump = parseInt(flogLogation/D)+(isNeededOneMoreJump?1:0)

    return flogJump
}