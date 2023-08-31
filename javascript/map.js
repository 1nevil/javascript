document.title = "map in js";

const data = new Map([
  { name: "nevil", class: 1, division: "a" },
  { name: "jay", class: 1, division: "a" },
  { name: "krunal", class: 1, division: "a" },
  { name: "raj", class: 1, division: "b" },
  { name: "javal", class: 1, division: "c" },
  { name: "om", class: 1, division: "a" },
]);

data.forEach((key, value) => {
  console.log(key);
});
