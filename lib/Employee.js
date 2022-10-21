class Employee {
    constructor(name, is, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmal() {
        return this.email;
    }

    getRole() {
        return "Employee"
    }
}

module.exports = Employee