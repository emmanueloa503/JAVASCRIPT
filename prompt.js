//PROMPT
const prompt = require('prompt-sync')();

var fname= prompt('input first name: ');
var lname= prompt('input last name: ');
const firstLetterOfFname= fname[0];

console.log("My full name is", fname, lname);
console.log("\n", firstLetterOfFname);
console.log(lname.length);