// 구조분해 할당(디스트럭처링)

// ES5 문법에서
// 배열의 값을 호출해서 변수에 담거나 사용할때
let one;
let two;

let arr = [1,2,3,4,5];

one = arr[1];
two = arr[3];
// 하나씩 인덱스를 사용해서 값을 하나씩 할당했고
console.log(one,two);

// ES6에서 도입
// 구조분해 할당

// 변수를 선언하고 배열의 arr2의 값을 구조분해 할당해서
// 순서대로 할당 시킨다.
// 배열의 구조 분해 할당.
let arr2 = [1,2,3,4];
let [one1,two1,three1,one2] = arr2;
console.log(one1,two1,three1,one2);

// 값이 순서대로 할당된다.
// let [a,b] = [1,2];
// console.log(a,b); //12

// // 할당 되는 값이 없으면 undefined
// let [c,d] = [1];
// console.log(c,d); // 1 undefined

// // 넘처도 됨.
// // 순서대로 할당되는것만 보자.
// let [e,f] = [1,2,3];
// console.log(e,f); // 1 2

// 변수에 디폴트 값도 추가할수있다.
let [a,b,c=1] = [1,2];
console.log(a,b,c);

// ES6에서 구조분해할당이 도입되었는데
// 배열이나 객체의 값을 분해해서 편하게 변수에 할당해서 사용할수 있다.
// 코드를 작성하면서 시간도 절약할수있다.
// 길이도 줄어들겠죠? 가독성도 좋아진다.

// 객체의 구조분해 할당.

// ES5
// 객체의 값을 변수에 할당.
let name1 = {firstName : "lee", lastName : "kim"};
// let name2 = name1.firstName;
// let name3 = name1.lastName;
// console.log(name2, name3);

// es6 객체의 각 키를 뽑아서 변수에 할당.
// 이 친구는 순서가 아니다.

// 키를 기준으로 구조분해 할당이 이루어진다.
// 순서가 아니고.
// let { lastName, firstName } = name1;
// console.log(firstName,lastName);

// 객체의 디폴트값 추가
let name4 = {firstName = "lee", lastName} = {lastName : "kim"};
console.log(firstName, lastName);

// 구조분해할당
// 문자열을 담은 변수에서
let str = "sdfasfs";
// str.length 문자열 길이
// 구조분해할당으로 변수에 할당.
let {length} = str;
console.log(length);

// 작업할때 객체화 시켜서
// 작업을 하다가 객체안에 필요한 값만 호출해서 구조분해 할당해서
// 사용할수있다.

let list = [{id : 1, content :"dfsdfsdf", isActive : true},
            {id : 2, content :"dfsdfsdf", isActive : true},
            {id : 3, content :"dfsdfsdf", isActive : true},
            {id : 4, content :"dfsdfsdf", isActive : true}];7

// id 값만 뽑아오자.
list.forEach(function(i){
    let {id} = i;
    console.log(id);
})
// list객체에서 id 키값만 구조분해할당으로 할당 해줄수있다.

let user = {
    name : "lee",
    address : {
        city : "seoul"
    }
}

// 구조분해할당으로 city 값을 할당해보자.
let {address:{city}} = user;
console.log(city);

// 스프레드 연산자.
// 스프레드 연산자 많이 사용한다.
// 스프레드 연산자 구문 ... 이렇게 작성하면된다.
// 스프레드 연산자는 본 객체를 변경하지 않고
// 새로운 객체를 만들어준다.
let temp = [1,2,3];
let temp2 = [4,5,6,7];

let temp3 = [...temp,...temp2];
console.log(temp3);
// 값만 참조한다.
// 새로운 객체를 만들어 낸다.

let obj = {
    a:1,
    b:2
}

let obj2 = {
    a:2,
    b:3,
    c:1
}

let obj4 = {
    a:3,
    b:4,
    c:4
}

// 키값이 동일할경우 마지막 값으로 할당된다.
let obj3 = {...obj,...obj2,...obj4};
console.log(obj3);
