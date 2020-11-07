class EmployeePayroll {
  constructor(...params) {
    this.id = params[0];
    this.name = params[1];
    this.salary = params[2];
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
    this._name = name;
  }
  get salary() {
    return this._salary;
  }
  set salary(salary) {
    this._salary = salary;
  }
  toString() {
    return (
      "id: " + this.id + ", name: " + this.name + ", salary: " + this.salary
    );
  }
}

let employeePayroll = new EmployeePayroll(1, "Kalyan", 1200000);
console.log(employeePayroll.toString());
employeePayroll.name = "Rashmi";
console.log(employeePayroll.toString());
