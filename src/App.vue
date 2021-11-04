<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Amplify Sandbox" />

    <Translate></Translate>

    <button class="button" @click="onClick">LOG</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Translate from "./components/Translate.vue";

// TODO: envによってログレベルを変えたほうが良い
// window.LOG_LEVEL = "VERBOSE";

export default {
  name: "App",
  components: {
    HelloWorld,
    Translate,
  },
  created: async function () {
    try {
      this.$logger.info("created");
    } catch (e) {
      this.$logger.error(e);
    }
  },
  methods: {
    onClick() {
      this.$logger.info("clicked!!");
    },
  },
};
</script>
