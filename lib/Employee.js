// Define Employee class and export

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName () {
        return this.name;
    }
    getId () {
        return this.id;
    }
    getRole () {
        return 'Employee'
    }
    getEmail() {
        return this.email
    };
};

//Export the Employee class

module.exports = Employee;
