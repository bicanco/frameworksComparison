import Link from 'next/link';
import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { tap } from 'rxjs';

import { useHeroService } from '@hooks/hero-service';
import { Hero } from '@models/hero';

import styles from './Heroes.module.scss';

const Heroes: FunctionComponent = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const heroService = useHeroService();

  const getHeroes = useCallback(() => {
    heroService.getHeroes().pipe(
      tap(setHeroes),
    ).subscribe();
  }, [heroService]);

  useEffect(() => {
    getHeroes()
  }, [getHeroes]);

  return (<>
    <h2>My Heroes</h2>
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
        </li>
      )}
    </ul>
  </>);
};

export default Heroes
