const themeToggle = document.querySelector("#theme-toggle");
const calc = document.querySelector(".calc");

themeToggle.addEventListener("click", () => {
  calc.classList.toggle("dark-theme");
  calc.classList.toggle("light-theme");
});

let result = document.getElementById("inputext");

let calculate = (number) => {
  result.value += number;
};

let Result = () => {
  try {
    result.value = eval(result.value);
  } catch (err) {
    alert("Enter the valid input");
  }
};

function clr() {
  result.value = " ";
}

function DEL() {
  result.value = result.value.slice(0, -1);
}

