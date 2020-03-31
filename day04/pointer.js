let b = {'animal':'cat','talk':'meow'};
let c = b;
c.animal = 'dog';
console.log(b); //({'animal':'dog','talk':'meow'}
console.log(c); //{'animal':'dog','talk':'meow'}