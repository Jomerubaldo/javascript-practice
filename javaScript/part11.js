let person = {
  firstName: "Jomer",
  lastName: "Ubaldo",
  age: 22,
  pets: {
    name: "Kupal",
    type: "Human",
    ability: {
      nen: "Fly",
      curse: "Jump",
    },
  },
};

alert(person["pets"]["name"]);
alert(person["pets"]["type"]);
alert(person["pets"]["ability"]["nen"]);
