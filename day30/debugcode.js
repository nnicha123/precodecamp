var count = 0;

function cc(card) {
count = 0;
  // Only change code below this line
for(var i =0;i<card.length;i++){
    if(card[i] == 2 || card[i] == 3 || card[i] == 4 || card[i] == 5 || card[i] == 6){
        count += 1;
    } else if (card[i] == 7 || card[i] == 8 || card[i] == 9 ){
        count += 0;
    } else if (card[i] == 10 || card[i] == 'J' || card[i] == 'Q' || card[i] == 'K' || card[i] == 'A'){
        count -=1;
    }
}
    if(count > 0){
        return count + " Bet";
      } else if(count == 0) {
        return count + " Hold";
      } else if(count <0){
        return count + " Hold";
      }else{
        return "Change Me";
      }
      // Only change code above this line
}


console.log(cc([2,3,4,5,6]))
console.log(cc([10, 'J', 'Q', 'K', 'A'])); 
console.log(cc([2, 'J', 9, 2, 7])); 
console.log(cc([2, 2, 10]));
// console.log(cc(6));