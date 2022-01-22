<template>
  <div>
    <h1>{{ title }}</h1>
    <Heroes />
    <Messages />
  </div>
</template>

<script lang="ts">
import { HeroService } from "@/services/hero-service";
import { defineComponent, provide, ref } from "vue";
import { getModule } from "vuex-module-decorators";
import Heroes from "./components/Heroes.vue";
import Messages from "./components/Messages.vue";
import { MessageService } from "@/store/message-service";
import { store } from "@/store";
import { keys } from "@/keys";

export default defineComponent({
  setup() {
    const messageService = getModule(MessageService, store);
    const heroService = new HeroService(messageService);

    provide(keys.messageServiceKey, messageService);
    provide(keys.heroServiceKey, heroService);

    const title = ref("Tour of Heroes");

    return {
      title,
    };
  },
  components: {
    Heroes,
    Messages,
  },
});
</script>

<style lang="scss">
/* Application-wide Styles */
h1 {
  color: #369;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 250%;
}
h2,
h3 {
  color: #444;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
}
body {
  margin: 2em;
}
body,
input[type="text"],
button {
  color: #333;
  font-family: Cambria, Georgia, serif;
}
/* everywhere else */
* {
  font-family: Arial, Helvetica, sans-serif;
}
</style>

<style lang="scss" scoped></style>
