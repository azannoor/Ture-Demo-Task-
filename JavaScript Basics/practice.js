//let

let firstName = 'Azaan', lastName = 'Noor'

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate)

let age = 22
let isApproved = true

let person = {
    name: 'Azaan',
    age:22,
}


//assign values multiple time to same variable


person.name = 'Ali'

person['name'] = 'John'

console.log(person.name)

let selectedColors = ['red','blue']
selectedColors[2] = 1;
console.log(selectedColors)

//function

function greet(name){
    console.log('Hello ' + name)
}

greet('Harry')

function square(number){
    return number * number;
}

console.log(square(2))

//array destruct

const myProLang = ['js','python','C','java']

let [a,,,c] = myProLang

console.log(`my fav language is ${c}`)

//object destruct

let person1 = {
    name: 'azaan',
    age: 22,
    phone: 321,
    address:{
        a:'az',
        b:'bz'   },
}

let {name:name1,address:ad} = person1

console.log(ad)

//for loop

for(let i = 0;i<10;i++){
    console.log('hello')
}

//do while
let k = 10

do{
    console.log("hello")
    k++
}
while(k<10)

//for...in

let animal = {
    name:"zaryab",
    leg: 4
}

for(let key in animal){
    console.log(key,animal[key])
}

//arrays
let names = ["azaan","hammad","hamza"];

for(let index in names){
    console.log(index,names[index])
}

//for...of

for(let name of names){
    console.log(name)
}

//switch statement

let age1 = 22;

switch(age1){
    case 1:
        age1: 12;
        break;
    case 2:
        age1: 2;
        break;
    default:
        age1 = "not found"
        break;
}
console.log(`the value is ${age1}`)