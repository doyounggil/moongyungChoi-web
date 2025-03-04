/* 11.2 표준 내장 객체 */
const str = 'abc';
console.log(str.length);
const email = 'testnaver.com';
if(email.includes("@") === false){
    console.log('@가 없습니다')
}
const mail = 'test@naver.com';
    console.log(mail.indexOf("s")); // 특정 문자가 몇번째에 위치해 있는지 확인
    console.log(mail.indexOf("x")); // 없는 걸 찾으려하면 -1 반환, includes와 유사하게 사용 가능

// 배열에서 원본이 손상된다 -> 파과적 매쏘드, 파괴가 안된다 -> 비파괴적 매쏘드
const arr = [ 'a', 'b', 'c'];
arr.pop(); // 배열의 마지막 데이터 추출, 파괴적 매쏘드
console.log(arr);
const popResult = arr.pop(); // 또 마지막 데이터 추출, 사용하면 할수록 원본 훼손
console.log(popResult)
arr.push('d'); //파괴적 매쏘드
console.log(arr);
arr.forEach(function(v){ // forEach: 배열 안 요소를 하나씩 탐색
    console.log(v); 
});

const date = new Date(); // date객체를 사용할 때는 다른 것과 좀 다르게 new Date라는 코드를 사용해야함
console.log(date.getFullYear()); // FullYear: date객체 작성 기준 년도

const random = Math.random(); //0이상 1미만의 임의의 난수 
console.log(random); 

const random1 = Math.random() * 20 ; //20미만의 임의의 난수 
console.log(random1); 

const random2 = Math.random() * 10+1; 
console.log(Math.floor(random2)); //10 이하의 임의의 정수인 난수 
