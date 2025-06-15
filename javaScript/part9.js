// While Loop Normal Function

let x = 0; // declared the value

while (x < 10) { // check if x is lessthan 10 if true the condition is run 5 times Hello World!
  console.log("Hello World!");
  x++;
}

// While Lopp With Arrays Function with backread value inside the array

let names = ["Jomer", "Jelly", "Mercy", "Junior"];

let i = names.length - 1; // -1 it because 4-1 is 3 so sa index 3 is si Junior sa array value

// checheck niya kung undefined yong value
while (names[i]) {
  console.log(names[i]);
  i--; // change it into decreament
}

// while loop using break

let names2 = ["Jomer", "Jelly", "Mercy", "Junior"];

let u = 0;

while (names2[u]) {
  console.log(names2[u]);
  u++;

  if (u == 2) break;
}

// While loop using searacahing name

let names1 = ["Jomer", "Jelly", "Mercy", "Junior"];

let w = 0;

let y = "Mercy"; //searaching name

while (names1[w]) {
  if (names1[w] === y) {
    console.log(names1[w]);
    break;
  }
  w++;
}

// Do while loop

 let a = 0;

do {
  console.log("Jomer");
  a++;
} while (a < 5);

// challenge Create an array and inside of aaray calculate it using sum and shows the total value

let arr = [12, 21, 12, 234, 34, 2, 43];

let sum1 = 0;

let s = 0;

while (arr[s]) {
  sum1 += arr[s];
  s++;
}

console.log(sum);
