document.title = "set object";

var fruits = [
  "banana",
  "apple",
  "orange",
  "watermelon",
  "apple",
  "orange",
  "grape",
  "apple",
];
// First method:

//important = The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

// var uniqueFruits = Array.from(new Set(fruits)); // return in array
// console.log(new Set(fruits)); //return object
// console.log(uniqueFruits);

// returns [“banana”, “apple”, “orange”, “watermelon”, “grape”]

// Second method:

// var uniqueFruits2 = [...new Set(fruits)];
// console.log(uniqueFruits2);

// returns [“banana”, “apple”, “orange”, “watermelon”, “grape”]

const obj = [
  { name: "nevil", class: 1, division: "a" },
  { name: "jay", class: 1, division: "a" },
  { name: "krunal", class: 1, division: "a" },
  { name: "raj", class: 1, division: "b" },
  { name: "javal", class: 1, division: "c" },
  { name: "om", class: 1, division: "d" },
];

// const div = obj.map((ob) => {
//   return ob.division;
// });
// console.log(div); //its create new array

// console.log([...new Set(div)]);
// console.log(Array.from(new Set(div)));

const uniqDiv = [
  ...new Set(
    obj.map((ob) => {
      return ob.division;
    })
  ),
  "all", //its also add in array
];
console.log(uniqDiv);
["a", "b", "c", "d", "all"];
