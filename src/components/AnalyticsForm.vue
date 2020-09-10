<template>
<div>
  <section>
    <div>
      <h2>質問.1 きのこ派？たけのこ派？</h2>
      <button @click="onClick('きのこの山')">きのこの山</button>
      <button @click="onClick('たけのこの山')">たけのこの山</button>
    </div>
  </section>

  <section>
    <h5>Logs</h5>
    <textarea v-model="logs" id="" cols="30" rows="10"></textarea>
  </section>
</div>
</template>

<script>
import {
  Analytics
} from "aws-amplify";

export default {
  name: "analytics",
  data() {
    return {
      logs: [],
    };
  },
  methods: {
    async onClick(selection) {
      const ret = await Analytics.record({
        name: "question1",
        attributes: {
          answer: selection,
        },
      });

      const key = Object.keys(ret.EventsResponse.Results)[0];
      const eventsItemResponseKey = Object.keys(
        ret.EventsResponse.Results[key].EventsItemResponse
      );
      console.log(
        selection,
        ret.EventsResponse.Results[key].EventsItemResponse[
          eventsItemResponseKey
        ]
      );
      this.logs.push(eventsItemResponseKey);
    },
  },
};
</script>
