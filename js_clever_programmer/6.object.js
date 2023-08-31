// data store in key value pair

const actor = {
  name: "hritik roshan",
  shirt: "white",
  assets: 100000,
  liabilities: 50000,
  netWorth: function () {
    return this.assets - this.liabilities;
  },
};

//dot notiton
// console.log(actor.name);
// console.log(actor.shirt);

//bracket notation
// console.log(actor["name"]);
// console.log(actor["shirt"]);

// actor.age = 29;
// console.log(actor);

actor["industry"] = "bollywood";
console.log(actor["industry"]);

actor.pants = "gray";
console.log(actor.pants);
// console.log("networts " + actor.netWorth());

// get actor keys
// object.keys(actor);

//get actor value
//Object.values(actor)
