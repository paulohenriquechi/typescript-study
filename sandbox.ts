let character: string;
let age: number;
let isLoggedIn: boolean;

character = "Feitan";
age = 30;
isLoggedIn = true;

let list: string[] = [];

let mixed: (string | number)[] = [];

let personOne: object;

let personTwo: {
  name: string;
  age: number;
};

personOne = { name: character, age: age };
personTwo = { name: character, age: age };
console.log(personOne);
console.log(personTwo);
