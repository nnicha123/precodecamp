class Student{
    constructor(firstName,lastName,year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
    }
}

let firstStudent = new Student("Emil",'Katz',3);
let secondStudent = new Student("Blue",'Lolo',4);
console.log(firstStudent);
console.log(secondStudent);