<template>
  <div class="hello">
    <h1>{{ msg }} <span style="color:red;">master</span></h1>
    <p>
      For a guide and recipes on how to configure / customize this project,
      <br />check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <p>
      <small>
        here is styled by
        <a href="https://github.com/kognise/water.css">water.css</a>.
      </small>
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
