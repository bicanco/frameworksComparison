<template>
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li v-for="hero in heroes" :key="hero.id">
      <router-link :to="`/detail/${hero.id}`">
        <span class="badge">{{ hero.id }}</span> {{ hero.name }}
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { tap } from "rxjs";
import { defineComponent, inject, ref } from "vue";
import { Hero } from "@/models/hero";
import { keys } from "@/keys";
import { HeroService } from "@/services/hero-service";

export default defineComponent({
  setup() {
    const heroService = inject(keys.heroServiceKey) as HeroService;
    const heroes = ref<Hero[]>([]);

    const getHeroes = (): void => {
      heroService
        .getHeroes()
        .pipe(tap((HEROES) => (heroes.value = HEROES)))
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
/* HeroesComponent's private CSS styles */
.heroes {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}
.heroes li {
  position: relative;
  cursor: pointer;
}

.heroes li:hover {
  left: 0.1em;
}

.heroes a {
  color: #333;
  text-decoration: none;
  background-color: #eee;
  margin: 0.5em;
  padding: 0.3em 0;
  height: 1.6em;
  border-radius: 4px;
  display: block;
  width: 100%;
}

.heroes a:hover {
  color: #2c3a41;
  background-color: #e6e6e6;
}

.heroes a:active {
  background-color: #525252;
  color: #fafafa;
}

.heroes .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color: #405061;
  line-height: 1em;
  position: relative;
  left: -1px;
  top: -4px;
  height: 1.8em;
  min-width: 16px;
  text-align: right;
  margin-right: 0.8em;
  border-radius: 4px 0 0 4px;
}
</style>
