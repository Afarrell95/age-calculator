//TO DO:
//validate input
//change input style on inncorect input

let button = document.querySelector(".circle");

button.addEventListener("click", (e) => {
  let dayInput = document.querySelector(".day-input").value;
  let monthInput = document.querySelector(".month-input").value;
  let yearInput = document.querySelector(".year-input").value;
  let yearDisplay = document.querySelector(".number-year");
  let monthDisplay = document.querySelector(".number-month");
  let dayDisplay = document.querySelector(".number-day");
  let reqDay = document.querySelector(".required_day");
  let reqMonth = document.querySelector(".required_month");
  let reqYear = document.querySelector(".required_year");
  let border = document.querySelector("input");
  let text = document.querySelector(".dmy"); 

  reqDay.style.display = '';
  reqMonth.style.display = '';
  reqYear.style.display = '';
  border.style.border= '';
  text.style.color = '';

  validate();

  let date = new Date();
  let currentD = date.getDate();
  let currentM = 1 + date.getMonth();
  let currentY = date.getFullYear();
  let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (dayInput > currentD) {
    currentD = currentD + month[currentM - 1];
    currentM = currentM - 1;
  }
  if (monthInput > currentM) {
    currentM = currentM + 12;
    currentY = currentY - 1;
  }
  let d = currentD - dayInput;
  let m = currentM - monthInput;
  let y = currentY - yearInput;

  yearDisplay.innerHTML = y;
  monthDisplay.innerHTML = m;
  dayDisplay.innerHTML = d;
});

function validate() {
  let dayInput = document.querySelector(".day-input").value;
  let monthInput = document.querySelector(".month-input").value;
  let yearInput = document.querySelector(".year-input").value;
  let reqDay = document.querySelector(".required_day");
  let reqMonth = document.querySelector(".required_month");
  let reqYear = document.querySelector(".required_year");
  let borders = document.getElementById("#inputs");
  let text = document.querySelectorAll(".dmy");
 
  if(dayInput === '' || monthInput === '' || yearInput === ''){
    reqDay.style.display = 'block';
    reqMonth.style.display = 'block';
    reqYear.style.display = 'block';
    borders.style.border= 'solid 1px red';
    text.style.color = 'red';
  }
}
