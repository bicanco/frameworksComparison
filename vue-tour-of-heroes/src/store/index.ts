import { createStore } from "vuex";

import { MessageService } from "./message-service";

export const store = createStore({
  strict: true,
  modules: {
    MessageService,
  },
});
