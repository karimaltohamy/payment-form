const inputNumber = document.querySelector(".input_number input");
const inputUser = document.querySelector(".input_user");
const selectUser = document.getElementById("select_user");
const btnCheck = document.querySelector(".btn_check");
const btnPay = document.querySelector(".btn_pay");
const moreDetailsSection = document.querySelector(".more_details");
const inputsRadioType = document.querySelectorAll(".input_radio_type");
const inputsRadioMethod = document.querySelectorAll(".input_radio_method");
const inputCharge = document.querySelector(".input_charge input");
const inputCash = document.querySelector(".input_cash");

// check number
btnCheck.addEventListener("click", (e) => {
  e.preventDefault();

  if (inputNumber.value > 10) {
    inputUser.classList.add("active");
    btnCheck.classList.add("remove");
  }
});

// select user
selectUser.addEventListener("change", (e) => {
  moreDetailsSection.classList.add("active");
});

// inputsRadioType
inputsRadioType.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.getAttribute("data-type") === "renewal") {
      inputCharge.value = 150;
      console.log(true);
    }
  });
});

// input_radio_method
inputsRadioMethod.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.getAttribute("data-method") === "visa") {
      btnPay.classList.add("active");
    } else if (radio.getAttribute("data-method") === "cash") {
      btnPay.classList.add("active");
      inputCash.classList.add("active");
    }
  });
});
