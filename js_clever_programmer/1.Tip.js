document.title = "Prompt";

food = prompt("Enter the amount of food");
inputTip = prompt("Enter the amount of %?");
tip = food * (inputTip / 100);

price = Number(food) + Number(tip);
console.log("total price  " + price);
