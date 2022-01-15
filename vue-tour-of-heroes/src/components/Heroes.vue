<template>
  <div>
    <h2>{{$filters.uppercase(hero.name)}} Details</h2>
    <div><span>id: </span>{{hero.id}}</div>
    <div>
      <label for="name">Hero name: </label>
      <input id="name" v-model="hero.name" placeholder="name">
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import { Hero } from '../models/hero';

@Options({})
export default class Heroes extends Vue {
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
}
</script>

<style lang="scss" scoped>

</style>
