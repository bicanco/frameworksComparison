<template>
  <div>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li
        v-for="hero in heroes"
        :key="hero.id"
        :class="{ selected: hero === selectedHero }"
        @click="onSelect(hero)"
      >
        <span class="badge">{{ hero.id }}</span> {{ hero.name }}
      </li>
    </ul>

    <HeroDetail :hero="selectedHero" />
  </div>
</template>

<script lang="ts">
import HeroDetail from "./Hero-detail.vue";
import { tap } from "rxjs";
import { defineComponent, inject, ref } from "vue";
import { Hero } from "@/models/hero";
import { keys } from "@/keys";
import { HeroService } from "@/services/hero-service";
import { MessageService } from "@/store/message-service";

export default defineComponent({
  components: {
    HeroDetail,
  },
  setup() {
    const heroService = inject(keys.heroServiceKey) as HeroService;
    const messageService = inject(keys.messageServiceKey) as MessageService;

    const heroes = ref<Hero[]>([]);
    const selectedHero = ref<Hero>();

    const getHeroes = (): void => {
      heroService
        .getHeroes()
        .pipe(tap((HEROES) => (heroes.value = HEROES)))
        .subscribe();
    };

    const onSelect = (hero: Hero): void => {
      selectedHero.value = hero;
      messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    };

    getHeroes();

    return {
      heroes,
      selectedHero,
      getHeroes,
      onSelect,
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
  cursor: pointer;
  position: relative;
  left: 0;
  background-color: #eee;
  margin: 0.5em;
  padding: 0.3em 0;
  height: 1.6em;
  border-radius: 4px;
}
.heroes li:hover {
  color: #2c3a41;
  background-color: #e6e6e6;
  left: 0.1em;
}
.heroes li.selected {
  background-color: black;
  color: white;
}
.heroes li.selected:hover {
  background-color: #505050;
  color: white;
}
.heroes li.selected:active {
  background-color: black;
  color: white;
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
  margin-right: 0.8em;
  border-radius: 4px 0 0 4px;
}
</style>
