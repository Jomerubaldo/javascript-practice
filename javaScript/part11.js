// let information = {
//   firstName: "Jomer",
//   lastName: "Ubaldo",
//   age: 21,
//   bloodType: "O",
//   breed: "Human",
//   hobbies: ["Coding", "Watching", "Gym", "Reading"],
//   animal: {
//     pet1: {
//       petName: "Buranday",
//       typeName: "Dog",
//     },
//     pet2: {
//       petName: "Kulit",
//       typeName: "Cat",
//     },
//   },
// };
// console.log(
//   `This is a full name of user: ${information["firstName"]} ${information["lastName"]}`
// );
// console.log(`The hobbies is: ${information["hobbies"][0]}`);
// console.log(`Name of pet is: ${information["animal"]["pet1"]["petName"]}`);
// console.log(`Type of animal: ${information["animal"]["pet1"]["typeName"]}`);
// console.log(`Name of pet is: ${information["animal"]["pet2"]["petName"]}`);
// console.log(`Type of animal: ${information["animal"]["pet2"]["typeName"]}`);

// // learn how to access data from a JSON object.

// let informationBook = {
//   book1: {
//     title: "The book without knowlegde",
//     author: "Jomer",
//     yearPublished: 2025,
//     genres: ["Learning", "Scientific"],
//     available: true,
//   },
// };

// console.log(informationBook["book1"]["title"]);
// console.log(informationBook["book1"]["genres"][0]);
// console.log(informationBook["book1"]["available"]);

// // learn how to structure and navigate nested data.

// let student = {
//   name: "Jomer",
//   age: 21,
//   address: {
//     street: "RJD Homes",
//     city: "Tacloban",
//     zip: "6500",
//   },
//   course: [
//     { courseName: "Programming" },
//     { grade: "A+" },
//     { courseName: "OOP" },
//     { grade: "B+" },
//   ],
// };

// let student1 = {
//   fName: "Jomer",
//   lName: "Ubaldo",
//   age: 21,
// };

// student1["middleInitial"] = "C";
// student1["fName"] = "Jelly";
// console.log(student1);

// you can convert JSON into string by using the JSON.string() method

// let student = {
//   name: "Jomer",
//   age: 21,
//   address: {
//     street: "RJD Homes",
//     city: "Tacloban",
//     zip: "6500",
//   },
//   course: [
//     { courseName: "Programming" },
//     { grade: "A+" },
//     { courseName: "OOP" },
//     { grade: "B+" },
//   ],
// };

// console.log(student);

// let info = JSON.stringify(student);
// console.log(student);

// you can convert valid string into JSON by using the JSON.parse() method
// if a string is invalid it would throw an error at the console

// let student2 = `{"firstName": "Jomer", "lastName": "Ubaldo", "age": 21}`;

// let person = JSON.parse(student2);
// console.log(person);

// you can also create an Array  of JSON  which can manipulate the same as any other arrays

// let people = [
//   {
//     fName1: "Jomer",
//     lName1: "Ubaldo",
//     middleInitial: "C",
//   },
//   {
//     fName2: "Jelly",
//     lName2: "Ubaldo",
//     middleInitial: "C",
//   },
//   {
//     fName3: "Mercy",
//     lName3: "Ubaldo",
//     middleInitial: "C",
//   },
// ];

// console.log(people[0].fName1);
// console.log(`${people[0].fName1} ${people[0].lName1}`);

// challenge JSON
// create an array of JSON with different keys and value then iterate the array and display all its values in an orderly way

// let cellphones = [
//   {
//     brad: "Vivo",
//     color: "Blue",
//     published: 2017,
//   },
//   {
//     brad: "Infinix",
//     color: "White",
//     published: 2019,
//   },
//   {
//     brad: "Iphone",
//     color: "Red",
//     published: 2020,
//   },
// ];

// let x = JSON.stringify(cellphones);
// console.log(x);

// for (let i = 0; i < cellphones.length; i++) {
//   console.log(cellphones[i].brad);
//   console.log(cellphones[i].color);
//   console.log(cellphones[i].published);
// }
