import { createApp } from "vue";

import App from "./App.vue";

const app = createApp(App);

app.config.globalProperties.$filters = {
  uppercase(value: string): string {
    return value.toUpperCase();
  },
};

app.mount("#app");
