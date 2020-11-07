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
    this._id = id;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    const nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (nameRegex.test(name)) this._name = name;
    else throw "Given name format is incorrect";
  }
  get salary() {
    return this._salary;
  }
  set salary(salary) {
    this._salary = salary;
  }
  get gender() {
    return this._gender;
  }
  set gender(gender) {
    this._gender = gender;
  }
  get startDate() {
    return this._startDate;
  }
  set startDate(startDate) {
    this._startDate = startDate;
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
employeePayroll.gender = "F";
console.log(employeePayroll.toString());

employeePayroll = new EmployeePayroll(1, "Sharad", 2000000, "M", new Date());
console.log(employeePayroll.toString());
