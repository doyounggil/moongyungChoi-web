/* 9장 (9.1 ~ 9.2) */
/* 변수 */
/* var는 실무에서 거의 사용 안 함. let 사용 */
var num = 10+20; /* var는 키워드 num은 식별자 =는연산자 10+20은 표현식 30은 값 */
console.log(num);
let numz = 10;
console.log(numz);
const nums = 10;
console.log(nums); /* const는 다른 키워드와 다르게 무조건 선언(const nums;)과 할당(nums = 10;)을 같이 해야함, 한 번 선언되고 할당이 되면 재할당이 불가능 */

/* 자료형 */
let str = "Hello"; /* 문자열 */ /* "" 또는 '' 로 정의 */
let str2 = 'Hello';
console.log(str, str2);
//1.문자열 연결 연산자
let str1 = '문자열은 큰따옴표("") 또는 작은따옴표(' + "'')로 정의합니다."; /* 큰따옴표와 작은따옴표 둘다 문자열에 등장할 때, 문자열 연결연산자 +로 연결해서 표현 가능 */
console.log(str1);
//2. 이스케이프 문자
let str3 = '문자열은 큰따옴표("") 또는 작은따옴표(\'\')로 정의합니다.';
console.log(str3);
//3. 템플릿 문자열 (변수 사용 가능)
let str4 = `문자열은 큰따옴표("") 또는 작은따옴표(\'\')로 정의합니다.`;
console.log(str4);
const msg = '문자열';
let str5 = `${msg}은 큰따옴표("") 또는 작은따옴표(\'\')로 정의합니다.`;
console.log(str5);

const num1324 = 10; /* 숫자형 */

const bool = true; /* 논리형 */
//const bool = 10 < 30;

let nnum;   /* undefined */ /* undefined 할당 안해도 자동 할당 */
console.log(nnum);
let nuum = null; /* null */
console.log(nuum);

let numm = {} /* 객체 자료형 */

let nnumm = [10, 20, 'a']; /* 배열 */
console.log(nnumm)
console.log(nnumm[1]);
