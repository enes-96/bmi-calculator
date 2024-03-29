const genderMale = document.querySelector("#male");
const genderFemale = document.querySelector("#female");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const age = document.querySelector("#age");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

let UserGender = "";
let userSize = 170;
let userWeight = 74;
let UserAge = 22;

genderMale.addEventListener("click", () => {
  UserGender = "male";
  genderSelect();
});
genderFemale.addEventListener("click", () => {
  UserGender = "female";
  genderSelect();
});

function genderSelect() {
  if (UserGender == "male") {
    genderMale.classList.add("bg-rose-400");
    genderFemale.classList.remove("bg-rose-400");
  } else if (UserGender == "female") {
    genderMale.classList.remove("bg-rose-400");
    genderFemale.classList.add("bg-rose-400");
  } else {
  }
}
const heightSlider = document.querySelector("#height-slider");
heightSlider.addEventListener("input", () => {
  userSize = heightSlider.value;
  height.innerHTML = userSize;
});
const weightPlus = document.querySelector("#weight-plus");
weightPlus.style.cursor = "pointer";
weightPlus.addEventListener("click", () => {
  userWeight++;
  weight.innerHTML = userWeight;
});
const weightMinus = document.querySelector("#weight-minus");
weightMinus.style.cursor = "pointer";

weightMinus.addEventListener("click", () => {
  if (userWeight < 21) {
    return;
  }
  userWeight--;
  weight.innerHTML = userWeight;
});

const agePlus = document.querySelector("#age-plus");
agePlus.addEventListener("click", () => {
  UserAge++;
  age.innerHTML = UserAge;
  agePlus.style.cursor = "pointer";
});

const ageMinus = document.querySelector("#age-minus");
ageMinus.addEventListener("click", () => {
  if (UserAge < 2) {
    return;
  }
  UserAge--;
  age.innerHTML = UserAge;
});

const calcBtn = document.querySelector(".calc-btn");
calcBtn.addEventListener("click", () => {
  if (UserGender == "") {
    return alert("please select your sex");
  }
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");

  let bmi = [userWeight / userSize / userSize] * 10000;
  let roundedBMI = Math.floor(bmi * 10) / 10;
  const bmiResult = document.querySelector("#result");
  bmiResult.innerHTML = roundedBMI;
  const descriotionBmi = document.querySelector("#description");
  if (roundedBMI <= 18.5 && UserAge >= 16) {
    descriotionBmi.innerHTML = `You Are a UNDERWEIGHT ${UserGender.toUpperCase()}, You need to EAT MORE`;
  } else if (roundedBMI >= 18.5 && roundedBMI <= 24.9 && UserAge >= 16) {
    descriotionBmi.innerHTML = `You Are a HEALTHY ${UserGender.toUpperCase()}, KEEP EATING LIKE THIS`;
  } else if (roundedBMI >= 25 && roundedBMI <= 29.9 && UserAge >= 16) {
    descriotionBmi.innerHTML = `You Are a OVERWEIGHT ${UserGender.toUpperCase()}, You need to EAT LESS`;
  } else if (roundedBMI >= 30 && UserAge >= 16) {
    descriotionBmi.innerHTML =
      descriotionBmi.innerHTML = `You Are a OBESE ${UserGender.toUpperCase()}, You need a DOCTOR`;
  } else {
    bmiResult.innerHTML = "SORRY";
    descriotionBmi.innerHTML = `You are too young `;
  }
});

overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
});
