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

    <div v-if="selectedHero">
      <h2>{{ $filters.uppercase(selectedHero.name) }} Details</h2>
      <div><span>id: </span>{{ selectedHero.id }}</div>
      <div>
        <label for="hero-name">Hero name: </label>
        <input id="hero-name" v-model="selectedHero.name" placeholder="name" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { HEROES } from "../mock-heroes";
import { Hero } from "../models/hero";

@Options({
  data: () => ({
    heroes: HEROES,
    selectedHero: undefined,
  }),
  methods: {
    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    },
  },
})
export default class Heroes extends Vue {}
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

input {
  padding: 0.5rem;
}
</style>
