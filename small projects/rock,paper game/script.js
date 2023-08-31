document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button");
  const userChoise = document.getElementById("userChoise");
  const computerChoise = document.getElementById("computerChoise");
  const result = document.getElementById("result");
  const clear = document.getElementById("clear");

  let botChoise = "";
  let yourChoise = "";

  const randomSelection = () => {
    const array = ["rock", "paper", "sijar"];
    n = Math.floor(Math.random() * 3);
    return array[n];
  };

  const score = (yourChoise, botChoise) => {
    if (
      (yourChoise == "rock" && botChoise == "paper") ||
      (yourChoise == "paper" && botChoise == "sijar") ||
      (yourChoise == "sijar" && botChoise == "rock")
    ) {
      return "🤖 Win";
    } else if (
      (yourChoise == "rock" && botChoise == "rock") ||
      (yourChoise == "paper" && botChoise == "paper") ||
      (yourChoise == "sijar" && botChoise == "sijar")
    ) {
      return "draw match";
    } else {
      return "👤 win";
    }
  };

  const clearText = () => {
    userChoise.innerHTML = "";
    computerChoise.innerHTML = "";
    result.innerHTML = "";
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      yourChoise = button.value;
      botChoise = randomSelection();
      userChoise.innerHTML = "👤 " + yourChoise;
      computerChoise.innerHTML = "🤖 " + botChoise;
      result.innerHTML = score(yourChoise, botChoise);
    });
  });

  clear.addEventListener("click", () => {
    clearText();
  });
  // let n = 0;

  // div1.addEventListener("click", () => {
  //my choise -> rock
  //   userChoise.innerHTML = "Rock";
  //computer choise -> paper

  //   if (n == 2) {
  //     result.innerHTML = "computer Win";
  //   } else if (n == 1) {
  //     result.innerHTML = "draw match";
  //   } else {
  //     result.innerHTML = "You win the match";
  //   }
  //rock 1 ->paper 2-> 2 ->w c
  //rock 1-> sijar 3= -1->w u
  //rock 1 -> rock 1= 1 ->draw
  //result -1 1 2  -> -1 lose ,1 ->draw ,2 win
  // });
  // div2.addEventListener("click", () => {
  //   console.log(n);
  // });
  // div3.addEventListener("click", () => {
  //   console.log(n);
  // });
});
