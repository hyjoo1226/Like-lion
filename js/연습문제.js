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
let arr = string.split(',');

for (i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
}
console.log(sum / arr.length);
// for (let of arr) {
//     sum += parseInt[i];
// }


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
//arr.replace(/,/g, '')


// 콤마 찍기 1
const n = 12345.6789;
const comma = n.toString()
  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

document.writeln(comma);


// 콤마 찍기 2
navigator.language
const n = 12345.6789;
n.toLocaleString('ko-KR');


// 콤마 찍기 3
let n = 12345678;
n += '';
reverse = '';
// 문자열 뒤집기
for (let i = 0; i < n.length; i++) {
  reverse = n[i] + reverse;
}
console.log(reverse);

let sample = '';
count = 0;
for (let i = 0; i < reverse.length; ++i) {
  if (count < 2){
    sample += reverse[i];
    ++count;
  } else {
    sample += reverse[i];
    sample += ','
    count = 0;
  }
}
console.log(sample);
