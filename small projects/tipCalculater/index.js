document.addEventListener("DOMContentLoaded", () => {
  txtAmount = document.getElementById("txtAmount");
  txtTip = document.getElementById("txtTip");

  disBill = document.getElementById("bill");
  btnAdd = document.getElementById("btnAdd");
  btnMin = document.getElementById("btnMin");
  person = document.getElementById("person");
  perPerson = document.getElementById("perPerson");
  err = document.getElementById("errorMsg");

  let n = 1;
  let totalBill = 1;

  function calculateBill() {
    amount = Number(txtAmount.value);
    perBil = Math.ceil(amount * (txtTip.value / 100));
    totalBill = amount + perBil;
    disBill.innerHTML = "Your total bill is " + totalBill;
  }

  txtAmount.addEventListener("keyup", () => {
    if (txtTip.value == 0) {
      disBill.innerHTML = txtAmount.value;
    } else {
      calculateBill();
    }
  });

  txtTip.addEventListener("keyup", () => {
    calculateBill();
  });
  btnAdd.addEventListener("click", () => {
    if (txtAmount.value == 0) {
      err.innerHTML = "Enter your total Bill";
    } else {
      let value = 0;
      n++;
      person.innerHTML = n;
      value = Math.ceil(totalBill / n);
      perPerson.innerHTML = `After divided by ${n} of person ${value}`;
    }
    if (n >= 1) {
      btnMin.disabled = false;
    }
  });
  btnMin.addEventListener("click", () => {
    if (txtAmount.value == 0) {
      err.innerHTML = "Enter your total Bill";
    } else if (n == 1) {
      btnMin.disabled = true;
    } else {
      let value = 0;
      n--;
      person.innerHTML = n;
      value = Math.ceil(totalBill / n);
      perPerson.innerHTML = `After divided by ${n} of person ${value}`;
    }
  });
});
