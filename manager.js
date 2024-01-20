const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, salary, title, manager = null) {

        super(name, salary, title, manager);
        this.employees = [];

    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    calculateBonus(multiplier) {
        
        this.bonus = (this.salary + this._totalSubSalary()) * multiplier;
        return this.bonus
    }

    _totalSubSalary() {
        let bonusCalc = 0;


        for (const chump of this.employees) {
            if (chump instanceof Manager) {
                bonusCalc += chump.salary + chump._totalSubSalary();
            }
            else if (chump instanceof Employee) {
                bonusCalc += chump.salary;
            }
        }
        return bonusCalc;
    }

}

module.exports = Manager;


