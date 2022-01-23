import { Observable, of } from "rxjs";
import { InjectionKey } from "vue";

import { Hero } from "@/models/hero";
import { MessageService } from "@/store/message-service";

import { HEROES } from "../mock-heroes";

export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add("HeroService: fetched heroes");
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((h) => h.id === id) as Hero;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}

export const heroServiceKey: InjectionKey<HeroService> = Symbol();
