import classNames from 'classnames';
import Link from 'next/link';
import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { debounceTime, distinctUntilChanged, Subject, switchMap, tap } from 'rxjs';

import { useHeroService } from '@hooks/hero-service';
import { Hero } from '@models/hero';

import styles from './Hero-search.module.scss';

const HeroSearch: FunctionComponent = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const heroService = useHeroService();
  const searchTerms = useState(new Subject<string>())[0];

  const search = useCallback((term: string): void => {
    searchTerms.next(term);
  }, [searchTerms]);

  useEffect(() => {
    const subscription = searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => heroService.searchHeroes(term)),
      tap(setHeroes),
    ).subscribe();

    return () => {
      subscription.unsubscribe();
    }
  }, [heroService, searchTerms]);

  return (<>
    <div id="search-component">
      <label className={styles.label} htmlFor="search-box">Hero Search</label>
      <input
        className={styles.input}
        id="search-box"
        onChange={(event) => search(event.target.value)}
      />

      <ul className={classNames(styles['search-result'], styles.ul)}>
        { heroes.map(hero =>
          <li className={styles.li} key={hero.id}>
            <Link href={`/detail/${hero.id}`}>
              <a>
                {hero.name}
              </a>
            </Link>
          </li>
        )}
      </ul>
    </div>
  </>)
}

export default HeroSearch
