//TO DO:
//get calcuateAge to work properly
//validate input
//change input style on inncorect input
//make mobile responsive

let button = document.querySelector(".circle");


button.addEventListener("click", (e)=>{
    let dayInput = document.querySelector(".day-input").value;
    let monthInput = document.querySelector(".month-input").value;
    let yearInput = document.querySelector(".year-input").value;
    let yearDisplay = document.querySelector(".number-year");
    let monthDisplay = document.querySelector(".number-month");
    let dayDisplay = document.querySelector(".number-day");

    let date = new Date();
    let currentD = date.getDate();
    let currentM = 1 + date.getMonth();
    let currentY = date.getFullYear();
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    if(dayInput > currentD){
        currentD = currentD + month[currentM - 1];
        currentM = currentM - 1;
    }
    if(monthInput > currentM){
        currentM = currentM + 12;
        currentY = currentY - 1;
    }
    let d = currentD - dayInput;
    let m = currentM - monthInput;
    let y = currentY - yearInput;
    
    yearDisplay.innerHTML = y;
    monthDisplay.innerHTML = m;
    dayDisplay.innerHTML = d;

    console.log(dayInput);
console.log(monthInput);
console.log(yearInput)
})