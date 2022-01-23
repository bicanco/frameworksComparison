import { useState } from 'react';
import { Observable, of } from 'rxjs';

import { useAppDispatch } from '@hooks';
import { Hero } from '@models/hero';
import { MessageServiceActions as MSA } from '@store/message-service';

import { HEROES } from './mock-heroes';

export const useHeroService = () => {
  const dispatch = useAppDispatch();

  const getHeroes = (): Observable<Hero[]> => {
    const heroes = of(HEROES);
    dispatch(MSA.add('HeroService: fetched heroes'));
    return heroes;
  };

  const getHero = (id: number): Observable<Hero> => {
    const hero = HEROES.find(h => h.id === id)!;
    dispatch(MSA.add(`HeroService: fetched hero id=${id}`));
    return of(hero);
  }

  return useState({getHeroes, getHero})[0];
}
