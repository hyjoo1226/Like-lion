// 만약 배열 데이터를 수정해야 한다면, 기존에 사용했던 원본 데이터는 그대로 두고 새로운 배열을 만들어 사용하는 습관을 들이길 바랍니다.
const aespa = ["카리나", "윈터", "지젤", "닝닝"];

// aespa.forEach((item, index) => {
//     aespa[index] = item + '💖';
// });

const aespa2 = aespa.map((item) => {
    return item + '💖'
});

console.log(aespa2);
console.log(aespa);