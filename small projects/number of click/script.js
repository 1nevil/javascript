document.addEventListener("DOMContentLoaded", () => {
  const squres = document.querySelectorAll("#colorSqure");
  const colorClick = { red: 0, green: 0, blue: 0 };
  console.log(squres);
  squres.forEach((squre) => {
    squre.innerHTML = colorClick[squre.value];
    squre.addEventListener("click", () => {
      colorClick[squre.value]++;
      squre.innerHTML = colorClick[squre.value];
    });
  });
});
