// we cana used FOR IN LOOP to LETERATE over all the key inside the a JSON

let names = {
  fitstName: "Jomer",
  lastName: "Ubaldo",
  age: 21,
};

for (let x in names) {
  console.log(`${[x]}: ${names[x]}`);
}

let names4 = {
  fitstName: "Jomer",
  lastName: "Ubaldo",
  age: 21,
};

let keys = Object.keys(names4);

for (let i = 0; i < keys.length; i++) {
  // i got error here becuase i get the names.length which is no required is keys.length not names.length
  console.log(names4[keys[i]]);
}

// create a JSON and make the keys a subject name and value a corresponding grade.
// use FOR/IN LOOP ti iterate throught the JSON and display the subjects and their grades
// make sure to also compute the average of all the grades and display it

let school = {
  programming: 74,
  science: 74,
  math: 74,
  filipino: 74,
  ethics: 74,
};

let average = 0;

for (let k in school) {
  console.log(`${[k]} : ${school[k]}`);
  average += school[k];
}

average /= Object.keys(school).length;

console.log(`Average: ${average}`);

if (average > 74) {
  console.log("Passed");
} else {
  console.log("Failed");
}
