// HTML
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<div id="app">
<button @click="changeLink">Click to change link</button>
<a :href="link">Link</a>
<button @click="counter++">Increase</button>
<button @click="counter--">Decrease</button>
<button @click="secondCounter++">Increase Second</button>
<p>{{counter}} | {{secondCounter}}</p>
<p>{{result()}} | {{output}}</p>
<p @mousemove="updateCoordinates">
  Coordinates: {{x}} / {{y}} - <span @mousemove.stop="">DEAD SPOT</span>
</p>
<input type="text" @keyup.enter.space="alertMe" v-model="name">
<p>{{name}}</p>
</div>
 
// Vue
new Vue ({
	el:'#app',
  data: {
  	counter:0,
    x:0,
    y:0,
    name:'Nicha',
    secondCounter:0,
    link:'http://google.com'
  },
  watch:{
  	counter: function(value){
    var vm = this;
    	setTimeout(function(){
      	vm.counter = 0;
        vm.secondCounter = 0;
      },2000)
    }
  },
  computed:{
  	output:function(){
    console.log('Computed');
    return this.counter > 5 ? 'Greater 5':'Smaller 5';
    }
  },
  methods:{
    updateCoordinates: function(event){
    	this.x = event.clientX;
      this.y = event.clientY;
    },
    result:function(){
     console.log('Method');
    return this.counter >5 ? 'Greater 5' :'Smaller 5';
    },
    alertMe: function(){
    	alert('Alert!');
    },
    changeLink:function(){
    	this.link = 'http//apple.com'
    }
  }
})