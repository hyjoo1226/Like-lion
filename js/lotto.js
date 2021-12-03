function randomNum(min, max) {
    return Math.floor(Math.random()*(max-min)+min);
}

let ball = [];
let i;
let j;

for (i = 0; i < 6; i++) {
    ball[i] = randomNum(1, 45);
    for (j = 0; j < i; j++) {
        if (ball[i] == ball[j]) {
            ball[i] = randomNum(1, 45); //다시 뽑은 숫자가 이전 숫자랑 겹친다면? 이부분 해결 필요
        }
    }
}
console.log(ball);