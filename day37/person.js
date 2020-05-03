class Person {
    constructor(firstName,lastName,age,likes = []){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.likes = likes;
    }
    getBio(){
            let bio =  `${this.firstName} is ${this.age}.`
            this.likes.forEach((like) => {
            bio += `${this.firstName} likes ${like}.`
        })
    return bio
    }
    setName(fullName){
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]    
    }
}

class Employee extends Person{
    constructor(firstName,lastName,age,position,likes){
        super(firstName,lastName,age,likes)
        this.position = position
    }
    getBio(){
        return `${this.firstName} ${this.lastName} is a ${this.position}`
    }
}

class Student extends Person {
    constructor(firstName,lastName,age,grade){
        super(firstName,lastName,age)
        this.grade = grade
    }
    getBio(){
        if(this.grade >= 70){
            return `${this.firstName} is passing the test`
        }else{
            return `${this.firstName} is failing the test`
        }
    }
    updateGrade(amount){
        return this.grade += amount
    }
}

const me = new Employee('Nicha','Ngamtweerat',24,'Engineer',['Dogs','Coffee']);
// me.setName('Opapa renu')
// console.log(me.getBio());
const person2 = new Student('Clandey','Turner',51,70);
console.log(person2.getBio())
person2.updateGrade(-10)
console.log(person2.getBio())
