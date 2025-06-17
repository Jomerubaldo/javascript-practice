// function sayJomer() {
//   console.log("Jomer");
//   console.log("Ubaldo");
// }

// sayJomer();

// u can used function with for loop

// function sayJomer() {
//   console.log("Jomer");
//   console.log("Ubaldo");
// }

// for (let i = 0; i < 5; i++) {
//   sayJomer();
// }

// this is a function use with parameters and argument

// function add(num1, num2) {
//   let sum = num1 + num2;
//   console.log(sum);
// }

// add(10, 10);

// // 1. created a function with two parameters numbers
// function add(num1, num2) {
//   // 3. add them two value and return if to sum
//   return num1 + num2;
// }
// // 4. and sum get value from return
// // 2. get this value and passed to parameters
// sum = add(10, 5) * add(10,5); // you can add another add()function to calculate the two value
// // 5. and print the all value using console.log() with varliable sum
// console.log(sum);

// 1. create a function with two parameter
// function add(num1, num2) {
// 3. add two value from parameters and pass it to arguments again
// return num1 * num2;
// }
// 4. print it to show the value inside the console.log called the argusment like add()
// 2. get the value from argument and pass it to parameter
// console.log(add(10, 20));

//Global Variables

// let x = 10;

// function add() {
//   console.log(x);
// }

// function add1(num) {
//   console.log(num + x);
// }

// add();
// add1(10); // need to insert value form add1() because it like a num container inside it is value to + the x

// create a function that accepts an array of numbers. iterate the array inside the function and return the add() sum oof all numbers of the array and display it
// nad it is a local variable not global variable

// challenge

// function add(numbers) {
//   let sum = 0; // here is local variable because it inside the function not the outisde of function
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// }

// let sum = add([2, 3, 4, 5, 1]);
// console.log(sum);

// remember this

// [] = its a Array

// {} = its a onjects

// this is a object in javascript
// const studentInfo = {
//   $name: "Jomer",
//   $age: 21,
// };

// console.log(`Name: ${studentInfo["$name"]}`);
// console.log(`Age: ${studentInfo["$age"]}`);

// this is a array in javascript
// const arrayName = ["Jomer", "Jelly", "Mercy", "Junior"];

// for (let i = 0; i < arrayName.length; i++) {
//   console.log(arrayName[i]);
// }

// this is a functions in javascript

// const greet = (say) => {
//   return `${say} World`;
// };

// console.log(greet("Hello"));
