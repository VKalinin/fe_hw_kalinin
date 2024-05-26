//task 1
const daysArr = ['Mon','Tue','Wed','Thu','Fri']

for (let i = 0; i < daysArr.length; i++){
    if(daysArr[i] === 'Tue' || daysArr[i] === 'Thu'){
        console.log(`Lesson`);
    }
}

//task 2
let firstNumber = prompt(`Enter the first number:`);
let lastNumber = prompt(`Enter the last number`);
let sum = 0;

while (firstNumber <= lastNumber){
    if(firstNumber%2 === 0){
         sum += firstNumber;
    }
    firstNumber++
}
console.log(sum);

//task 3
let num = 5;
let maxMultiplayer = 10;
let eachMultiply = 0;

for(let i = 1; i <= maxMultiplayer; i++){
    eachMultiply = num * i;
    console.log(eachMultiply);
}

//task 4
for (let i = 10; i > 0; i--){
    console.log(i);
}

//task 5
let num = prompt(`Enter the number:`);
const oddNumbers = [];
const evenNumbers = [];

    for (let i = 1; i <= num; i++){
        if (i % 2 === 0){
            evenNumbers.push(i);
        }
        else{
            oddNumbers.push(i);
        }
    }
    alert(`Even numbers: ${evenNumbers}.\nOdd numbers: ${oddNumbers}`);

//Task 6
let firstEvenNumber
for (let i = 1; i <= 10; i++){
    if (i % 2 === 0){
        firstEvenNumber = i;
        alert(`First even Number: ${firstEvenNumber}`);
        break;
    }
}

//Task 7
const evenNumbers = [];

for(let i = 1; i <= 10; i++){
    if(i % 2 != 0){
        continue;
    } else{
        evenNumbers.push(i);
    }
}
console.log(`Even numbers: ${evenNumbers}`);

//Task 8
let day = prompt(`What the day is it today?`);

switch(day) {
    case "Mon":
        alert(`It's a free day`);
        break;

    case "Tue":
        alert(`You have a lessons today`);
        break;

    case "Wed":
        alert(`It's a free day`);
        break;

    case "Thu":
        alert(`You have a lessons today`);
        break;

    case "Fri":
        alert(`It's a free day`);
        break;

    case "Sat":
        alert(`It's a free day`);
        break;

    case "Sun":
        alert(`It's a free day`);
        break;
    default:
        alert(`Unknown day`);
}

//Task 9
let planet = prompt(`What the planet are you interested in?`);

switch(planet) {
    case "Mercury":
        alert(`The planet Mercury is in our solar system`);
        break;

    case "Venus":
        alert(`The planet Venus is in our solar system`);
        break;

    case "Earth":
        alert(`The planet Earth is in our solar system`);
        break;

    case "Mars":
        alert(`The planet Mars is in our solar system`);
        break;

    case "Jupiter":
        alert(`The planet Jupiter is in our solar system`);
        break;

    case "Saturn":
        alert(`The planet Saturn is in our solar system`);
        break;

    case "Uranus":
        alert(`The planet Uranus is in our solar system`);
        break;
    
    case "Neptune":
        alert(`The planet Neptune is in our solar system`)
    default:
        alert(`This planet is not in our solar system`);
}

//Additional task
const smile = [':)', '=)',':)', '=)',':)', '=)'];
console.log(`The original array: ${smile}`);

for (let i = 0; i < smile.length; i ++){
    if(smile[i] === '=)'){
        smile[i] = ';)';
    }
}
console.log(`The changed array: ${smile}`);