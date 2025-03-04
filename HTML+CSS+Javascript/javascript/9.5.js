/* 9.5 반복문 다루기 */
/* while */
let num = 1;
while(num<=9){
    console.log(num);
    num++;
}

//do while문은 조건이 뭐든 무조건 한 번은 실행된다.
do{
    console.log('do')
}while(false);

// for문, 실무에서 가장 많이 씀
// for(let i=0;i<=5;i++){
//     console.log(i);
// }

//다중 반복문
for(let i=0;i<2;i++){
    console.log(`i:${i}`);
    for(let k=0;k<2;k++){
        console.log(`k:${k}`);
    }
}

const arr = ['apple', 'banana', 'orange'];
for(let i=0; i<arr.length;i++) {//arr.length는 배열의 크기를 반환, 즉 3 반환
    console.log(arr[i])
}
for(let index in arr){
    console.log(arr[index]);
}

const obj = {
    name: '철수', age: 20
};
for(let key in obj){
    console.log(obj[key]);
}

//break;
//continue;
for(let i=0;i<5;i++){
    if(i===3) continue; //i=3일때 i출력 건너뛰기
    console.log(i);
}