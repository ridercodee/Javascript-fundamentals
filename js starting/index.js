// creating single-line strings
let firstName = "Mehboob";
let lastName = 'Khan';
let tittle = `devloper` ;
tittle = `CTO` ;

 // strings concatination with the plus operator
 let fullName = firstName + " " + lastName;

 // strings concatination with template literels
 fullName = `${firstName} ${lastName}` ;
 console.log(fullName); 

 // creating multiline strings with \n
 let bio = "Line 1\nLine 2\nLine 3";
 console.log(bio);

 // Escaping characters in strings 
 let quote = 'David said, "javascript is great"';
 quote = "David said, \"javascript is great.\"";
 quote =  `In javascript, you must the escape \\char`;
 console.log(quote);

 //defining booleans
let truevalue = true;
console.log(truevalue);

let notfalse = !false;
console.log(notfalse);

// What happens when you don't give a variable a value 
let x;
console.log(x);


//How do we set a variable to a purposefully emty value
let manager = null;
console.log(manager);

let date1 = new Date("2024-01-01");
console.log(date1);