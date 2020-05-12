new Vue({
    el:'#vue-app',
    data:{
        text:'POPSICLES',
        arr:[]
    },
    methods:{
        splittext:function(){
            this.arr = this.text.split('')
            console.log(this.arr)
        },
        removeText:function(index){
            this.arr.splice(index,1)
        }
    },
    computed: {
        
    },
})