/*
var age = prompt('What is your age?');

document.getElementById('here').innerHTML = age;
*/

/*                                                    
var num = 0;

while(num < 100) {
    num += 1;//Increment
    console.log(num);
}
*/

//for Loop
for (let num = 0; num <= 100; num++) {
    console.log(num);
}

var yourAge = 18; //number
let yourName = 'Bob'; //string
let name = {First:'Jane', last:'Doe'}; // object
let truth = false; // boolean
let groceries = ['apples', 'bannana', 'oranges'];// array
let random; // undefined
let noting = null; // value null


//Strings in Jaascript

let fruit = 'banana';
let moreFruits = 'banana\n apple';
console.log(moreFruits);

console.log(fruit.length);
console.log(fruit.indexOf('an')); // how to find something
console.log(fruit.slice(2,6));
console.log(fruit.replace('ban', '123')); // replace
console.log(fruit.toLowerCase());

//Same thing
console.log(fruit.charAt(2));
console.log(fruit[2]);
//

console.log(moreFruits.split('')); //split by characters
console.log(moreFruits.split(',')); // split by a comma

//Arrays
let fruits = ['banana', 'apple', 'orange', 'pineapples'];
fruits = new Array('banana', 'apple', 'orange', 'pineapples');

console.log(fruits[2]); // access value at index 2nd

fruits[0] = 'pear' ;// changing values
console.log(fruits);

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}


//array common methods
console.log('to string', fruits.toString());
console.log(fruits.join(' - '));
console.log(fruits.join(' * '));
console.log(fruits, fruits.pop(), fruits);// removes last item
console.log(fruits.push('blackberries'), fruits);// appends last item
console.log(fruits[3]);
console.log(fruits[4]);
fruits[4] = 'new fruit'; // same as push
console.log(fruits);
fruits.shift(); // remove first element from list
console.log(fruits);
fruits.unshift('kiwi'); // add first element to a array
console.log(fruits);

let vegetables = ['asparagus' , 'tomato', 'brocolli'];
let allGroceris = fruits.concat(vegetables); // combine arrays
console.log(allGroceris.slice(1,4));
console.log(allGroceris.reverse());
console.log(allGroceris.sort())

let someNumbers = [5, 10, 2, 25, 3, 333, 2345, 425, 54 ];
console.log(someNumbers.sort(function(a,b) {return a-b})); // sorted in ascending order
console.log(someNumbers.sort(function(a,b) {return b-a})); // dort in descending order

let emptyArray = new Array(); 
for(let num = 0; num < 10; num++){
    emptyArray.push(num);
}

console.log(emptyArray);



// Objects in Javascript
// dictionaries in Python

let student = {
  first: 'Rafeh',
  last:'Qazi',
  age: 25, 
  height: 170,
  studentInfo: function(){
      return this.first + '\n' + this.last + "\n" + this.age;
  }
};
console.log(student.first);
console.log(student.last);
//console.log(student[first]);// deprecated

student.first = 'notRafeh';
console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());  



//Conditionals, Control flows (if else)
// 18-35 is my target demographic

let age = 43;

if ( (age >= 18) && (age <= 35) ){
    status = 'targer demo';
    console.log(status);
} else{
    status = 'not my audience';
    console.log(status);23
}



//Switch statements
//differentiate between weekday vs. wweekend
// 0 --> Sunday
// 6 --> Saturday -->
// 4 --> Thursday --> weekend

switch (6) {
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday'
}


console.log(text);

