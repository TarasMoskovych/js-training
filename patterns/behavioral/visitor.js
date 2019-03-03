class Employee {
    constructor(name, salary, vacation) {
        this._name = name;
        this._salary = salary;
        this._vacation = vacation;
    }

    accept(visitor) {
        visitor.visit(this);
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

    get vacation() {
        return this._vacation;
    }

    set vacation(vacation) {
        this._vacation = vacation;
    }
}

class ExtraSalary {
    visit(employee) {
        const salary = employee.salary;
        employee.salary = Math.round(salary * 1.1);
    }
}

class ExtraVacation {
    visit(employee) {
        const vacation = employee.vacation;
        employee.vacation = vacation + 2;
    }
}

const employees = [
    new Employee('John', 100, 10),
    new Employee('Mary', 200, 21),
    new Employee('Charlie', 250, 51)
];

const visitorSalary = new ExtraSalary();
const visitorVacation = new ExtraVacation();

for (const employee of employees) {
    console.log(employee);
}

console.log('\n');

for (const employee of employees) {
    employee.accept(visitorSalary);
    employee.accept(visitorVacation);
    console.log(employee);
}
