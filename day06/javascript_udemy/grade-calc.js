let gradeCalc = function(score,total){
    let percent = score/total * 100;
    if(percent >= 90){
        letter = 'A';
    } else if(percent >= 80){
        letter = 'B'
    } else if(percent >= 70){
        letter = 'C'
    } else if(percent >= 60){
        letter = 'D'
    } else {
        letter = 'F'
    }
    return `You got a ${letter} (${percent}%)`;
}

let myScore = 75;
let myGrade = gradeCalc(75,80);
console.log(myGrade); 