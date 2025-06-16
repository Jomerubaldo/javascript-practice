// // Normal for lopp

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// // For loop with array value

// let people = ["Jomer", "Jelly", "Mercy", "Junior", "Jojie", "Merly"];

// for (let i = people.length - 1; i > 0; i++) {
//   /// u need to use length fuction to read how many array value inside the array
//   console.log(people[i]);
// }

// let num1;

// let num2;

// let sum = num1 + num2;

// prompt("Enter you number: " + sum);

// console.log(sum);

// // calculate how many length inside the array using prompt fucntion to enter user the number they want

// let products = ["Shoes", "Clothes", "Jacket", "Tshirt"];

// products.length;

// console.log(products);

// normal for loop searching array value using break function

// let people = ["Jomer", "Jelly", "Mercy", "Junior"];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
//   if (i === 2) break;
// }

//fastest for loop way to iterating array without any computing

// let names = ["Jomer", "Jelyy", "Mercy", "Junior"];

// for (let i in names) {
//   console.log(names[i]);
// }

//ver fastest way to red the array value compare other and downside is you cant print index

// let names2 = ["Jomer", "Jelyy", "Mercy", "Junior"];

// for (let person of names2) {
//   // new thing using of not in
//   console.log(person);
// }

// challenge for searching array value with sa same letter or value and if found print found and name array and if not printed not found

// let people = ["Jomer", "Jelly", "Mercy", "Junior"];

// let search = "Jomer";

// let isFound = false;

// for (let i = 0; i < people.length; i++) {
//   if (people[i].toLowerCase() === search.toLowerCase()) {
//     isFound = true;
//     console.log(`Found  ${people[i]}`);
//     break;
//   }
// }

// if (!isFound) console.log("Not Found");

// other way to searching array value and print it with fo loop

// let people = ["Jomer", "Jelly", "Mercy", "Junior"];

// let search = "jOmEr";

// let isFound = false;

// for (let i in people) {
//   if (people[i].toLowerCase() === search.toLowerCase()) {
//     isFound = true;
//     console.log(`Found ${people[i]}`);
//     break;
//   }
// }

// if (!isFound) console.log("Not Found");
