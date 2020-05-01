function LinkedList() {
    var length = 0;
    var head = null;
  
    var Node = function(element){
      this.element = element;
      this.next = null;
    };
  
    this.head = function(){
      return head;
    };
  
    this.size = function(){
      return length;
    };
  
    this.add = function(element){
      // Only change code below this line
    //   create new node
    const newNode = new Node(element);
  
    if(head){
        let currentLast = head;
        while(currentLast.next !== null){
            currentLast = currentLast.next;
        }
        currentLast.next = newNode;
    }else{
        head = newNode;
    }
    length++;
      // Only change code above this line
    };
    this.remove = function(element){
        let current = head;
        let removeIndex = 0;
        while(current.next && current !== element){
          removeIndex++;
          current = current.next;
        }
        // value before;
        for(let i = 0;i<removeIndex-1;i++){
          current = current.next;
        }
        current.next = current.next.next;
    }
    length--;
  }

  var newNode = new LinkedList();
  newNode.add(4);
  console.log(newNode.add(4))