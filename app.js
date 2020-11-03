/*
var firstName = 'John';
console.log(firstName);

var lastname = 'Smith';
var age = 28;

var fullAge = firstName + lastname;
console.log(fullAge)

var job;

job = 'Teacher';
console.log(job);

//single line comment

/*
Multi line comment

var $3years = 3;
var _johnMark = 'John and Mark';
console.log(_johnMark);

*/



/************************************
 * Variable mutatuion and type coercion
 ******************/
/*
 var firstName = 'John';
 var age = 28;
 
 console.log(firstName + '' + age);

 var job, isMarried;
 job = 'teacher';
 isMarried = false;

 console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

 // Variable mutation
 age = 'twenty eight';
 job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + 
job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + '' + lastName);

*/







/************************************
 *Basic operators
 ******************/
/*
var year, yearMark, yearJohn
  now = 2018
  yearJohn = year - 28;
  yearMark = year - 38;

  //Math operators
 console.log(yearJohn);

 console.log(now + 2);
 console.log(now * 2);
 console.log(now / 2);

 var johnOlder = yearJohn > yearMark;
 console.log(johnOlder);

 //typeof operator
 console.log(typeof johnOlder);
 console.log(typeof yearJohn);
 console.log(typeof 'Mark is older thsn John');
*/



 /************************************
 *Basic operators
 ******************/


/*
 var now = 2018;
 var yearJohn = 1989;
 var fullAge = 18;

 var isFullAge = now - yearJohn >= fullAge;
 console.log(isFullAge);

 var ageJohn = now - yearJohn;
 var ageMark = 35;
 var average = (ageJohn + ageMark) / 2;
 console.log(average);

 //Multiple assignments
 var x, y;
 x = y =(3 + 5) * 4 - 6;// 8 * 4 - 6 // 32 - 6 // 26
 console.log(x, y);

 //More operators

 /* x = x * 2; */  
 /*
 x *= 2;
 console.log(x);
 x += 2;
 console.log(x);
 //increment
 x--;
 console.log(x);

 */




 
 /************************************
 *If else statements
 ******************/
/*
 var firstName = 'John';
 var civilStatus = 'single';

 if (civilStatus === 'married') {
     console.log(firstName + 'married');
 } else {
    console.log(firstName + ' is single');
 }

 var isMarried = true;

 if (isMarried) {
    console.log(firstName + ' is married');
} else {
   console.log(firstName + ' is single');
}


*/




 /************************************
 *Boolean logic
 ******************/
/*
 var firstName = 'John';
 var age = 16;

 if (age < 13) {
     console.log(firstName + ' is a boy');
 } else if(age >= 13 && age <20) {//Between 13 and 20
    console.log(firstName + ' is a teenager');
 } else if(age >= 20 && age <30) {
    console.log(firstName + ' is a young adult');
 }else {
    console.log(firstName + ' is a adult');
 }

*/
 
 /************************************
 *The ternary Operator and Switch Statements
 ******************/
/*
var firstName = 'John';
var age = 22;

age >= 18 ? console.log(firstName + ' drink beer.')
: console.log(firstName + ' drinks juice.');


/* 
if (age >= 18) {
   var drink = beer;
} else {
   var drink = 'juice';
} */
//ALTERNATIVE 

/*
var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

//Switch Statement
//Similar to If Else statements

var job = 'teacher';
switch (job) {
   case 'teacher':
      console.log(firstName + ' teaches kids how to code.');
      break;
      case 'driver' :
         console.log(firstName + 'drives an uber in Lisbon');
         break;
         case 'designer':
            console.log(firstName + 'designs beautiful websites');
            break;
            default:
               console.log(firstName + ' does something else');
}


switch(true) {
   case age < 13:
      console.log(firstName + ' is a boy');
      break;
         case age >= 13 && age < 20:
         console.log(firstName + ' is a teen');
         break;
            case age >= 20 && age < 30:
            console.log(firstName + ' is a young adult');
            break;
            default:
               console.log(firstName + ' is a adult');

}
*/




 /************************************
 *Truthy and Falsy values and quality operators
 ******************/

 // falsy values: undefined, null, 0, '', NaN
 // truthy values: NOT falsy values

 var height;

 height = '23';

 if (height || height === 0) {
    console.log('Variable is defined');
 } else {
    console.log('Variable has NOT been defined');
 }

// Equality operators
if (height === '23') {
   console.log('The == operator does type coercion!');
}

