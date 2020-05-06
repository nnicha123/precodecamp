Vue.component('hello',{
    template: '<h1>Hello!</h1>'
})

var vm1 = new Vue({
    el:'#app1',
    data:{
        title: 'The VueJS Instance',
        showParagraph:false
    },
    methods:{
        show:function(){
            // Function gets executed with timeout in 3 seconds
            this.showParagraph = true;
            this.updateTitle('The VueJS Instance (Updated)')
            this.$refs.myButton.innerText = 'Test Ref'
        },
        updateTitle:function(title){
            this.title = title;
        }
    },
    computed:{
        lowercaseTitle: function(){
            return this.title.toLowerCase();
        }
    },
    watch:{
        title:function(value){
            alert('Title changed, new value: ' + value);
        }
    }
});

vm1.$mount('#app1');

setTimeout(function(){
    vm1.title = 'Changed by timer';
    vm1.show();
    
},3000)

setTimeout(function(){
    vm1.$refs.heading.innerText = 'Something else';
},6000)

var vm2 = new Vue({
    el:'#app2',
    data:{
        title:'The second instance'
    },
    methods:{
        onChange:function(){
            // Access first Vue instance with the second
            vm1.title= 'Changed!'
        }
    }
})

var vm3 = new Vue({
    template:'<h1>Hello!</h1>'
})
// vm3.$mount('#app3')
vm3.$mount();
document.getElementById('app3').appendChild(vm3.$el)