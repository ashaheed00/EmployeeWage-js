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

function calculateDailyWage(empHours) {
  return empHours * WAGE_PER_HR;
}

let totalEmpHours = 0;
let empCheck = 0;
let days = 0;
let dailyWage = 0;
let empDailyWageArray = new Array();
let empDailyWageMap = new Map();
let empDailyHourMap = new Map();

while (
  days < NO_OF_MONTHLY_WORKING_DAYS &&
  totalEmpHours < MAX_MONTHLY_WORKING_HRS
) {
  days++;
  empCheck = Math.floor(Math.random() * 10) % 3;
  totalEmpHours += getEmpHours(empCheck);
  dailyWage = calculateDailyWage(getEmpHours(empCheck));
  empDailyWageArray.push(dailyWage);
  empDailyWageMap.set(days, dailyWage);
  empDailyHourMap.set(days, getEmpHours(empCheck));
}

console.log("****UC6****");
let totalWage = calculateDailyWage(totalEmpHours);
console.log("Daily Working Hours: " + empDailyWageArray);
console.log(
  "Employee Wage: $" +
    totalWage +
    " and Total Working Hours: " +
    totalEmpHours +
    " hrs" +
    "Total Working Days: " +
    days
);

//UC 7a
console.log("****UC7****");
totalWage = 0;
function addWage(dailyWage) {
  totalWage += dailyWage;
}
empDailyWageArray.forEach(addWage);
console.log("Using forEach >> Total Employee Wage: $" + totalWage);

function addWages(totalWages, dailyWage) {
  return dailyWage + totalWages;
}
totalWage = empDailyWageArray.reduce(addWages, 0);
console.log("Using Reduce >> Total Employee Wage: $" + totalWage);

// UC 7b
let dayCount = 0;
function showDayWithWage(wage) {
  dayCount++;
  return "Day " + dayCount + " => $" + wage;
}
let daysWithWage = empDailyWageArray.map(showDayWithWage);
console.log("\nEach Day with their daily wage:\n" + daysWithWage);

// UC 7c
function getDayWithFullTime(wage) {
  return wage.includes("160");
}
let daysWithFullTime = daysWithWage.filter(getDayWithFullTime);
console.log("\nDays with daily wage as $160:\n" + daysWithFullTime);

//UC 7d
let firstDayFullTime = daysWithFullTime.find(getDayWithFullTime);
console.log("First Occurance of Full Time Wage: " + firstDayFullTime);

//UC 7e
console.log(
  "\nAll Elements of Full Time List are Truly Full Time? >> " +
    daysWithFullTime.every(getDayWithFullTime)
);

//UC 7f
function checkPartTime(wage) {
  return wage.includes("80");
}
console.log("Are there any Part Time? >> " + daysWithWage.some(checkPartTime));

//UC 7g
function totalDaysWorked(totalDays, dailyWage) {
  if (dailyWage > 0) totalDays++;
  return totalDays;
}
let daysTotal = empDailyWageArray.reduce(totalDaysWorked, 0);
console.log("\nTotal Days Actually Worked: " + daysTotal);

// UC8
console.log("****UC8****");
console.log(empDailyWageMap);
totalWage = Array.from(empDailyWageMap.values()).reduce(addWages, 0);
console.log("\nTotal Wage Using Daily Wage Map: " + totalWage);

// UC9
console.log("****UC9****");
const findTotal = (totalValue, dailyValue) => {
  return totalValue + dailyValue;
};

let totalHours = Array.from(empDailyHourMap.values()).reduce(findTotal, 0);
let totalWageinMap = empDailyWageArray
  .filter((dailyWage) => dailyWage > 0)
  .reduce(findTotal, 0);
console.log("Total Wage = " + totalWageinMap + " Total Hrs = " + totalHours);

let fullTimeWorkDays = new Array();
let partTimeWorkDays = new Array();
let nonWorkDays = new Array();

function storeInWorkHourArray(value, key, empDailyHourMap) {
  if (value == 0) nonWorkDays.push(key);
  else if (value == 4) partTimeWorkDays.push(key);
  else fullTimeWorkDays.push(key);
}
empDailyHourMap.forEach(storeInWorkHourArray);

console.log("Full Time Work Days: " + fullTimeWorkDays);
console.log("Part Time Work Days: " + partTimeWorkDays);
console.log("No Work Days: " + nonWorkDays);

// UC10
console.log("\n****UC10****");
let empDailyWageArrayObject = new Array();
days = 0;
totalEmpHrs = 0;
while (
  days < NO_OF_MONTHLY_WORKING_DAYS &&
  totalEmpHrs < MAX_MONTHLY_WORKING_HRS
) {
  empCheck = Math.floor(Math.random() * 10) % 3;
  let empHours = getEmpHours(empCheck);
  totalEmpHrs += empHours;
  empDailyWageArrayObject.push({
    day: ++days,
    dailyHours: empHours,
    dailyWage: calculateDailyWage(empHours),
    toString() {
      return (
        "\nDay" +
        this.day +
        " => Working Hours = " +
        this.dailyHours +
        " Daily Wage = " +
        this.dailyWage
      );
    },
  });
}
console.log("Emp Wage Object Array: " + empDailyWageArrayObject);

// UC 10a
let totalwage = empDailyWageArrayObject
  .filter((emp) => emp.dailyHours > 0)
  .reduce((totalWage, emp) => (totalWage += emp.dailyWage), 0);
console.log("\nUC10a - Total wage using arrow functions : " + totalwage);

totalHours = empDailyWageArrayObject
  .filter((emp) => emp.dailyHours > 0)
  .reduce((totalHrs, emp) => (totalHrs += emp.dailyHours), 0);
console.log("UC10a - Total hours using arrow functions : " + totalHours);

// UC10b
fullTimeWorkDays = empDailyWageArrayObject
  .filter((emp) => emp.dailyHours == 8)
  .map((emp) => emp.day);
console.log("\nUC10b - Full Working days : " + fullTimeWorkDays);

// UC10c
partTimeWorkDays = empDailyWageArrayObject
  .filter((emp) => emp.dailyHours == 4)
  .map((emp) => emp.day);
console.log("\nUC10c - Part Working days : " + partTimeWorkDays);

// UC10d

nonWorkDays = empDailyWageArrayObject
  .filter((emp) => emp.dailyHours == 0)
  .map((emp) => emp.day);
console.log("\nUC10d - Non Working days : " + nonWorkDays);
