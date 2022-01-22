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
}

export const heroServiceKey: InjectionKey<HeroService> = Symbol();
