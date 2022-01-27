<template>
  <h2>My Heroes</h2>

  <div>
    <label for="new-hero">Hero name: </label>
    <input id="new-hero" v-model="heroName" />

    <button
      class="add-button"
      @click="
        add(heroName);
        heroName = '';
      "
    >
      Add hero
    </button>
  </div>

  <ul class="heroes">
    <li v-for="hero in heroes" :key="hero.id">
      <router-link :to="`/detail/${hero.id}`">
        <span class="badge">{{ hero.id }}</span> {{ hero.name }}
      </router-link>

      <button class="delete" title="delete hero" @click="deleteHero(hero)">
        x
      </button>
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
    const heroName = ref<string>("");
    const heroService = inject(keys.heroServiceKey) as HeroService;
    const heroes = ref<Hero[]>([]);

    const getHeroes = (): void => {
      heroService
        .getHeroes()
        .pipe(tap((HEROES) => (heroes.value = HEROES)))
        .subscribe();
    };

    const add = (name: string): void => {
      name = name.trim();
      if (!name) {
        return;
      }
      heroService
        .addHero({ name } as Hero)
        .pipe(tap((hero) => heroes.value.push(hero)))
        .subscribe();
    };

    const deleteHero = (hero: Hero): void => {
      heroes.value = heroes.value.filter((h) => h !== hero);
      heroService.deleteHero(hero.id).subscribe();
    };

    getHeroes();

    return {
      heroes,
      getHeroes,
      add,
      heroName,
      deleteHero,
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

input {
  display: block;
  width: 100%;
  padding: 0.5rem;
  margin: 1rem 0;
  box-sizing: border-box;
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

.add-button {
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  margin-bottom: 2rem;
}

.add-button:hover {
  color: white;
  background-color: #42545c;
}

button.delete {
  position: absolute;
  left: 210px;
  top: 5px;
  background-color: white;
  color: #525252;
  font-size: 1.1rem;
  padding: 1px 10px 3px 10px;
}

button.delete:hover {
  background-color: #525252;
  color: white;
}
</style>
