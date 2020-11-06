const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
const NUMBER_OF_WORKING_DAYS = 20;

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
for (let i = 0; i < NUMBER_OF_WORKING_DAYS; i++) {
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHours += getEmpHours(empCheck);
}
empWage = WAGE_PER_HR * empHours;
console.log(
    "Employee Wage: $" + empWage + " and Total Working Hours: " + empHours + " hrs"
);
