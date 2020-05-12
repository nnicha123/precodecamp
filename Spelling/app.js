new Vue({
    el:'#vue-app',
    data:{
        text:'',
        arr:[]
    },
    methods:{
        splittext:function(){
            this.arr = this.text.split('')

        },
        removeText:function(el){
            findIndex = this.arr.indexOf(el)
            this.arr.splice(findIndex,1)
        }
    },
    computed: {
        
    },
})