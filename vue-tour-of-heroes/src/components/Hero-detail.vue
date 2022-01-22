<template>
  <div v-if="hero">
    <h2>{{ heroName }} Details</h2>
    <div><span>id: </span>{{ hero.id }}</div>
    <div>
      <label for="hero-name">Hero name: </label>
      <!-- eslint-disable-next-line vue/no-mutating-props -->
      <input id="hero-name" v-model="hero.name" placeholder="name" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { Hero } from "@/models/hero";
import { uppercase } from "@/utils/uppercase";

export default defineComponent({
  props: {
    hero: Object as PropType<Hero>,
  },
  setup(props) {
    const heroName = computed(() => uppercase(props.hero?.name));

    return {
      heroName,
    };
  },
});
</script>

<style lang="scss" scoped>
input {
  padding: 0.5rem;
}
</style>
