<template>
  <div>
    <h1>{{title}}</h1>
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
  title = 'Tour of Heroes';
}
</script>

<style lang="scss" scoped>
</style>
