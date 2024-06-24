// //Task 1
// for (let i = 0; i<5; i++){
//     console.log(i);
// }

// //Task 2
// const message = 'test';
// function example() {
//     if (true) {
//         const message = 'Hello, world!';
//         console.log(message); // Виведе 'Hello, world!'
//     }
//     console.log(message); // Виведе 'test'
// }
// console.log(example());

// //Task 3
// const person = {
//     name: 'John',
//     age: 25,
//     occupation: 'Developer'
// };

// for (const key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log(person[key]);
//     }
// }

// //Task 4
// const students = [
//     { name: 'Alice', age: 20, grade: 'A' },
//     { name: 'Bob', age: 22, grade: 'B' },
//     { name: 'Charlie', age: 21, grade: 'C' },
//     { name: 'Vlad', age: 23, grade: 'D' }
// ];

// for (const obj of students) {
//     for (const key in obj){
//         if (obj.hasOwnProperty(key)){
//             console.log(obj[key]);
//         }
//     }
// }

//Task 5
// function yearOfBirth(){
//     let userAge = prompt(`Enter your age:`);
//     if (userAge !== null && userAge > 0) {
//         const date = new Date().getFullYear();
//         let bornYear = date - userAge;
//         console.log(`Yours birth year is: ${bornYear}`);
//     } else {
//         console.log("Please enter a valid age.");
//     }
// }
// yearOfBirth();

// //Class
// class Person {
//     constructor (name, age) {
//         this.name = name;
//         this.year = year;
//     }
// }

// const myFirstPerson = new Person("John", 30);

// //Class methods
// class Person {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHello() {
//         console.log(`Hello, ${this.name}!!!`);
//     }
// }
// const myFirstPerson = new Person("John", 30);
// myFirstPerson.sayHello();

// //Inheritance
// class Person {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHello() {
//         console.log(`Hello, ${this.name}!!!`);
//     }
// }

// class Student extends Person {
//     constructor (studentId) {
//         this.studentId = studentId;
//     }
//     study() {

//     }
// }

//Additional task 1
function filterBooks(arr){
    
}