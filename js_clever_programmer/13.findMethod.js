const arr = [1, 2, 3, 4, 5, 6];
const userData = 212;

const result = arr.find((ele) => {
  return ele === userData;
});

console.log(result);

if (result) {
  console.log("true");
} else {
  console.log("false");
}
//return first element if data in the array ,  In condition result true
// return undefinded when not found ,In condition result false
