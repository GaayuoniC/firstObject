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
  color: "red",
  maxSpeed: "18o",
};
const opel = {
  color: "blue",
  maxSpeed: "185",
};
console.log("Golf: " + golf["color"]);
console.log("Opel : " + opel.color);

golf.color = "blue";
opel.color = "red";

console.log("Golf color is : " + golf.color);
console.log("Opel color is " + opel.color);
