new Vue({
    el:'#vue-app',
    data:{
        text:'HELLO',
        arr:[]
    },
    methods:{
        splittext:function(){
            this.arr = this.text.split('')
            console.log(this.arr)
        }
    },
    computed: {
        
    },
})