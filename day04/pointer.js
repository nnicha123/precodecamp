
let b = {'animal':'cat','talk':'meow'};
let c = b;
c.animal = 'dog';
console.log(b); //({'animal':'dog','talk':'meow'}
console.log(c); //{'animal':'dog','talk':'meow'}

//following example, b will not change
let z = {'animal':'cat','talk':'meow'};
let d = {};
d.animal = z.animal;
d.talk = z.talk;
d.animal = 'dog';
d.talk = 'hong';
console.log(z); //animal:cat, talk:meow
console.log(d); //animal:dog, talk:hong

//if object inside object will be a different case
x = {'animal':'cat','talk':{'talkInside':'meow'}};
let e = {};
e.animal = x.animal;
e.talk = x.talk;
e.animal = 'dog';
e.talk.talkInside = 'hong'
console.log(x); //original talkInside will be changed to hong too because of pointer
console.log(e);

//fix longer (needs more lines. but better performance)
zz = {'animal':'cat','talk':{'talkInside':'meow'}};
let ss = {};
ss.animal = zz.animal;
ss.talk = {};
ss.animal = 'dog';
ss.talk.talkInside = 'hong';
console.log(zz);
console.log(ss);

//fix shorthand
cc = {'animal':'cat','talk':{'talkInside':'meow'}};
let ee = JSON.parse(JSON.stringify(cc));
ee.animal = 'dog';
ee.talk.talkInside = 'hong';
console.log(cc); //cc should not change with ee
console.log(ee);
