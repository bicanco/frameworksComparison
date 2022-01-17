<template>
  <div v-if="hero">
    <h2>{{ $filters.uppercase(hero.name) }} Details</h2>
    <div><span>id: </span>{{ hero.id }}</div>
    <div>
      <label for="hero-name">Hero name: </label>
      <input id="hero-name" v-model="hero.name" placeholder="name" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { PropType } from "vue";

import { Hero } from "../models/hero";

@Options({
  props: {
    hero: Object as PropType<Hero>,
  },
})
export default class HeroDetail extends Vue {}
</script>

<style lang="scss" scoped>
input {
  padding: 0.5rem;
}
</style>
