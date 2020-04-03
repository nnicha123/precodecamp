
//constructor function 'Bird'
function Bird(name, color, numLegs) {
    this.name = name
    this.color = color
    this.numLegs = numLegs
}
//New object of parrot called 'talky'
let talky = new Bird('Jay', 'Red', 2);
console.log(talky instanceof Bird) //should show true
