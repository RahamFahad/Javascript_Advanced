
// JS ADVANCED ASSIGNMENT SOLUTIONS


// Q1:
function squareNumbers(numbers) {
    return numbers.map(num => num * num);
}
const nums = [1, 2, 3, 4, 5];
console.log("Q1 Result:", squareNumbers(nums));


// Q2: 
function filterAdults(users) {
    return users.filter(user => user.age > 18);
}
const usersList = [
    { name: "Ali", age: 16 },
    { name: "Sara", age: 22 },
    { name: "Ahmed", age: 18 },
    { name: "Zain", age: 25 }
];
console.log("Q2 Result:", filterAdults(usersList));


// Q3: 
const products = [
    { name: "Shirt", price: 500 },
    { name: "Pants", price: 1200 },
    { name: "Shoes", price: 3000 }
];
const totalPrice = products.reduce((total, product) => total + product.price, 0);
console.log("Q3 Total Price:", totalPrice);


// Q4: 
const students = [
    { name: "Bilal", marks: 75 },
    { name: "Ayesha", marks: 92 },
    { name: "Kamran", marks: 60 },
    { name: "Fatima", marks: 85 }
];
students.sort((a, b) => b.marks - a.marks);
console.log("Q4 Sorted Students (Descending):", students);


// Q5: 
function findLongString(strings) {
    return strings.find(str => str.length > 5);
}
const words = ["cat", "apple", "banana", "elephant"];
console.log("Q5 Result:", findLongString(words));


// Q6: 
const person = {
    firstName: "Muhammad",
    lastName: "Ali",
    fullName: function() {
        // 'this' refers to the current object ('person') that is calling the method.
        return this.firstName + " " + this.lastName;
    }
};
console.log("Q6 Full Name:", person.fullName());


// Q7:
const objExample = {
    name: "Laptop",
    regularFunc: function() {
        return this.name;
    },
    arrowFunc: () => {
        return this.name;
    }
};
console.log("Q7 Regular Func Result:", objExample.regularFunc()); 
console.log("Q7 Arrow Func Result:", objExample.arrowFunc()); 


// Q8: 
function processNumbers(arr) {
    return arr
        .filter(n => n % 2 === 0)
        .map(n => n * 2)
        .reduce((sum, n) => sum + n, 0);
}
const sampleNumbers = [1, 2, 3, 4, 5, 6];
console.log("Q8 Chained Result:", processNumbers(sampleNumbers));


// Q9:
const employees = [
    { name: "Usman", department: "IT", salary: 60000 },
    { name: "Hina", department: "HR", salary: 45000 },
    { name: "Tariq", department: "Finance", salary: 55000 },
    { name: "Sadaf", department: "HR", salary: 50000 }
];

// a)
const hrEmployee = employees.find(emp => emp.department === "HR");
console.log("Q9a HR Employee:", hrEmployee);

// b) 
const sortedEmployees = [...employees].sort((a, b) => a.salary - b.salary);
console.log("Q9b Sorted Employees (Ascending):", sortedEmployees);


// Q10:
function processObject(obj) {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    return { keys, values };
}

const sampleObj = { brand: "Toyota", model: "Corolla", year: 2022 };
const processed = processObject(sampleObj);
console.log("Q10 Keys:", processed.keys);
console.log("Q10 Values:", processed.values);

// 
const keyValueArray = [["city", "Karachi"], ["country", "Pakistan"]];
const newObj = Object.fromEntries(keyValueArray);
console.log("Q10 New Object fromEntries:", newObj);