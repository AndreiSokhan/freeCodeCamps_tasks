//91.
const myStorage = {
   "car": {
      "inside": {
         "glove box": "maps",
         "passenger seat": "crumbs"
      },
      "outside": {
         "trunk": "jack"
      }
   }
};

//92.
const myPlants = [{
   type: "flowers",
   list: [
      "rose",
      "tulip",
      "dandelion"
   ]
},
   {
      type: "trees",
      list: [
         "fir",
         "pine",
         "birch"
      ]
   }
];
const secondTree = myPlants[1].list[1];

//93.
// Setup
const myArray = [];
let i = 5;

while (i >= 0) {
   myArray.push(i);
   i--;
}

//94.
// Setup
const myArray = [];

for (let i = 1; i <= 5; i++) {
   myArray.push(i);
}

//95.
// Setup
const myArray = [];

for (let i = 1; i <= 9; i += 2) {
   myArray.push(i);
}

//96.
// Setup
const myArray = [];

for (let i = 9; i > 0; i -= 2) {
   myArray.push(i);
}

//97.
// Setup
const myArr = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < myArr.length; i++) {
   total += myArr[i];
}

//98.
function multiplyAll(arr) {
   let product = 1;
   // Only change code below this line
   for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
         product *= arr[i][j];
      }
   }
   // Only change code above this line
   return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

//99.
// Setup
const myArray = [];
let i = 10;
// Only change code below this line
do {
   myArray.push(i);
   i++;
} while (i < 10);

//100.
function sum(arr, n) {
   // Only change code below this line
   if (n <= 0) {
      return 0;
   } else {
      return sum(arr, n - 1) + arr[n - 1];
   }
   // Only change code above this line
}
