import Link from 'next/link';
import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { map, tap } from 'rxjs';

import { useHeroService } from '@hooks/hero-service';
import { Hero } from '@models/hero';

import styles from './Dashboard.module.scss';

const Dashboard: FunctionComponent = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const heroService = useHeroService();

  const getHeroes = useCallback((): void => {
    heroService.getHeroes().pipe(
      map(heroes => heroes.slice(1, 5)),
      tap(setHeroes),
    ).subscribe();
  }, [heroService]);

  useEffect(() => {
    getHeroes()
  }, [getHeroes]);

  return (<>
    <h2 className={styles.h2}>Top Heroes</h2>
    <div className={styles['heroes-menu']}>
      {heroes.map(hero =>
        <Link href={`/detail/${hero.id}`} key={hero.id}>
          <a className={styles.a}>
            {hero.name}
          </a>
        </Link>
      )}
    </div>
  </>)
}

export default Dashboard
