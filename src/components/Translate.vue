<template>
  <div class="translate">
    <form>
      <label>Translate Text</label>
      <textarea v-model="sourceText"></textarea>

      <label>Result Text</label>
      <textarea v-model="resultText"></textarea>

      <button @click="onClick">Translate!</button>
    </form>
  </div>
</template>

<script>
import Predictions from "@aws-amplify/predictions"; // eslint-disable-line no-unused-vars

export default {
  name: "Translate",
  data() {
    return {
      sourceText: "",
      resultText: "",
    };
  },
  methods: {
    async onClick(e) {
      e.preventDefault();

      const result = await Predictions.convert({
        translateText: {
          source: {
            text: this.sourceText,
          },
        },
      });

      this.resultText = result.text;

      const log = {
        sourceText: this.sourceText,
        ...result,
      };

      this.$logger.info(JSON.stringify(log));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
