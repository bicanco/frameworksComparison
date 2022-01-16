<template>
  <div>
    <h1>{{ title }}</h1>
    <Heroes />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Heroes from "./components/Heroes.vue";

@Options({
  components: {
    Heroes,
  },
})
export default class App extends Vue {
  title = "Tour of Heroes";
}
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
