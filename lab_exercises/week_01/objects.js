console.log('JS Objects')

obj1 = {
    sid: 101,
    sname: "Alice",
    marks: 85,
    isAdmin: false,
    1000: "One Thousand",
    null: "Null Value",
    true: "Boolean True",
    "city name": "New York",
    display: function() {
        console.log(this) // obj1
        console.log(this.sid, this.sname);
    },
    print: () => {
        console.log(this); // {}
    }
}

console.log(obj1);
console.log(typeof obj1);
console.log(obj1.sid); // 101
console.log(obj1.sname); // Alice
console.log(obj1['sname']); // Alice
// console.log(obj1.1000); // error
console.log(obj1[1000]); // One Thousand
let k1 = 1000
console.log(obj1[k1]); // One Thousand
console.log(obj1['city name']); // New York
console.log(obj1.null); // Null Value
console.log(obj1.true); // Boolean True
obj1.display() // 101 Alice
obj1.print() // {}

function Employee(employeeId, employeeName, employeeSalary) {
    this.employeeId = employeeId
    this.employeeName = employeeName
    this.employeeSalary = employeeSalary

    this.show = function() {
        console.log(this.employeeId, this.employeeName, this.employeeSalary, this.bonus)
    }
}


Employee.prototype.bonus = 5000;
Employee.prototype.showBonus = function() {
    console.log("Bonus:", this.bonus);
}

let employee1 = new Employee(101, "Bob", 65000);
employee1.show() // 101 Bob 65000
employee1.showBonus