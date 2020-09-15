import Vue from "vue";
import App from "./App.vue";

// amplify configure
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

// Amplify.Logger.LOG_LEVEL = "DEBUG";

console.log("awsconfig", awsconfig);
Amplify.configure(awsconfig);

Vue.use(Amplify);

// https://qiita.com/akitsukada/items/6dff5a90d81765f83ab6#%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E3%83%97%E3%83%AD%E3%83%90%E3%82%A4%E3%83%80%E3%83%BC%E3%81%AE%E4%BE%8B
// Analytics.autoTrack("pageView", {
//   // 必須。false にするとオフにできます。
//   enable: true,
//   // イベント名。省略可。デフォルトでは 'pageView'
//   eventName: "pageView",
//   // イベントの属性。省略可。オブジェクトか関数を指定できる。
//   // 関数を指定すると、設定する属性を動的に決められる。
//   // attributes: {
//   //   attr: "attr",
//   // },
//   // 関数を使った場合
//   // attributes: () => {
//   //    const attr = somewhere();
//   //    return {
//   //        myAttr: attr
//   //    }
//   // },

//   // SPA かどうかを指定する。省略可。デフォルトは 'multiPageApp'。
//   // React のような Single-Page App で使う場合は 'SPA' にセットする。
//   type: "SPA",
//   // どのサービスに PV 情報を送信するか。省略可。デフォルトは 'AWSPinpoint'。
//   provider: "AWSPinpoint",
//   // トラックされる URL 情報。省略可。関数を指定すると柔軟な値を返せる。
//   getUrl: () => {
//     // the default function
//     return window.location.origin + window.location.pathname;
//   },
// });

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
