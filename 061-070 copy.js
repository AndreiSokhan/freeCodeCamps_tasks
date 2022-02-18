//61.
// Setup
function testStrictNotEqual(val) {
   if (val !== 17) { // Change this line
      return "Not Equal";
   }
   return "Equal";
}

testStrictNotEqual(10);

// 62.
function testGreaterThan(val) {
   if (val > 100) { // Change this line
      return "Over 100";
   }

   if (val > 10) { // Change this line
      return "Over 10";
   }

   return "10 or Under";
}

testGreaterThan(10);

// 63.
function testGreaterOrEqual(val) {
   if (val >= 20) { // Change this line
      return "20 or Over";
   }

   if (val >= 10) { // Change this line
      return "10 or Over";
   }

   return "Less than 10";
}

testGreaterOrEqual(10);

// 64.
function testLessThan(val) {
   if (val < 25) { // Change this line
      return "Under 25";
   }

   if (val < 55) { // Change this line
      return "Under 55";
   }

   return "55 or Over";
}

testLessThan(10);

// 65.function testLessOrEqual(val) {
if (val <= 12) { // Change this line
   return "Smaller Than or Equal to 12";
}

if (val <= 24) { // Change this line
   return "Smaller Than or Equal to 24";
}

return "More Than 24";
}

testLessOrEqual(10);

//66.
function testLogicalAnd(val) {
   // Only change code below this line

   if (val <= 50 && val >= 25) {
      return "Yes";
   }

   // Only change code above this line
   return "No";
}
testLogicalAnd(10);

// 67.
function testLogicalOr(val) {
   // Only change code below this line

   if (val < 10 || val > 20) {
      return "Outside";
   }

   // Only change code above this line
   return "Inside";
}

testLogicalOr(15);

// 68.
function testElse(val) {
   let result = "";
   // Only change code below this line

   if (val > 5) {
      result = "Bigger than 5";
   } else {
      result = "5 or Smaller";
   }

   // Only change code above this line
   return result;
}

testElse(4);

// 69.
function testElseIf(val) {
   if (val > 10) {
      return "Greater than 10";
   } else if (val < 5) {
      return "Smaller than 5";
   } else {
      return "Between 5 and 10";
   }
}
testElseIf(7);

//70.
function orderMyLogic(val) {
   if (val < 5) {
      return "Less than 5";
   } else if (val < 10) {
      return "Less than 10";
   } else {
      return "Greater than or equal to 10";
   }
}

orderMyLogic(7);