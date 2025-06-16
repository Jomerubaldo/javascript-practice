let information = {
  firstName: "Jomer",
  lastName: "Ubaldo",
  age: 21,
  bloodType: "O",
  breed: "Human",
  hobbies: ["Coding", "Watching", "Gym", "Reading"],
  animal: {
    pet1: {
      petName: "Buranday",
      
    }
  }
};
console.log(
  `This is a full name of user: ${information["firstName"]} ${information["lastName"]}`
);
console.log(information["hobbies"][3]);

console.log(information["pet"]["name1"]);
console.log(information["pet"]["breed1"]);
console.log(information["pet"]["name2"]);
console.log(information["pet"]["breed2"]);
