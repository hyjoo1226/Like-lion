//구글: 1부터 10000까지 8이라는 숫자가 총 폋번 나오는가
let text = '';
let count = 0;

for (let i = 0; i <10000; i++) {
    text += i;
}
for (let i = 0; i < text.length; i++) {
    if (text[i] == '8') {
        count += 1;
    }
}
console.log(count);



//최대값구하기
let sample = [10, 20, 30, 5, 6, 3, 100, 110, 99, 88];
let num = sample[0];

for (let i = 0; i < sample.length; i++) {
    if (num < sample[i]) {
        num = sample[i];
    }
}
console.log(num);



// 두글자씩 끊기
let tx= 'javascript';

for (let i = 1; i < text.length; i++) {
    console.log(tx[i - 1], tx[i]);
}



//인접한 두개의 차가 가장 작은
let value = [1, 3, 4, 8, 13, 17, 20];
let temp = value[1] - value[0];
let result = 0;

for (let i = 0; i < value.length - 1; i++) {
    if (temp > (value[i + 1] - value[i])) {
        temp = value[i + 1] - value[i];
        result = i;
    }
}

console.log(value[result], value[result + 1]);



//1부터 100까지 짝수 더하기
let count = 0;
let i = 0;
while (i <= 100) {
    if (i % 2 == 0) {
        count = count + i;
    }
    i++;
}
console.log(count);
// while (i < 101) {
//     result += i;
//     i+=2;
// }



//구구단 while문으로
let i = 1;
let j = 1;
while (i < 10) {
    j = 1;
    while (j < 10) {
        document.write(`${i} X ${j} = ${i*j} <br>`);
        j++;
    }
    i++;
}
// for (var i = 1; i < 10; i++) {
//     for (var j = 1; j < 10; j++) {
//       document.write(`${i} X ${j} = ${i*j} <br>`);
//     }
//   }
// 중간까지만 하고싶으면 추가
// if (i == 5){
//     break;
//   }


