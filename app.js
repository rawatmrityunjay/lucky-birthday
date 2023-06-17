const date_of_birth = document.querySelector("#date_of_birth");
const lucky_number = document.querySelector("#lucky_number");
const check_button = document.querySelector(".check_button");
const result_message = document.querySelector(".result_message");

check_button.addEventListener("click", () => {
  const date = date_of_birth.value;
  const luckyNumber = lucky_number.value;

  if (luckyNumber > 0) {
    if (date && luckyNumber) {
      const dateSum = sumOfDate(date);
      isBirthdayLucky(dateSum, luckyNumber);
    } else {
      result_message.innerText = "Please fill both the fields";
      result_message.style.color = "red";
    }
  } else {
    result_message.innerText = "Lucky Number must be greater than 0";
    result_message.style.color = "red";
  }
});

function isBirthdayLucky(dateSum, luckyNumber) {
  if (dateSum % luckyNumber === 0) {
    result_message.innerText = "Your Birthday is Lucky 🎂";
  } else {
    result_message.innerText = "Your Birthday is not Lucky 🙁";
  }
}

function sumOfDate(date) {
  let sum = 0;
  date = date.replaceAll("-", "");
  for (let i = 0; i < date.length; i++) {
    sum = sum + Number(date[i]);
  }
  return sum;
}