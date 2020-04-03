function Bird(name){
    this.name = name
}

Bird.prototype.numLegs = 2
let parrot = new Bird("Red Parrot")
console.log(parrot.numLegs) //Shows 2 in console