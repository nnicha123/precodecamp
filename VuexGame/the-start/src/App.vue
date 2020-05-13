<template>
  <div id="game">
    <Overview/>
  </div>
</template>

<script>
import Overview from './components/Overview';
export default {
  name: 'App',
  components: {
    Overview
  },
  methods: {
    coding(){
      // Sort out bytes -> increment bytes after called
    },
    loop(){
      // requestAnimationFrame calls loop 60 frames per second
      requestAnimationFrame(this.loop)
    }
  },
  created() {
    this.loop()
    window.addEventListener('keypress',this.coding);
  },
  destroyed() {
    window.removeEventListener('keypress',this.coding);
  },
}
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: sans-serif;
  }
</style>