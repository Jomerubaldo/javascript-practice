let j = 10;

console.log(j == "10");

console.log(j === "10");

console.log(j != "10");

console.log(j !== "10"); // its true because the 10 is not integers ints string

// Comparison Operator

let y = 10;

console.log(y == "10"); // it is acceptable because the let data type is let general

let x = "Apple";

let z = "Apple";

console.log(x !== z);

// If else if  else conditonal statement

let age = 0;

if (age >= 18) {
  console.log("Legal Age");
} else if (age <= 0) {
  console.log("Invalid Age");
} else {
  console.log("Minor Age");
}

// VERY IMPORTANT TIPS IF THE IF THE CONDITON SAID
// 101 = INVALID GRADE
// 98 - 100 WITH HIGHEST HONOR
// 95 - 97 WITH HIGH HONOR
// 90 - 94 WITH HONOR
// 75 - 89 PASSED
// 74 BELLOW FAILED
// YOU NEED TODO IS GET THE FIRST VALUE LIKE 98 THEN SKIP THE 100 THEN 95 SKIP THE 97 PARA HINDI KA MALITO

let grade = 100;

if (grade >= 101) {
  console.log("Invalid Grade");
} else if (grade >= 98) {
  console.log("With Highest Honor");
} else if (grade >= 95) {
  console.log("With High Honor");
} else if (grade >= 90) {
  console.log("With Honor");
} else if (grade >= 75) {
  console.log("Passed");
} else {
  console.log("Failed");
}
