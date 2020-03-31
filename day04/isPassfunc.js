function isPass(score){
    if(score>50)
    return true;
    else
    return false;
}

function SavePassStudentScore(score,name){
    if(isPass(score))
    saveToDatabase(score,name);
}