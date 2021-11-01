import Vue from "vue";
import App from "./App.vue";
import { Amplify, Logger, AWSCloudWatchProvider } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure({
  Logging: {
    logGroupName: "amplify-sandbox",
    logStreamName: "LOGS2",
  },
  ...awsconfig
});

const amplifyLogger = new Logger("amplify-sandbox", "INFO");
Amplify.register(amplifyLogger);
amplifyLogger.addPluggable(new AWSCloudWatchProvider());

Vue.prototype.$logger = amplifyLogger;

// Amplify.Logger.LOG_LEVEL = "DEBUG";

console.log("awsconfig", awsconfig);
Amplify.configure(awsconfig);

Vue.use(Amplify);


Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
