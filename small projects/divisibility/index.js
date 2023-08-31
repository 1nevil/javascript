document.addEventListener("DOMContentLoaded", () => {
  var result = document.querySelector("#result");

  document.querySelector("button").onclick = () => {
    var textbox = document.querySelector("#number");
    var value = textbox.value;
    var no = Number(value);
    result.style.color = "black";

    var incrSix = 0;
    var inctwe = 0;
    var incfotee = 0;
    var incfiftee = 0;
    var incsixtee = 0;
    var inceightee = 0;
    var twenty = 0;
    patt = /[0-9]+/;
    var lastNumber = value.charAt(value.length - 1);
    if (patt.test(no)) {
      //divisible by 2
      if (Number(lastNumber) % 2 == 0) {
        result.innerHTML = `<li>${no} is divisible by 2 </li>`;
        incrSix++;
        incfotee++;
        incsixtee++;
        inceightee++;
      } else {
        result.innerHTML = "";
      }

      //divisible by 3
      var sum = 0;
      for (i = 0; i < value.length; i++) {
        sum = sum + Number(value.charAt(i));
      }
      if (sum % 3 == 0) {
        result.innerHTML += `<li> ${no}  is divisible by 3</li>`;
        incrSix++;
        inctwe++;
        incfiftee++;
      }

      //divisible by 4
      var lstTwoDigit = value.substring(value.length - 2, value.length);
      if (Number(lstTwoDigit) % 4 == 0) {
        result.innerHTML += ` <li> ${no}  is divisible by 4</li>`;
        inctwe++;
        twenty++;
      }

      //divisibale by 5
      if (lastNumber == "0" || lastNumber == "5") {
        result.innerHTML += ` <li> ${no}  is divisible by 5</li>`;
        incfiftee++;
        twenty++;
      }

      //divsible by six
      if (incrSix === 2) {
        result.innerHTML += ` <li> ${no}  is divisible by 6</li>`;
      }

      //divisible by 7
      var twice = Number(lastNumber) * 2;
      var digits = Number(value.substring(0, value.length - 1));
      // console.log(digits);
      var dbtseven = digits - twice;
      if (dbtseven % 7 == 0) {
        result.innerHTML += ` <li> ${no}  is divisible by 7</li>`;
        incfotee++;
      }

      //divisibility 8
      var lthreedigit = value.substring(value.length - 3, value.length);
      if (lthreedigit % 8 == 0) {
        result.innerHTML += ` <li> ${no}  is divisible by 8</li>`;
        incsixtee++;
      }

      //divisibility by 9
      if (sum % 9 == 0) {
        result.innerHTML += ` <li> ${no}  is divisible by 9</li>`;
        inceightee++;
      }

      //divisibility by 10
      if (lastNumber === "0") {
        result.innerHTML += ` <li> ${no}  is divisible by 10</li>`;
      }

      //divisible by 11
      var ans = digits - lastNumber;
      // console.log(digits);
      // console.log(lastNumber);
      // console.log(ans);
      if (ans % 11 == 0) {
        result.innerHTML += ` <li> ${no}  is divisible by 11</li>`;
      }

      //divisible by 12
      if (inctwe === 2) {
        result.innerHTML += ` <li> ${no}  is divisible by 12</li>`;
      }

      //divisible by 13
      var ans2 = Number(lastNumber) * 9 - digits;
      if (ans2 % 13 == 0) {
        result.innerHTML += ` <li> ${no}  is divisible by 13</li>`;
      }

      //divisible by 14
      if (incfotee === 2) {
        result.innerHTML += ` <li> ${no}  is divisible by 14</li>`;
      }

      //divisible by 15
      if (incfiftee === 2) {
        result.innerHTML += ` <li> ${no}  is divisible by 15</li>`;
      }

      //divisible by 16
      if (incsixtee === 2) {
        result.innerHTML += ` <li> ${no}  is divisible by 16</li>`;
      }

      //divisible by 17
      var ans3 = digits - Number(lastNumber) * 5;
      if (ans3 % 17 == 0) {
        result.innerHTML += ` <li> ${no}  is divisible by 17</li>`;
      }

      //divisible by 18
      if (inceightee === 2) {
        result.innerHTML += `<li> ${no}  is divisible by 18</li>`;
      }

      //divisible by 19
      var ans4 = digits + twice;
      if (ans4 % 19 == 0) {
        result.innerHTML += `<li> ${no}  is divisible by 19</li>`;
      }

      //divisible by 20
      if (twenty == 2) {
        result.innerHTML += `<li> ${no}  is divisible by 20</li>`;
      }
    } else {
      result.innerHTML = "Enter only number";
      result.style.color = "red";
      textbox.value = "";
      textbox.focus();
    }
  };
});
