<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Amplify Sandbox" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

// TODO: envによってログレベルを変えたほうが良い
window.LOG_LEVEL = "VERBOSE";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  created: async function () {
    try {
      this.$logger.info("created");
    } catch (e) {
      this.$logger.error(e);
    }
  },
};
</script>
