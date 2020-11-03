var johnBMI, markBMI;

var markMass = 90;
var markHeight = 1.92;

var johnMass = 80;
var johnHeight = 1.92;


johnBMI = johnMass / (johnHeight * johnHeight);
console.log(johnBMI);

markBMI = markMass / (markHeight * markHeight);
console.log(markBMI);

var johnHigherBMI = johnBMI >= markBMI;
console.log(' John\'s BMI higher than Mark\'s?', johnHigherBMI);

var markHigherBMI =  markBMI >= johnBMI;
console.log(' Mark\'s BMI higher than John\'s?', markHigherBMI);



//More efficient

if(johnBMI > markBMI) {
    console.log(' John\'s BMI higher than Mark\'s?', johnHigherBMI);
} else {
    console.log(' Mark\'s BMI higher than John\'s?', markHigherBMI);
}