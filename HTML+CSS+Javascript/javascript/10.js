/* 10장 자바스크립트 함수 다루기 */

/* 함수 선언문 */
function gugudan(dan){
    for(let i=1;i<=9;i++){
        console.log(`${dan}*${i}=${dan*i}`);
    }
};
gugudan(5);

/* 함수 표현식 */ //함수 표현식에서 함수는 함수 네이밍(function 뒤 이름)으로 호출할 수 없고 오로지 할당된 변수 이름(const 뒤 변수)으로만 할당할 수 있다.
const gugudanExpress = function gugudanExpress(dan){ //함수 네이밍은 변수 이름과 달라도 됨
    for(let i=1;i<=9;i++){
        console.log(`${dan}*${i}=${dan*i}`);
    }
};
gugudanExpress(2);

/* 화살표 함수 */
const gugudnaArrowFunc = (dan = 10) => { //매개 변수에 기본값 할당 가능
    for(let i=1;i<=9;i++){
        console.log(`${dan}*${i}=${dan*i}`);
    }
};
gugudnaArrowFunc();

function sum(num1, num2){
    const result = num1 + num2;
    return result;  // return문: 함수 외부로 데이터를 반환할 때 사용, 함수 내부에서 반환한 데이터는 함수 외부에서 변수로 받을 수 있음
}
const result1 = sum(10, 20);
const result2 = sum(50, 200);
console.log(result1 + result2);
