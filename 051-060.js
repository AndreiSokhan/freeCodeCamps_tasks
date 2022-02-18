//51.
// Declare the myGlobal variable below this line

const myGlobal = 10;


function fun1() {
   // Assign 5 to oopsGlobal Here
   oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
   var output = "";
   if (typeof myGlobal != "undefined") {
      output += "myGlobal: " + myGlobal;
   }
   if (typeof oopsGlobal != "undefined") {
      output += " oopsGlobal: " + oopsGlobal;
   }
   console.log(output);
}

//52.
function myLocalScope() {
   // Only change code below this line
   let myVar;
   console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

//53.
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
   // Only change code below this line
   const outerWear = "sweater";
   // Only change code above this line
   return outerWear;
}

myOutfit();

//54.
// Setup
let sum = 0;

function addThree() {
   sum = sum + 3;
}

// Only change code below this line
function addFive() {
   sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();

//55.
// Setup
let processed = 0;

function processArg(num) {
   return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7)

//56.
function welcomeToBooleans() {
   // Only change code below this line

   return true; // Change this line

   // Only change code above this line
}

//56.
function trueOrFalse(wasThatTrue) {
   // Only change code below this line

   if (wasThatTrue) {
      return "Yes, that was true";
   }
   return "No, that was false";

   // Only change code above this line
}

//57.
// Setup
function testEqual(val) {
   if (val == 12) { // Change this line
      return "Equal";
   }
   return "Not Equal";
}

testEqual(10);

//58.
// Setup
function testStrict(val) {
   if (val === 7) { // Change this line
      return "Equal";
   }
   return "Not Equal";
}

testStrict(10);

//59.
// Setup
function compareEquality(a, b) {
   if (a === b) { // Change this line
      return "Equal";
   }
   return "Not Equal";
}

compareEquality(10, "10");

//60.
// Setup
function testNotEqual(val) {
   if (val != 99) { // Change this line
      return "Not Equal";
   }
   return "Equal";
}

testNotEqual(10);