class HashTable{
    constructor(size=4){
        this.keyMap = new Array(size);
    }
    _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i = 0; i<Math.min(key.length,100);i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total + WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    set(key,value){
       let index =  this._hash(key);
       if(!this.keyMap[index]){
           this.keyMap[index] = [];
       }
           this.keyMap[index].push([key,value]);
    }
    get(key){
        let index =  this._hash(key);
        if(!this.keyMap){
            return undefined;
        }
        for(let i = 0;i<this.keyMap.length;i++){
            if(this.keyMap[i][0] === key){
                return this.keyMap[index][i][1];
            }
        }
    }
    keys(){
        let arr = [];
        for(let i = 0; i<this.keyMap.length;i++){
            if(this.keyMap[i]){
                for(let j=0;j<this.keyMap[i].length;j++){
                    if(!arr.includes(this.keyMap[i][j][0])){
                        arr.push(this.keyMap[i][j][0])
                      }
                }
            }
            
        }
        return arr;
    }

}

let ht = new HashTable();
ht.set("maroon","#800000");
ht.set("yellow","FFFF00");
ht.set("cats","are fine");
ht.set("I love", "pizza");
console.log(ht.keys());
