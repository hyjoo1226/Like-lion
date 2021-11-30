//1번 평균과 분산 구하기
let arr = [10, 20, 30, 10, 20, 30, 40, 10];
let sum = 0;
let mean = 0;

for (i = 0; i < arr.length; i++) {
    sum += arr[i];
}
mean = sum / arr.length;
for (i = 0; i < arr.length; i++) {
    sum = (arr[i] - mean) ** 2;
}
console.log(mean);
console.log(sum / arr.length);
// 분산다시풀자


//2번 string의 평균 구하기
let string = '5, 4, 10, 2, 5';
let sum = 0;
let count = 0;
let arr = string.split(',');

for (i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
    count++;
}
console.log(sum / count);


//3번 arr의 각 자리수의 합 구하기
let arr = [11, 22, 33, 111, 2];
let str = '';
let sum = 0;

for (i = 0; i < arr.length; i++) {
    str += String(arr[i]);
}
for (i = 0; i < str.length; i++) {
    sum += parseInt(str[i]);
}
console.log(sum);


//4번 반복문만 사용하여 숫자단위 콤마 찍기
