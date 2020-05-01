function Stack() {
    var collection = [];
    this.print = function() {
      console.log(collection);
    };
    // Only change code below this line
    this.push = function(element){
        collection.push(element);
    };
    this.pop = function(){
       return collection.pop();
    };
    this.peek = function(){
        return collection[0];
    };
    this.isEmpty = function(){
        if(collection.length !== 0){
            return false;
        }else{
            return true;
        }
    };
    this.clear = function(){
        collection = [];
    }
    // Only change code above this line
  }
  let stack = new Stack();
  stack.push('ONE');
  console.log(stack.print())
  