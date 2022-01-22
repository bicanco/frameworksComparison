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

  return useState({getHeroes})[0];
}
