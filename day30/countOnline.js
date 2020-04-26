const userObj = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: true
    }
  }

function countOnline(usersObj) {
    // Only change code below this line
    let count = 0;
      for(let user in usersObj){
        if(userObj[user].online === true){
            count++;
        }
        }
        return count;
    }


  console.log(countOnline(userObj));