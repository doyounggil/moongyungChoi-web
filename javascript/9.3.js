/* 9.3 연산자 */
let num = 10%3; /* 나머지 구하기 */
console.log(num);
let num1 = 2**3; /* 제곱 연산, 2의 3승 */
console.log(num1);

let num2 = 1;
//전치 : ~ 전에
//후치 : ~ 후에
num2 = ++num2; /* 전치, num2를 할당하기 전에 1를 증가해라, 2 출력 */
//num2 = ++num2; /* 후치, num2를 할당한 후에 1를 증가해라, 1 출력 */
console.log(num2);

let num3 = 10;
num3 += 2; // num3 = num3 + 2
console.log(num3);

//비교 연산자 -> 논리형값이 출력
let nnum1 = 10;
let nnum2 = 20;
let result = nnum1 > nnum2;
console.log(result);

let NUM = 10;
let strNUM = '10';
let RESULT = NUM == strNUM ;
console.log(RESULT); //자료형이 다르지만 ==를 사용하면 등호기준 양변이 같은 자료형으로 형변환이 되어서 결과가 출력됨, 자료형까지 일치하는지 확인하려면 === 사용, 부정은 !==

//논리 연산자
// &&(and연산자), ||(or연산자), !(부정연산자)
//?: 삼항연산자
let Result = 10 < 20 ? '참입니다' : '거짓입니다';
console.log(Result);