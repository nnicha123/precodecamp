class parrot {
    //constructor can now accept arguments
    constructor(name,color,numLegs) {
        this.name = name
        this.color = color
        this.numLegs = numLegs
    }
}
//New object of class parrot called 'talky'
talky = new parrot('Jay','Red',2);
console.log(talky.name);
console.log(talky.color);
console.log(talky.numLegs);