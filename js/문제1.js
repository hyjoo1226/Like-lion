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