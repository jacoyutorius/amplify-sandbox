<template>
<div id="app">
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Amplify Sandbox" />
  <AnalyticsForm></AnalyticsForm>
</div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import AnalyticsForm from "./components/AnalyticsForm";

export default {
  name: "App",
  components: {
    HelloWorld,
    AnalyticsForm,
  },
};
</script>
