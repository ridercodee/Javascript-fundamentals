// javascript object
let employee = { 
 firstName: "Mehboob",
 lastName: "khan",
 birthdate: new Date("febuary 16, 2024"),
 numYearsEmployment: 7,
 department: "Engineering",
 tittle: "CTU",
 isActive: true,
 salary: 100000 
};

// Convert to JSON string
let jsonValue = JSON.stringify(employee, null, 2);
console.log(jsonValue);