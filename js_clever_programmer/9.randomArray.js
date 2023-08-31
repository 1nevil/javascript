// function randomArray(arr) {
//   let randomValue = Math.floor(Math.random() * arr.length);
//   console.log(arr[randomValue]);
// }

// arr = [11, 22, 33, 44];
// randomArray(arr);

const weather = (value) => {
  if (value == "rainy") {
    console.log(1);
  } else if (value == "sunny") {
    console.log(0);
  } else {
    console.log(-1);
  }
};
let value = "sunny";
weather(value);
