//Push
//Task 1
const emptyArray = [];
emptyArray.push(1);
emptyArray.push('JS');
emptyArray.push(543);
emptyArray.push('Home');
emptyArray.push('Work');
emptyArray.push(32);
emptyArray.push(0.731);

console.log(emptyArray);

//Task 2
function pushElement(Array, element){
    Array.push(element);
    return Array;
}

const myArray = [1,2,3]

let updatedArray = pushElement(myArray, 'home-work');
console.log(updatedArray);

//Pop
//Task 1
const myArray = [1,2,3,4,5,6,7,8,9]
myArray.pop();
console.log(myArray);

//Task 2
function deleteElement(Array){
    Array.pop();
    return Array;
}

const myArray = [1,2,3,4,5,6,7,8]

let updatedArray = deleteElement(myArray);
console.log(updatedArray);

//unshift
//Task 1
const myArray = [1,2,3,4,5,6,7,8,9]
myArray.unshift(132);
console.log(myArray);

//Task 2
function unshiftElement(Array, element){
    Array.unshift(element);
    return Array;
}

const myArray = [1,2,3]

let updatedArray = unshiftElement(myArray, 'home-work');
console.log(updatedArray);

//shift
//Task 1
const myArray = [1,2,3,4,5,6,7,8,9]
myArray.shift();
console.log(myArray);

Task 2
function deleteFirstElement(Array){
    Array.shift();
    return Array;
}

const myArray = [1,2,3,4,5,6,7,8]

let updatedArray = deleteFirstElement(myArray);
console.log(updatedArray);

//Fill
//Task 1
const myArray = [1,2,3,4,5,6,7,8,9]
myArray.fill('new');
console.log(myArray);

//Task 2
function changeElement(Array, element){
    Array.fill('New', 3, 7);
    return Array;
}

const myArray = [1,2,3,4,5,6,7,8]

let updatedArray = changeElement(myArray);
console.log(updatedArray);

//Additional tasks
//Task 1
function newArray(array, number){
    if(typeof number === 'number'){
        return !array.includes(number) ? [...array, number] : [...array]
    }else{
        throw new Error('The argument must be a number');
    }
}

try {
    console.log(newArray([3,6,12,123,432,4,2,5], 9));
} catch (error) {
    console.error(error.message);
}

//Task 2
function sortArray(array){
    let copyArray = [...array];
    copyArray.sort(function(a,b){return a-b}).pop();
    return copyArray;
}
console.log(sortArray([3,6,12,123,432,4,2,5]));

//Task 3
function addNumber(array,value){
    return [value, ...array];
}
console.log(addNumber([3,6,12,123,432,4,2,5], 100));

//Task 4
function maxValue(array){
    return [...array].reduce((accumulator, currentValue) => {
        return currentValue > accumulator ? currentValue : accumulator;
    }, [...array][0]);
}
console.log(maxValue([3,6,12,123,432,4,2,5]));