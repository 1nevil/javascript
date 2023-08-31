//higher order map -> because is takes argument as a function

// map -> loop and return array -> + menupulate
// reduce
// filter -> loop and return array -> filter array matching condition

//
//Double the number
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//implicit return ->
// const implicit = arr.map((ele) => ele * 2);
// console.log(implicit);

// const double = arr.map((ele) => {
//   return ele * 2;
// });

// console.log(double);

const filter = (arr, greaterno) => {
  let result = [];
  for (const ele of arr) {
    if (ele > greaterno) {
      result.push(ele);
    }
  }
  return result;
};

// console.log(filter(arr, 3));

// const data = arr.filter((ele) => ele < 3 || ele > 5); //1,2,6,7,8,9,10
// console.log(data);
// const data2 = arr.filter((ele) => ele < 3 && ele > 5); // not return anything
// console.log(data2);

const actors = [
  {
    name: "Catherine Missal",
    rating: 100,
  },
  {
    name: "Monica Bellucci",
    rating: 200,
  },
  {
    name: "Michael Doven",
    rating: 500,
  },
  {
    name: "Jasmine Reate",
    rating: 230,
  },
  {
    name: "Tom Cruise",
    rating: 1000,
  },
  {
    name: "Scarlett Johansson",
    rating: 800,
  },
  {
    name: "Anna Raadsveld",
    rating: 900,
  },
  {
    name: "Jason Statham",
    rating: 100,
  },
  {
    name: "Emilia Clarke",
    rating: 90,
  },
  {
    name: "Wentworth Miller",
    rating: 800,
  },
];
// const famousActors = actors.filter((actor) => actor.rating > 500);

// console.log(famousActors);

// const ratingSum = arr.reduce((prev, curr) => prev + curr);
const ratingSum = arr.reduce((prev, curr) => prev * curr);

// const ratingSum = actors.reduce((sum, ele) => sum + ele.rating, 0); //0 is initalvalue of sum
console.log(ratingSum);
