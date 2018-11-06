import Vue from "vue";
//import Vue from "vue/dist/vue.js";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;

import "@progress/kendo-ui";
import "@progress/kendo-theme-default/dist/all.css";
import { Grid, GridInstaller } from "@progress/kendo-grid-vue-wrapper";
import {
  Spreadsheet,
  SpreadsheetSheet,
  SpreadsheetInstaller
} from "@progress/kendo-spreadsheet-vue-wrapper";

Vue.use(GridInstaller);
Vue.use(SpreadsheetInstaller);

//Start from here: https://www.telerik.com/kendo-vue-ui/components/spreadsheet/data-binding/
//Remove toolbars and unuseful stuff. Something like:
//$telerik.$(".rssToolbarWrapper").hide(); $telerik.$(".rssFormulaBar").hide();
//Make cell as big as 2 chars

new Vue({
  router,
  store,
  render: h => h(App),
  components: {
    Grid,
    Spreadsheet,
    SpreadsheetSheet
  }
}).$mount("#app");
