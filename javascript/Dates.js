document.title = "dates";

// const d1 = new Date();
// const year = d1.getFullYear();
// var month = d1.getMonth() + 1;
// const date = d1.getDate();
// console.log(d1);

// console.log("Date " + date + "/" + month + "/" + year);

setInterval(() => {
  const d2 = new Date();
  let hr = d2.getHours() - 12;

  let min = d2.getMinutes();
  let sec = d2.getSeconds();
  var shift = "";
  if (d2.getHours() >= 12 && d2.getHours() <= 24) {
    shift = "PM";
  } else {
    shift = "AM";
  }

  console.log("Time " + hr + ":" + min + ":" + sec + " " + shift);
}, 1000);
