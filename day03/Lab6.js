function Bird(name,color,numLegs){
    this.name = name
    this.color = color
    this.numLegs = numLegs
    }

let parrot = new Bird('Talky','Red',2)

let ownProps = [];
for(let property in parrot){
    if(parrot.hasOwnProperty(property)){
        ownProps.push(property)
    }
}
console.log(ownProps)