const data = require("./data");

// document.addEventListener("DOMContentLoaded", function () {
//   const span = document.getElementById("content");
//   const input = document.getElementById("textInput");
//   input.addEventListener("input", (e) => {
//     span.innerText = parseFloat(e.target.value) * 2;
//   });
// });

const result = data
  .filter(({ gender }) => gender === "Male")
  .map(({ first_name, last_name, ...rest }) => ({
    first_name,
    last_name,
    ...rest,
    full_name: `${first_name} ${last_name}`,
  }));

console.log(result);
