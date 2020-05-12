new Vue({
    el:'#vue-app',
    data:{
        text:'',
        arr:[],
        random:''
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
            this.random = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, length).toUpperCase();
        }
    },
    computed: {
        
    },
})