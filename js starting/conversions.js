// Using atypeof function
let strValue = "hi";
console.log(typeof(strValue) );
let numValue = 1;
console.log(typeof(numValue));

//joining a non-string value with a string
let age = 23;
let firstName = "mehboob";
let discription = `${firstName} is ${age} years old`;
console.log(discription);

// Converting a string to a number
let ageString = "23";
let ageNum = Number(ageString);
console.log(typeof(ageNum));
 
// Converting a value  to a boolean
let num1 = 1;
let num2 = 0;
let bool1 = Boolean(num1);
let bool2 = Boolean(num2);
console.log(`Num1: ${bool1} Num2: ${bool2}`);

// Converting a boolean to a string 
let bool3 = true;
console.log(`Bool 3: ${bool3}`);