//71.
function testSize(num) {
   // Only change code below this line
   if (num < 5) {
      return "Tiny"
   } else if (num < 10) {
      return "Small"
   } else if (num < 15) {
      return "Medium"
   } else if (num < 20) {
      return "Large"
   } else if (num >= 20) {
      return "Huge"
   }
   return "Change Me";
   // Only change code above this line
}
testSize(7);

//72.
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
   // Only change code below this line

   if (strokes === 1) {
      return "Hole-in-one!";
   } else if (strokes <= par - 2) {
      return "Eagle";
   } else if (strokes <= par - 1) {
      return "Birdie";
   } else if (strokes === par) {
      return "Par";
   } else if (strokes === par + 1) {
      return "Bogey";
   } else if (strokes === par + 2) {
      return "Double Bogey";
   } else if (strokes >= par + 3) {
      return "Go Home!";
   }
   return "Change Me";
}
// Only change code above this line
golfScore(5, 4);

//73.
function caseInSwitch(val) {
   let answer = "";
   // Only change code below this line

   switch (val) {
      case 1:
         answer = ("alpha");
         break;
      case 2:
         answer = ("beta");
         break;
      case 3:
         answer = ("gamma");
         break;
      case 4:
         answer = ("delta");
         break;
   }

   // Only change code above this line
   return answer;
}
caseInSwitch(1);

//74.
function switchOfStuff(val) {
   let answer = "";
   // Only change code below this line

   switch (val) {
      case "a":
         answer = ("apple");
         break;
      case "b":
         answer = ("bird");
         break;
      case "c":
         answer = ("cat");
         break;
      default:
         answer = ("stuff")
   }

   // Only change code above this line
   return answer;
}

switchOfStuff(1);

//75.
function sequentialSizes(val) {
   let answer = "";
   // Only change code below this line

   switch (val) {
      case 1:
      case 2:
      case 3:
         answer = ("Low");
         break;
      case 4:
      case 5:
      case 6:
         answer = ("Mid");
         break;
      case 7:
      case 8:
      case 9:
         answer = ("High");
         break;
   }

   // Only change code above this line
   return answer;
}

sequentialSizes(1);

//76.
function chainToSwitch(val) {
   let answer = "";
   // Only change code below this line

   switch (val) {
      case "bob":
         answer = "Marley";
         break;
      case 42:
         answer = "The Answer";
         break;
      case 1:
         answer = "There is no #1";
         break;
      case 99:
         answer = "Missed me by this much!";
         break;
      case 7:
         answer = "Ate Nine";
   }

   // Only change code above this line
   return answer;
}

chainToSwitch(7);

//77.
function isLess(a, b) {
   // Only change code below this line
   return a < b;
   // Only change code above this line
}

isLess(10, 15);

//78.
// Setup
function abTest(a, b) {
   // Only change code below this line
   if (a < 0 || b < 0) {
      return undefined;
   }
   // Only change code above this line

   return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);

//79.
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
var wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; // Change this line
// Only change code above this line

//80.
function nextInLine(arr, item) {
   // Only change code below this line
   arr.push(item);
   var removed = arr.shift();
   return removed;
   // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));