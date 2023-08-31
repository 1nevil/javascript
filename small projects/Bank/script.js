document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button");
  const amount = document.getElementById("amount");
  const balance = document.getElementById("balance");
  const error = document.getElementById("error");

  class Bank {
    balance = 0;

    totBalance() {
      return this.balance;
    }

    deposite(money) {
      this.balance += money;
    }

    widhrow(money) {
      if (money > this.balance) {
        error.innerHTML = "Insufficiunt amount";
      } else {
        this.balance -= money;
      }
    }
  }

  const userAcc = new Bank();

  const calculation = (transaction) => {
    if (transaction == "deposit") {
      let money = Number(amount.value);
      userAcc.deposite(money);
      balance.innerHTML = `total balance ${userAcc.totBalance()}`;
    } else if (transaction == "Widhrow") {
      let money = Number(amount.value);
      userAcc.widhrow(money);
      balance.innerHTML = `total balance ${userAcc.totBalance()}`;
    }
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      error.innerHTML = "";
      calculation(button.value);
    });
  });
  // console.log(
  //   "🚀 ~ file: 10.class.js:100 ~ userAcc.deposite(100)",
  //   userAcc.deposite(100)
  // );
  // console.log(userAcc.balance);
  // console.log(userAcc.widhrow(100));
  // console.log(userAcc.widhrow(100));
});
