import { Observable, of } from 'rxjs';
import { Hero } from 'src/app/hero';
import { MessageService } from 'src/app/message.service';
import { HEROES } from 'src/app/mock-heroes';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
