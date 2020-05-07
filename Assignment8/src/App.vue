<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br />
        <button @click="selectedComponent='app-blue'" class="btn btn-primary">Load Blue Template</button>
        <button @click="selectedComponent='app-green'" class="btn btn-success">Load Green Template</button>
        <button @click="selectedComponent='app-red'" class="btn btn-danger">Load Red Template</button>
        <hr />
        <component :is="selectedComponent">
        </component>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
  data: function() {
    return {
      selectedComponent: "app-blue"
    };
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  }
};
</script>

<style>
</style>
