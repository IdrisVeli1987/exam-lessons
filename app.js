let numbers = [1, 4, 7, 8, 3, 5, 0, 2, 4, 6, 12, 15, 18, 46, 45, 48, 97, 84];
let cut = 0;
let tek = 0;

const { default: axios } = require("axios");

const { default: axios } = require("axios");

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    cut++;
  } else {
    tek++;
  }
}

console.log("cut " + cut);
console.log("tek " + tek);

const rootEl = document.getElementById("root");
const url = "https://catfact.ninja/fact";

axios.get(url).then(({ data }) => {
  console.log(data.fact);
  console.log(data.length);
});