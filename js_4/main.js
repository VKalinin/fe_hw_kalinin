//Splice
//Task 1
const middleSpliceArray = [1,2,3,4,'hello', 'world', 'kalinin', 5,6,7];
middleSpliceArray.splice(3,2);
console.log(middleSpliceArray);

//Task 2
function deleteArrayItems (arr, index, count){
    if (!Array.isArray(arr)) {
        throw new Error('First argument must be an array');
    }
    if (typeof index !== 'number' || typeof count !== 'number') {
        throw new Error('Index and count must be numbers');
    }
    arr.splice(index, count);
    return arr;
}
let updatedArray = deleteArrayItems([1,2,3,4,'hello', 'world', 'kalinin', 5,6,7], 2, 3);
console.log(updatedArray);

//Reverse
//Task 1
let reversArray = [1,2,3,4,'hello', 'world', 'kalinin', 5,6,7];
let reversedArray = reversArray.reverse();
console.log(reversedArray);

//Task 2
function deleteArrayItems (arr){
        if (!Array.isArray(arr)) {
            throw new Error('First argument must be an array');
        }
        arr.reverse();
        return arr;
    }
console.log(deleteArrayItems([1,2,3,4,'hello', 'world', 'kalinin', 5,6,7]));

//Concat
//Task 1
const firstArray = [1,2,3,4];
const seconArray = ['hello', 'world', 'kalinin', 5,6,7];
console.log(firstArray.concat(seconArray));

//Task 2
function concatArrays (conArr, catArr){
        if (!Array.isArray(conArr)) {
            throw new Error('First argument must be an array');
        }
        if (!Array.isArray(catArr)) {
            throw new Error('Second argument must be an array');
        }
        return conArr.concat(catArr);
    }
console.log(concatArrays([1,2,3,4,'hello'], ['world', 'kalinin', 5,6,7]));

//Includes
//Task 1
let inclArray = [1,2,3,4,'hello', 'world', 'kalinin', 5,6,7];
let includesValue = 'hello';
console.log(inclArray.includes(includesValue));

//Task 2
function checkInckudeValue(arr, value){
    if (!Array.isArray(arr)) {
        throw new Error('First argument must be an array');
    }
    return arr.includes(value);
}

console.log(checkInckudeValue(['world', 'kalinin', 5,6,7], 8));

//Filter
//Task 1
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12];
let evenNumbers = numbersArray.filter((number)=> number%2===0);
console.log(evenNumbers);

//Task 2
function filterArray(arr, condition){
    return arr.filter(condition);
}
let numbersArray = [16,21,34,25,19,12,32,64,95,1,22];
const adult = (num) => num >= 18;

console.log(filterArray(numbersArray, adult));

//Map
//Task 1
const numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12];
console.log(numbersArray.map((num)=> num * num));

//Task 2
function originArray(arr, converter){
    return arr.map(converter);
}
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12];
const addString = (value) => `Value: ${value}`;
console.log(originArray(numbersArray, addString));

//Additional tasks
//Task 1
function numbersArray(arr, condition, transformer){
    return arr.filter(condition).map(transformer);
}
console.log(numbersArray([13,21,34,25,19,12,32,64,95,1,22], (num) => num % 2 === 0, (num) => num * num));

//Task 2
function cutAndReversArray(arr, fromIndex, toIndex){
    let newArray = arr.slice(fromIndex, toIndex).reverse();
    return newArray;
}
console.log(cutAndReversArray([13,21,34,25,19,12,32,64,95,1,22],3,5));

//Task 3
function processingArray(arr){
    return arr.filter((num)=> num > 10).splice(0, 3);
}
console.log(processingArray([3,2,34,5,19,6,32,64,95,1,22]));