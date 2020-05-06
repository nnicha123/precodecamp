// Pointer behavior changing one will change both because they share data source (if using the method below)
//var data = {status : 'Critical'}

var cmp = {
    data:function(){
        return {
            status:'Critical'
        }
    },
    template:'<p>Server Status : {{status}}(<button @click="changeStatus">Change</button>)</p>',
    methods:{
        changeStatus(){
            this.status = 'Normal'
        }
    }
}

new Vue({
    el:'#app',
    components:{
        'my-component' :cmp
    }
})

new Vue({
    el:'#app2',
    components:{
        'my-component' :cmp
    }
})