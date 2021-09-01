<template>
  <div id="app">
    <Indesicion />
  </div>
</template>

<script lang="ts">
import Indesicion from "./components/Indesicion.vue";
export default {
  name: "App",
  components: {
    Indesicion,
  },
};
</script>

<style>
#app {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 100vw;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
