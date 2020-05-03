const Person = function(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Person.prototype.getBio = function(){
    return `${this.firstName} is ${this.age}.`
}

Person.prototype.setName = function(fullName){
    t
}

const me = new Person('Nicha','Ngamtweerat',24);
me.setName('Opapa renu')
console.log(me.getBio());