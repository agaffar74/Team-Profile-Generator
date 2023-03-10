// Define the Intern class.
const Employee = require('./Employee');

//Inherited from Employee.
class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

//Exports the Intern class
module.exports = Intern;