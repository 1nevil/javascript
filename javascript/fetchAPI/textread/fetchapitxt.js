//simple
/*
display = () => {
  fetch("data.txt")
    .then((resolve) => {
      if (!resolve.ok) {
        throw Error(res.statusText);
      }
      //   console.log(resolve);
      return resolve.text();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("header").innerText = data;
    })
    .catch((error) => {
      console.log(error);
    });
};
*/

//fetch API Async await
async function display() {
  try {
    const res = await fetch("data.txt");
    if (!res.ok) {
      throw Error(res.statusText);
    }
    console.log(res);
    const data = await res.text();
    document.getElementById("header").innerText = data;
  } catch (err) {
    console.log(err);
  }
}
