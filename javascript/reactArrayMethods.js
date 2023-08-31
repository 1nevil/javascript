const persons = [
  { id: 1, name: "raj", age: 80 },
  { id: 2, name: "nevil", age: 12 },
  { id: 3, name: "jay", age: 22 },
  { id: 4, name: "umang", age: 34 },
  { id: 5, name: "kaivan", age: 45 },
  { id: 6, name: "keval", age: 67 },
  { id: 7, name: "om", age: 78 },
  { id: 8, name: "harsh", age: 89 },
  { id: 9, name: "lay", age: 90 },
];

//temparay remove for that persons
// const removeByName = (name) => {
//   const filtered = persons.filter((ele) => {
//     return ele.name != name;
//   });
//   return filtered;
// };

// name = "lay";
// const newArray = removeByName(name);
// console.log(newArray);

//update using map
// const updatepersons = (id, newAge) => {
//   const changed = persons.map((ele) => {
//     if (ele.id === id) {
//       return { id: ele.id, name: ele.name, age: newAge };
//     } else {
//       return ele;
//     }
//   });
//   return changed;
// };
// id = 3;
// age = 40;
// const newArray = updatepersons(id, age);
// console.log(newArray);

str = "jappaj";

for (i = 0; i < strArray.length; i++) {
  console.log(strArray.charAt(i));
  //   console.log(str.charAt());
  //   console.log(str.charAt(stri));
}
