/*Type object
Access property values
change property values
dot notation
bracket notation
special casess
nesting of objects
comparison of objects
reference types vs primitive value types

*/

/*const person = { name: "John", age: 38, job: "Developer" };

console.log(person);
console.log(person.name);
person.name = "Jane";
console.log(person["name"]);
person["name"] = "Abena";
console.log(person["name"]);*/

/*const myProperty = "name";
console.log(person[myProperty]);

const person2 = {
  1: "test",
  "John Doe": "Person Name",
};

console.log(person2["1"]);*/

// nesting objects
/*

const person = {
  name: "John",
  age: 38,
  job: "Developer",
  address: {
    street: "Main Street",
    state: "NY",
    zipCode: 10001,
  },
};

console.log(person.address.zipCode);
console.log(person["address"]["zipCode"]);*/

/*const person = { name: "John", age: 38, job: "Developer" };
console.log(person);*/
/*
console.log(23 === 23);
console.log({} === {});

const person = { name: "John", age: 38, job: "Developer" };
const person2 = { name: "John", age: 38, job: "Developer" };
console.log(person === person2);:*/

const person = { name: "John", age: 30 };
console.log(person);

person.job = "developer";
console.log(person);

person.address = {};
console.log(person);

person.address.street = "Main Street";
console.log(person);

delete person.job;
console.log(person);

person.address.state = "NY";
console.log(person);

//kdkdkk
