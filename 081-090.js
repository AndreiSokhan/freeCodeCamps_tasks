//81.
const myDog = {
   // Only change code below this line
   "name": "Boss",
   "legs": 4,
   "tails": 3,
   "friends": ["cat", "turtle"],
   // Only change code above this line
};

//82.
// Setup
const testObj = {
   "hat": "ballcap",
   "shirt": "jersey",
   "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat; // Change this line
const shirtValue = testObj.shirt; // Change this line

//83.
// Setup
const testObj = {
   "an entree": "hamburger",
   "my side": "veggies",
   "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"]; // Change this line
const drinkValue = testObj["the drink"]; // Change this line

//84.
// Setup
const testObj = {
   12: "Namath",
   16: "Montana",
   19: "Unitas"
};

// Only change code below this line
const playerNumber = 16; // Change this line
const player = testObj[playerNumber]; // Change this line

//85.
// Setup
const myDog = {
   "name": "Coder",
   "legs": 4,
   "tails": 1,
   "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog["name"] = "Happy Coder";
// myDog.name = "Happy Coder";

//86.
const myDog = {
   "name": "Happy Coder",
   "legs": 4,
   "tails": 1,
   "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "gav gav";

// myDog ["bark"] = "gav gav";

//87.
// Setup
const myDog = {
   "name": "Happy Coder",
   "legs": 4,
   "tails": 1,
   "friends": ["freeCodeCamp Campers"],
   "bark": "woof"
};

// Only change code below this line

delete myDog.tails;

//88.
// Setup
function phoneticLookup(val) {
   let result = "";

   // Only change code below this line


   let lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank",
   }
   result = lookup[val];
   // Only change code above this line
   return result;
}

phoneticLookup("charlie");

//89.
function checkObj(obj, checkProp) {
   // Only change code below this line
   if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
   } else {
      return "Not Found";
   }
   // Only change code above this line
}

//90.