<template>
  <div id="search-component">
    <label for="search-box">Hero Search</label>
    <input id="search-box" @input="(event) => search(event.target.value)" />

    <ul class="search-result">
      <li v-for="hero in heroes" :key="hero.id">
        <router-link :to="`/detail/${hero.id}`">
          {{ hero.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { keys } from "@/keys";
import { Hero } from "@/models/hero";
import { HeroService } from "@/services/hero-service";
import {
  debounceTime,
  distinctUntilChanged,
  Subject,
  switchMap,
  tap,
} from "rxjs";
import { defineComponent, inject, onUnmounted, ref } from "vue";

export default defineComponent({
  setup() {
    const heroes = ref<Hero[]>([]);
    const searchTerms = ref(new Subject<string>());
    const heroService = inject(keys.heroServiceKey) as HeroService;

    const search = (term: string): void => {
      searchTerms.value.next(term);
    };

    const subscription = searchTerms.value
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term: string) => heroService.searchHeroes(term)),
        tap((h) => {
          heroes.value = h;
        })
      )
      .subscribe();

    onUnmounted(() => {
      subscription.unsubscribe();
    });

    return {
      heroes,
      search,
    };
  },
});
</script>

<style lang="scss" scoped>
/* HeroSearch private styles */

label {
  display: block;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
input {
  padding: 0.5rem;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
  display: block;
}

input:focus {
  outline: #336699 auto 1px;
}

li {
  list-style-type: none;
}
.search-result li a {
  border-bottom: 1px solid gray;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  display: inline-block;
  width: 100%;
  max-width: 600px;
  padding: 0.5rem;
  box-sizing: border-box;
  text-decoration: none;
  color: black;
}

.search-result li a:hover {
  background-color: #435a60;
  color: white;
}

ul.search-result {
  margin-top: 0;
  padding-left: 0;
}
</style>
