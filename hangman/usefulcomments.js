
//Primitive value: string,number,boolean,null,undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

    // const team = ['Luke','Maddison']
    // console.log(team)
    // console.log(team.hasOwnProperty('length'))
    const product = 'Computer';
    console.log(product)
   
   const otherProduct = new String('Phone')
   console.log(otherProduct)
   
   
   // const product = {
   //     name:'Influence'
   // }
   
   // Object.prototype.someNewMethod = () => 'This is the new function'
   
   // //hasOwnProperty
   // console.log(product.someNewMethod())
   // console.log(product)