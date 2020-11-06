const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
const NO_OF_MONTHLY_WORKING_DAYS = 20;
const MAX_MONTHLY_WORKING_HRS = 160;

function getEmpHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HRS;
            break;
        case IS_FULL_TIME:
            return FULL_TIME_HRS;
            break;
        default:
            return 0;
    }
}

let empHours = 0;
let empCheck = 0;
let days = 0;
while (days <= NO_OF_MONTHLY_WORKING_DAYS && empHours <= MAX_MONTHLY_WORKING_HRS) {
    days++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHours += getEmpHours(empCheck);
}
empWage = WAGE_PER_HR * empHours;
console.log(
    "Employee Wage: $" + empWage + " and Total Working Hours: " + empHours + " hrs"
);
