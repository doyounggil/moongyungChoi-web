/* 11장 자바스크립트 객체 다루기 */
const person = {
    name: 'dododo',
    age: 24,
    'phone number': '010-5344-7629',
    printInfo: function(msg) {  // 객체 안에 정의되어있는 함수는 method라고 함
        console.log(msg);
    }
};
console.log(person.name); // 맞침표 연산자
console.log(person['age']); // 대괄호 연산자
console.log(person['phone number']); // 키에 공백이 있다면 무조건 대괄호 연산자를 써야함.
person.printInfo('hello');
person.name = '문경';  //이미 정해져 있는 객체 속 속성 바꾸기
console.log(person.name);
person.height = 181; // 동적으로 속성 추가하기, 객체 속 속성 추가
console.log(person.height);
delete person.age; // 동적으로 속성 삭제하기
console.log(person);


const obj = {
    name: '철수',
};
const obj2 = obj;
delete obj.name;
console.log(obj, obj2); //얕은 복사