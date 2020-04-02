let age = 65;
let isChild = age <= 7;
let isSenior = age >= 65;
console.log(isChild);
console.log(isSenior);
if (isChild){
    console.log('Child pricing');
}
if(isSenior){
    console.log('Senior discount');
}

let isAccountLocked = false;
let userRole = 'admin';

// if(isAccountLocked){
//     console.log('Is account locked');
// } else{
//     console.log('Welcome');
// }

if(isAccountLocked){
    console.log('Is account locked')
} else if (userRole === 'admin'){
     console.log('Welcome admin');
} else {
    console.log('Welcome');
}

let temp = 45;

if(temp<=31){
    console.log('Its freezing outside');
} else if(temp >= 120){
    console.log('Its hot outside');
} else{
    console.log('Go for it.It is pretty nice');
}

if(temp >= 60 && temp <= 90){
    console.log('It is pretty nice out');
} else if(temp <=0 || temp >= 120){
    console.log('Do not go outside');
} else{
    console.log('Do whatever you want');
}

let isGuestOneVegan = true;
let isGuestTwoVegan = false;
if(isGuestOneVegan && isGuestTwoVegan){
    console.log('Only offer up vegan dishes');
} else if(isGuestOneVegan || isGuestTwoVegan){
    console.log('Make sure to offer up some vegan options');
} else{
    console.log('Offer up anything on the menu');
}