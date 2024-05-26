console.log(`1st Task`);

let number1 = prompt(`Enter the 1st number`);
let number2 = prompt(`Enter the 2nd number`);
let compare = number1 === number2;

alert(`The numbers are equals: ${compare}`);

console.log(`2nd Task`);

let inputNumber = prompt(`Enter a number`);
let calculation = +inputNumber % 2;
if(calculation == 0){
    console.log(`The number is Even`);
}
else {
    console.log(`The number is Odd`);
}

console.log(`3rd Task`);

let price = prompt(`Enter the price`);
let count = prompt(`Enter the count`);
let totalPrice = +price * +count;
console.log(totalPrice);

console.log(`4th Task`);

let productPrice = prompt(`Enter the product price`);
let discount = +productPrice * 0.5;
alert(`Your's final price is ${Math.round(discount)}`);

console.log(`5th Task`);
let firstNumber = prompt(`Enter the 1st number`);
let secondNumber = prompt(`Enter the 2nd number`);
let thirdNumber = prompt(`Enter the 3rd number`);

if(+firstNumber > +secondNumber && +firstNumber > +thirdNumber) {
    console.log(`The largest number is the 1st number: ${firstNumber}`);
} else if ( +thirdNumber > +firstNumber && +thirdNumber > +secondNumber){
    console.log(`The largest number is the 3rd number: ${thirdNumber}`);
} else {
    console.log(`The largest number is the 2nd number: ${secondNumber}`);
}

console.log(`6th Task`);

let monthNumber = prompt(`Enter a month Number (1-12)`);
let intMonth = +monthNumber
switch (intMonth) {
    case 1:
        console.log(`January`);
        break;
    case 2:
        console.log(`February`);
        break;
    case 3:
        console.log(`March`);
        break;
    case 4:
        console.log(`April`);
        break;
    case 5:
        console.log(`May`);
        break;
    case 6:
        console.log(`June`);
        break;
    case 7:
        console.log(`July`);
        break;
    case 8:
        console.log(`August`);
        break;
    case 9:
        console.log(`September`);
        break;
    case 10:
        console.log(`October`);
        break;
    case 11:
        console.log(`November`);
        break;
    case 12:
        console.log(`December`);
        break;
    default: console.log(`Unknown month`);
};

console.log(`7th Task`);

let testMark = prompt(`Enter your's mark (0-100)`);
let mark = +testMark;
if(mark >= 90 && mark <= 100){
    console.log(`The student received A mark`);
    console.log(mark++);
} else if (mark >= 80 && mark <= 89){
    console.log(`The student received B mark`);
    console.log(mark++);
} else if (mark >= 70 && mark <= 79){
    console.log(`The student received C mark`);
    console.log(mark++);
} else if (mark >= 60 && mark <= 69){
    console.log(`The student received D mark`);
    console.log(mark++);
} else {
    console.log(`The student received F mark`);
    console.log(mark++);
}

let result = mark >= 60 ? `The passing score has been achieved:`: `The passing score has not been achieved:`;
console.log(result + ` ` + mark);
