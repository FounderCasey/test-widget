import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import vueCustomElement from "vue-custom-element";
Vue.use(vueCustomElement);

App.router = router;
Vue.customElement("vue-widget", App);
