// 모던자바스크립트 예제
let p = new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 10000); // (*)
  
  });
  console.log('hello world');
  let p2 = p.then(function(result) { // (**)
  
    console.log(result); // 1
    return result * 2;
  
  });
  console.log('hello world2');
  let p3 = p2.then(function(result) { // (***)
  
    console.log(result); // 2
    return result * 2;
  
  });
  console.log('hello world3');
  let p4 = p3.then(function(result) {
  
    console.log(result); // 4
    return result * 2;
  
  });

  // 모던자바스크립트 예제
// 다음 예제는 프라미스 체이닝이 아님!
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  });
  
  promise.then(function(result) {
    alert(result); // 1
    return result * 2;
  });
  
  promise.then(function(result) {
    alert(result); // 1
    return result * 2;
  });
  
  promise.then(function(result) {
    alert(result); // 1
    return result * 2;
  });

  new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000); // (*)
  
  }).then(function(result) { // (**)
  
    alert(result); // 1
    return result * 2;
  
  }).then(function(result) { // (***)
  
    alert(result); // 2
    return result * 2;
  
  }).then(function(result) {
  
    alert(result); // 4
    return result * 2;
  
  });

  // 모던자바스크립트 예제 (살짝 수정)
new Promise(function(resolve, reject) {

  setTimeout(() => reject('error'), 1000); // (*)

}).then(function(result) { // (**)

  alert(result + ' : 잘 수행!'); // 1
  return result + 'one';

}).catch(function(result) { // (***)

  alert(result + ' : 애러 발생!'); 
  return result + 'two';

}).then(function(result) {

  alert(result + ' : 잘 수행!'); // 4
  return result + 'three';

});

// 모던자바스크립트 예제 (살짝 수정)
new Promise(function(resolve, reject) {

  setTimeout(() => reject('error'), 1000);

}).then(function(result) {

  alert(result + ' : 잘 수행!');
  return result + 'one';

}).catch(function(result) {

  alert(result + ' : 애러 발생!'); // 1
  return result + 'two';

}).then(function(result) {

  alert(result + ' : 잘 수행!'); // 2
  return result + 'three';

});

// 정리 전

loadScript('1.js', function(error, script) {

  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', function(error, script) {
      if (error) {
        handleError(error);
      } else {
        // ...
        loadScript('3.js', function(error, script) {
          if (error) {
            handleError(error);
          } else {
            // 모든 스크립트가 로딩된 후, 실행 흐름이 이어집니다. (*)
          }
        });

      }
    })
  }
});

// 정리 후
loadScript("/article/promise-chaining/one.js")
.then(script => loadScript("/article/promise-chaining/two.js"))
.then(script => loadScript("/article/promise-chaining/three.js"))
.then(script => {
  // 스크립트를 정상적으로 불러왔기 때문에 스크립트 내의 함수를 호출할 수 있습니다.
  one();
  two();
  three();
});