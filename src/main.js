import Vue from "vue";
import App from "./App.vue";
import { Amplify, Logger, AWSCloudWatchProvider } from 'aws-amplify'; // eslint-disable-line no-unused-vars
import { AmazonAIPredictionsProvider } from '@aws-amplify/predictions';
import awsconfig from './aws-exports';

Amplify.configure({
  Logging: {
    logGroupName: "amplify-sandbox",
    logStreamName: "LOGS2",
  },
  ...awsconfig
});

Amplify.addPluggable(new AmazonAIPredictionsProvider());

const amplifyLogger = new Logger("amplify-sandbox", "INFO");
Amplify.register(amplifyLogger);
// amplifyLogger.addPluggable(new AWSCloudWatchProvider());

Vue.prototype.$logger = amplifyLogger;

// Amplify.Logger.LOG_LEVEL = "DEBUG";

// console.log("awsconfig", awsconfig);
Amplify.configure(awsconfig);

Vue.use(Amplify);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
