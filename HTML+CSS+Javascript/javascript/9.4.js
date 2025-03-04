/* 9.4 조건문 다루기 */
/* if, switch */
let num = 10;
if(num%2===0){ //참고로 if문 안에 if문 사용 가능
    console.log('num은 짝수입니다.');
}
else{
    console.log('num은 홀수입니다.');
}
// if(){}else if{}else{} 순 
let num1 =10;
if(num1 > 20){
    console.log('num1은 20보다 큽니다.');
}
else if(num1 > 5){
    console.log('num1은 5보다 큽니다.');
} //else if는 여러 개 나와도 된다.
else{
    console.log('num1은 5보다 작습니다.');
} //else문은 한 번만 사용가능

let score = 85;
if(score>=90){
    console.log('A++');
}
else if (score<90 && score>=80){ //80<=score<90 말고 논리연산자를 이용해서 식 두 개를 연결해줘야함
    console.log('B++');
}


let food = 'melon';
switch (food) {
    case 'melon':
        console.log('fruit');
        break;
    case 'apple':
        console.log('fruit');
        break;
    case 'carrot':
        console.log('vegetable');
        break;
    default:
        console.log('아무것도 아니다.');
        break;
}


