const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;

let empHours = 0;
let workTime = Math.floor(Math.random() * 10) % 3;
switch (workTime) {
    case IS_PART_TIME:
        empHours = PART_TIME_HRS;
        break;
    case IS_FULL_TIME:
        empHours = FULL_TIME_HRS;
        break;
    default:
        empHours=0;
}

let empWage = empHours * WAGE_PER_HR;
console.log("Employee Wage: $"+empWage);
