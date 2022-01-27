import { useState } from 'react';
import { catchError, from, Observable, of, tap } from 'rxjs';

import { useAppDispatch } from '@hooks';
import { Hero } from '@models/hero';
import { MessageServiceActions as MSA } from '@store/message-service';
import { mapToObject } from '@utils/operators';

export const useHeroService = () => {
  const dispatch = useAppDispatch();
  const heroesUrl = 'http://localhost:4000/heroes';
  const httpOptions: RequestInit = {
    headers: { 'Content-Type': 'application/json' },
  };

  const log = (message: string): void => {
    dispatch(MSA.add(`HeroService: ${message}`));
  };

  const handleError = <T>(operation = 'operation', result?: T) => {
    return (error: any): Observable<T> => {
      console.error(error);
      log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  const getHeroes = (): Observable<Hero[]> => {
    return from(fetch(heroesUrl)).pipe(
      mapToObject<Hero[]>(),
      tap(() => log('fetched heroes')),
      catchError(handleError<Hero[]>('getHeroes', []))
    );
  };

  const getHero = (id: number): Observable<Hero> => {
    const url = `${heroesUrl}/${id}`;
    return from(fetch(url)).pipe(
      mapToObject<Hero>(),
      tap(() => log(`fetched hero id=${id}`)),
      catchError(handleError<Hero>(`getHero id=${id}`))
    );
  };

  const updateHero = (hero: Hero): Observable<any> => {
    const url = `${heroesUrl}/${hero.id}`;
    return from(fetch(url,
        {
          ...httpOptions,
          method: 'PUT',
          body: JSON.stringify(hero),
        },
      )).pipe(
      mapToObject(),
      tap(() => log(`updated hero id=${hero.id}`)),
      catchError(handleError<any>('updateHero'))
    );
  };

  const addHero = (hero: Hero): Observable<Hero> => {
    return from(fetch(heroesUrl,
      {
        ...httpOptions,
        method: 'POST',
        body: JSON.stringify(hero),
      },
    )).pipe(
      mapToObject<Hero>(),
      tap((newHero: Hero) => log(`added hero w/ id=${newHero.id}`)),
      catchError(handleError<Hero>('addHero'))
    );
  }

  const deleteHero = (id: number): Observable<Hero> => {
    const url = `${heroesUrl}/${id}`;
    return from(fetch(url,
      {
        ...httpOptions,
        method: 'DELETE',
      },
    )).pipe(
      mapToObject<Hero>(),
      tap(() => log(`deleted hero id=${id}`)),
      catchError(handleError<Hero>('deleteHero'))
    );
  }

  const searchHeroes = (term: string): Observable<Hero[]> => {
    if (!term.trim()) {
      return of([]);
    }
    return from(fetch(`${heroesUrl}/?name_like=${term}`,
      {
        ...httpOptions,
      },
    )).pipe(
      mapToObject<Hero[]>(),
      tap(x => x.length ?
        log(`found heroes matching "${term}"`) :
        log(`no heroes matching "${term}"`)),
      catchError(handleError<Hero[]>('searchHeroes', []))
    );
  }

  return useState({getHeroes, getHero, updateHero, addHero, deleteHero, searchHeroes})[0];
}
