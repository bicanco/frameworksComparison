<template>
  <h2>Top Heroes</h2>
  <div class="heroes-menu">
    <router-link
      v-for="hero in heroes"
      :key="hero.id"
      :to="`/detail/${hero.id}`"
    >
      {{ hero.name }}
    </router-link>
  </div>

  <HeroSearch />
</template>

<script lang="ts">
import { Hero } from "@/models/hero";
import { HeroService, heroServiceKey } from "@/services/hero-service";
import { tap } from "rxjs";
import { defineComponent, inject, ref } from "vue";
import HeroSearch from "@/components/Hero-search.vue";

export default defineComponent({
  components: {
    HeroSearch,
  },
  setup() {
    const heroService = inject(heroServiceKey) as HeroService;
    const heroes = ref<Hero[]>([]);

    const getHeroes = (): void => {
      heroService
        .getHeroes()
        .pipe(tap((HEROES) => (heroes.value = HEROES.slice(1, 5))))
        .subscribe();
    };

    getHeroes();

    return {
      heroes,
      getHeroes,
    };
  },
});
</script>

<style lang="scss" scoped>
/* DashboardComponent's private CSS styles */

h2 {
  text-align: center;
}

.heroes-menu {
  padding: 0;
  margin: auto;
  max-width: 1000px;

  /* flexbox */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: flex-start;
  align-items: flex-start;
}

a {
  background-color: #3f525c;
  border-radius: 2px;
  padding: 1rem;
  font-size: 1.2rem;
  text-decoration: none;
  display: inline-block;
  color: #fff;
  text-align: center;
  width: 100%;
  min-width: 70px;
  margin: 0.5rem auto;
  box-sizing: border-box;

  /* flexbox */
  order: 0;
  flex: 0 1 auto;
  align-self: auto;
}

@media (min-width: 600px) {
  a {
    width: 18%;
    box-sizing: content-box;
  }
}

a:hover {
  background-color: #000;
}
</style>
