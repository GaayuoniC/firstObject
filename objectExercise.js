/*const numberA = 30;
let numberB = numberA;

console.log(`numberA: ${numberA} numberB ${numberB} `);

numberB = 45;
console.log(`numberA: ${numberA} numberB ${numberB} `);*/
/*

- NumberA and NumberB are the same
-let NumberB allocates the value in NumberA
-NumberB = 45 is replacing the value 30*/

/*const john = { name: "john", age: 30, job: "developer" };

const jane = john;
jane.name = "jane";

console.log("john");
console.log(john);
console.log("jane");
console.log(jane);*/

/*
- It allocates the same detail as john, but not a seperate copy
-"jane.name = jane" inserts the name as a property
-John has three properties
-Property name for developer is "job"
*/

const golf = {
  color: "yellow",
  maxSpeed: "180",
};
const opel = {
  color: "green",
  maxSpeed: "185",
};
/*console.log("Golf: " + golf["color"]);
console.log("Opel : " + opel.color);*/

let golfColor = golf.color;
let opelColor = opel.color;
golfColor = opel.color;
opelColor = golf.color;

console.log("Golf color is : " + golfColor);
console.log("Opel color is " + opelColor);
