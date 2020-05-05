new Vue({
  el: '#exercise',
  data: {
    highlightEl:false,
    color:'orangered',
    width:100,
    border:'6px solid blue'
  },
  methods: {
    startEffect: function() {
      this.highlightEl = !this.highlightEl
    }
  },
  computed:{
    myStyle:function(){
      return{
        backgroundColor:this.color,
        width:this.width+'px',
        border:this.border
      }
    }
  }
});
