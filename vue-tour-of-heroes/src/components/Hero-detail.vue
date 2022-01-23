<template>
  <div v-if="hero">
    <h2>{{ heroName }} Details</h2>
    <div><span>id: </span>{{ hero.id }}</div>
    <div>
      <label for="hero-name">Hero name: </label>
      <input id="hero-name" v-model="hero.name" placeholder="Hero name" />
    </div>
    <button @click="goBack()">go back</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, ref } from "vue";

import { Hero } from "@/models/hero";
import { uppercase } from "@/utils/uppercase";
import { useRoute, useRouter } from "vue-router";
import { HeroService, heroServiceKey } from "@/services/hero-service";
import { tap } from "rxjs";

export default defineComponent({
  setup() {
    const hero = ref<Hero>();
    const heroName = computed(() => uppercase(hero.value?.name));
    const heroService = inject(heroServiceKey) as HeroService;
    const route = useRoute();
    const router = useRouter();

    const getHero = (): void => {
      const id = Number(route.params.id);
      heroService
        .getHero(id)
        .pipe(tap((HERO) => (hero.value = HERO)))
        .subscribe();
    };

    const goBack = (): void => {
      router.back();
    };

    getHero();

    return {
      hero,
      heroName,
      getHero,
      goBack,
    };
  },
});
</script>

<style lang="scss" scoped>
/* HeroDetailComponent's private CSS styles */
label {
  color: #435960;
  font-weight: bold;
}
input {
  font-size: 1em;
  padding: 0.5rem;
}
button {
  margin-top: 20px;
  background-color: #eee;
  padding: 1rem;
  border-radius: 4px;
  font-size: 1rem;
}
button:hover {
  background-color: #cfd8dc;
}
button:disabled {
  background-color: #eee;
  color: #ccc;
  cursor: auto;
}
</style>
