let prev = 1;
let now = 1;
for(var i = 0;i<24024;i++){

        if((i==3 || i==5 || i==7 || i==11 || i==2)|| (i%2!=0 && i%3!=0 && i%5!=0 && i%7!=0 && i%11!=0)){
            prev = now;
            now = i;
            console.log(`${prev} = ${now}`);    
            if(prev==1 || now%prev != 0){
                console.log(now);
            }       
        }
    
}