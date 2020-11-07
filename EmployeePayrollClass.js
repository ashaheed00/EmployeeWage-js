class EmployeePayroll {
  constructor(...params) {
    this.id = params[0];
    this.name = params[1];
    this.salary = params[2];
    this.gender = params[3];
    this.startDate = params[4];
  }

  get id() {
    return this._id;
  }
  set id(id) {
    if (parseInt(id) > 0) this._id = id;
    else throw "Given id format is incorrect";
  }
  get name() {
    return this._name;
  }
  set name(name) {
    const nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (nameRegex.test(name)) this._name = name;
    else throw "Given name is in wrong format";
  }
  get salary() {
    return this._salary;
  }
  set salary(salary) {
    if (salary > 0) this._salary = salary;
    else throw "Given salary is in wrong format";
  }
  get gender() {
    return this._gender;
  }
  set gender(gender) {
    let genderRegex = RegExp("M|F");
    if (genderRegex.test(gender) || gender == undefined) this._gender = gender;
    else throw "Given gender is in wrong format";
  }
  get startDate() {
    return this._startDate;
  }
  set startDate(startDate) {
    if (startDate <= new Date() || startDate == undefined)
      this._startDate = startDate;
    else throw "Given start date is in future";
  }

  toString() {
    const format = { year: "numeric", month: "long", day: "numeric" };
    const date =
      this.startDate === undefined
        ? "undefined"
        : this.startDate.toLocaleDateString("en-US", format);
    return `id:${this.id}, name:${this.name}, salary:${this.salary}, gender:${this.gender}, startDate:${date}`;
  }
}

let employeePayroll = new EmployeePayroll(1, "Kalyan", 1200000);
console.log(employeePayroll.toString());
try {
  employeePayroll.name = "rashmi";
  console.log(employeeData.toString());
} catch (e) {
  console.error(e);
}
try {
  employeePayroll.gender = "X";
} catch (e) {
  console.error(e);
}
console.log(employeePayroll.toString());

employeePayroll = new EmployeePayroll(1, "Sharad", 2000000, "M", new Date());
console.log(employeePayroll.toString());
try {
  employeePayroll.salary = -2000000;
} catch (e) {
  console.error(e);
}
try {
  employeePayroll.id = -100;
} catch (e) {
  console.error(e);
}
try {
  let d = new Date(Date.UTC(2022, 11, 20));
  employeePayroll.startDate = d;
} catch (e) {
  console.error(e);
}
console.log(employeePayroll.toString());
