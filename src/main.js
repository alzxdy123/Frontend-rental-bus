import "@/assets/scss/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import Notifications from "@kyvg/vue3-notification";
import VueApexCharts from "vue3-apexcharts";

import App from "./App.vue";
import router from "./router";

import { createI18n } from "vue-i18n";

import id from "./tools/lang/id.json";
import en from "./tools/lang/en.json";

const i18n = createI18n({
  locale: "id",
  messages: {
    id: id,
    en: en,
  },
});

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(VueApexCharts);
app.use(Notifications);
app.use(i18n);

app.mount("#app");
