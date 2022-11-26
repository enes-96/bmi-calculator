const genderMale = document.querySelector("#male");
const genderFemale = document.querySelector("#female");
const height = document.querySelector("#height");
const heightSlider = document.querySelector("#height-slider");
const weight = document.querySelector("#weight");
const weightPlus = document.querySelector("#weight-plus");
const weightMinus = document.querySelector("#weight-minus");
const age = document.querySelector("#age");
const agePlus = document.querySelector("#age-plus");
const ageMinus = document.querySelector("#age-minus");
const calcBtn = document.querySelector(".calc-btn");
const bmiResult = document.querySelector("#result");
const descriotionBmi = document.querySelector("#description");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

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
    console.log("you are male1");
    genderMale.classList.add("bg-rose-400");
    genderFemale.classList.remove("bg-rose-400");
  } else if (UserGender == "female") {
    console.log("you are female2");
    genderMale.classList.remove("bg-rose-400");
    genderFemale.classList.add("bg-rose-400");
  } else {
    console.log("select gender");
  }
}

heightSlider.addEventListener("input", () => {
  userSize = heightSlider.value;
  height.innerHTML = userSize;
});

weightPlus.addEventListener("click", () => {
  userWeight++;
  weight.innerHTML = userWeight;
});
weightMinus.addEventListener("click", () => {
  userWeight--;
  weight.innerHTML = userWeight;
});

agePlus.addEventListener("click", () => {
  UserAge++;
  age.innerHTML = UserAge;
});
ageMinus.addEventListener("click", () => {
  UserAge--;
  age.innerHTML = UserAge;
});

calcBtn.addEventListener("click", () => {
  if (UserGender == "") {
    return alert("please select your sex");
  }
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
  let bmi = [userWeight / userSize / userSize] * 10000;
  let roundedBMI = Math.floor(bmi * 10) / 10;
  bmiResult.innerHTML = roundedBMI;
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
