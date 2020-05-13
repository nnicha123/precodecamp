new Vue({
    el:'#vue-app',
    data:{
        text:'',
        arr:[],
        random:'',
        input:'',
        countDown:20,
        gameOver:false,
        youWin:false,
    },
    methods:{
        splittext:function(){
            this.arr = this.text.split('')

        },
        removeText:function(el){
            findIndex = this.arr.indexOf(el)
            this.arr.splice(findIndex,1)
        },
        randomText:function(length){
            this.countDown = 20;
            this.text = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, length).toUpperCase();
            this.arr = this.text.split('')
            this.gameOver = false;
            this.youWin = false;
        },
        testInput:function(){
            letterIndex = this.text.indexOf(this.input.toUpperCase())
            if(letterIndex > -1){
                this.arr.splice(letterIndex,1)
                this.text = this.arr.join('')
            }
        },
        tempRefresh:function(){
            this.input = ''
        },
        countDownTimer:function(){
            if(this.countDown > 0){
                if(this.arr.length ===0 ){
                    this.youWin = true;
                    this.countDown=0;
                }
                setTimeout(() => {
                    this.countDown -=1
                    this.countDownTimer()
                },1000)
                
            }else{
                this.gameOver = true
            }
        },
        resetTimer:function(){
            this.gameOver = false;
            this.countDown = 20;
        }
    },
    computed: {
        
    },
})