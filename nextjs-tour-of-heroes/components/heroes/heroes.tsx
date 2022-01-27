import classNames from 'classnames';
import Link from 'next/link';
import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { tap } from 'rxjs';

import { useHeroService } from '@hooks/hero-service';
import { Hero } from '@models/hero';

import styles from './Heroes.module.scss';

const Heroes: FunctionComponent = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [heroName, setHeroName] = useState<string>();
  const heroService = useHeroService();

  const getHeroes = useCallback(() => {
    heroService.getHeroes().pipe(
      tap(setHeroes),
    ).subscribe();
  }, [heroService]);

  const addHero = (name: string = ''): void => {
    name = name.trim();
    if (!name) { return; }
    heroService.addHero({ name } as Hero).pipe(
      tap(hero => {
        setHeroes([...heroes, hero]);
      }),
    ).subscribe();
  }

  const deleteHero = (hero: Hero): void => {
    setHeroes(heroes.filter(h => h !== hero));
    heroService.deleteHero(hero.id).subscribe();
  }

  useEffect(() => {
    getHeroes()
  }, [getHeroes]);

  return (<>
    <h2>My Heroes</h2>

    <div>
      <label htmlFor="new-hero">Hero name: </label>
      <input
        id="new-hero"
        className={styles.input}
        value={heroName}
        onChange={(event) => setHeroName(event.target.value)} />

      <button
        className={classNames(styles['add-button'], styles.button)}
        onClick={() => {addHero(heroName); setHeroName('')}}
      >
        Add hero
      </button>
    </div>

    <ul className={styles.heroes}>
      {heroes.map((hero) =>
        <li
          key={hero.id}
        >
          <Link href={`/detail/${hero.id}`}>
            <a>
              <span className={styles.badge}>{hero.id}</span> {hero.name}
            </a>
          </Link>

          <button
            className={classNames(styles.button, styles.delete)}
            title="delete hero"
            onClick={() => deleteHero(hero)}
          >x</button>
        </li>
      )}
    </ul>
  </>);
};

export default Heroes
