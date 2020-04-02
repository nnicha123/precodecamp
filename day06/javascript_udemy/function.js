let getScoreText = function(name = 'Anonymous',score = 0){
    return 'Name: ' + name + ' - Score: ' + score;
}
let scoreText = getScoreText(undefined,90)
console.log(scoreText);
//Challenge area
let getTip = function(total,tipPercent = 0.2){
    return 'Total: ' + total + '- Tip percent: ' + tipPercent;
}
let tip = getTip(100,0.3);
console.log(tip);