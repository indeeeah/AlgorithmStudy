/**
 * 오늘도 서준이는 병합 정렬 수업 조교를 하고 있다. 아빠가 수업한 내용을 학생들이 잘 이해했는지 문제를 통해서 확인해보자.
 * N개의 서로 다른 양의 정수가 저장된 배열 A가 있다. 병합 정렬로 배열 A를 오름차순 정렬할 경우 배열 A에 K 번째 저장되는 수를 구해서 우리 서준이를 도와주자.
 * 크기가 N인 배열에 대한 병합 정렬 의사 코드는 다음과 같다.
 * merge_sort(A[p..r]) { # A[p..r]을 오름차순 정렬한다.
 *     if (p < r) then {
 *         q <- ⌊(p + r) / 2⌋;       # q는 p, r의 중간 지점
 *         merge_sort(A, p, q);      # 전반부 정렬
 *         merge_sort(A, q + 1, r);  # 후반부 정렬
 *         merge(A, p, q, r);        # 병합
 *     }
 * }
 * # A[p..q]와 A[q+1..r]을 병합하여 A[p..r]을 오름차순 정렬된 상태로 만든다.
 * # A[p..q]와 A[q+1..r]은 이미 오름차순으로 정렬되어 있다.
 * merge(A[], p, q, r) {
 *     i <- p; j <- q + 1; t <- 1;
 *     while (i ≤ q and j ≤ r) {
 *         if (A[i] ≤ A[j])
 *         then tmp[t++] <- A[i++]; # tmp[t] <- A[i]; t++; i++;
 *         else tmp[t++] <- A[j++]; # tmp[t] <- A[j]; t++; j++;
 *     }
 *     while (i ≤ q)  # 왼쪽 배열 부분이 남은 경우
 *         tmp[t++] <- A[i++];
 *     while (j ≤ r)  # 오른쪽 배열 부분이 남은 경우
 *         tmp[t++] <- A[j++];
 *     i <- p; t <- 1;
 *     while (i ≤ r)  # 결과를 A[p..r]에 저장
 *         A[i++] <- tmp[t++]; 
 * }
 * 첫째 줄에 배열 A의 크기 N(5 ≤ N ≤ 500,000), 저장 횟수 K(1 ≤ K ≤ 108)가 주어진다.
 * 다음 줄에 서로 다른 배열 A의 원소 A1, A2, ..., AN이 주어진다. (1 ≤ Ai ≤ 109)
 * 배열 A에 K 번째 저장 되는 수를 출력한다. 저장 횟수가 K 보다 작으면 -1을 출력한다.
 * 
 * 예제 입력 1 -
 * 5 7
 * 4 5 1 3 2
 * 예제 출력 1 - 3
 * 4 5 1 3 2 -> 4 5 1 3 2 -> 4 5 1 3 2 -> 1 5 1 3 2 -> 1 4 1 3 2 -> 1 4 5 3 2 -> 1 4 5 2 2 -> 1 4 5 2 3 -> 1 4 5 2 3 -> 1 2 5 2 3 -> 1 2 3 2 3 -> 1 2 3 4 3 -> 1 2 3 4 5. 총 12회 저장이 발생하고 일곱 번째 저장되는 수는 3이다.
 * 예제 입력 2 -
 * 5 13
 * 4 5 1 3 2
 * 예제 출력 2 - -1
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function merge(left , right) {
    let result = [];
    let [i, j] = [0, 0];

    while (i < left.length && j < right.length) {   // 둘 다 undefind가 아닐 때
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
        count++;
        if (count === k) target = result[result.length - 1];    // count가 k와 같다면 result에 가장 마지막 값을 target으로 정해줌.
    }
    while (i < left.length) {
        result.push(left[i]);
        i++;
        count++;
        if (count === k) target = result[result.length - 1];
    }
    while (j < right.length) {
        result.push(right[j]);
        j++;
        count++;
        if (count === k) target = result[result.length - 1];
    }
    return result;
}

function merge_sort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.ceil(arr.length / 2);

    // arr를 반으로 계속 나눠서 length가 <= 1 될 수 있게 한다.
    let left = merge_sort(arr.slice(0, mid));
    let right = merge_sort(arr.slice(mid));

    return merge(left, right);
}

let arr = [];
let k = -1;
let count = 0;
let target;
rl.on("line", (line) => {
    arr.push(line.split(' ').map((element) => parseInt(element)));
}).on("close", () => {
    k = arr[0][1];
    merge_sort(arr[1]);
    console.log(target ? target : -1);
});