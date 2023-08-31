setTimeout(() => {
  console.log("Heeloo from the settimeOut");
}, 3000);

setInterval(() => {
  console.log("hi");
}, 4000);

function a() {
  function b() {
    function c() {
      function d() {
        function e() {
          function f() {
            a = 10;
            c = 10;
          }
        }
      }
    }
  }
}
