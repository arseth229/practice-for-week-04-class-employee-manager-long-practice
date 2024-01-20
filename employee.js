class Employee {
    constructor(name, salary, title, manager = null) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager;

        if (manager) {
            manager.addEmployee(this);
        }
    }

    calculateBonus(multiplier) {
        
        this.bonus = (this.salary) * multiplier
        return this.bonus;

    }
    
}

const raph = new Employee('Raphael', 90000, 'Ninja');
const donny = new Employee('Donatello', 85000, 'Grasshopper');

console.log(raph.calculateBonus(0.25)); // => 22500
console.log(donny.calculateBonus(0.15));

module.exports = Employee;

