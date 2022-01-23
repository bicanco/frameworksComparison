<template>
  <h1>{{ title }}</h1>
  <nav>
    <router-link to="/dashboard">Dashboard</router-link>
    <router-link to="/heroes">Heroes</router-link>
  </nav>
  <router-view></router-view>
  <Messages />
</template>

<script lang="ts">
import { HeroService } from "@/services/hero-service";
import { defineComponent, provide, ref } from "vue";
import { getModule } from "vuex-module-decorators";
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

<style lang="scss" scoped>
/* AppComponent's private CSS styles */
h1 {
  margin-bottom: 0;
}
nav a {
  padding: 1rem;
  text-decoration: none;
  margin-top: 10px;
  display: inline-block;
  background-color: #e8e8e8;
  color: #3d3d3d;
  border-radius: 4px;
}

nav a:hover {
  color: white;
  background-color: #42545c;
}
nav a.active {
  background-color: black;
}
</style>
