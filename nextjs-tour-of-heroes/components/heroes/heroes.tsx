import classNames from 'classNames';
import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { tap } from 'rxjs';

import HeroDetail from '@components/hero-detail/hero-detail';
import { useAppDispatch } from '@hooks';
import { useHeroService } from '@hooks/hero-service';
import { Hero } from '@models/hero';
import { MessageServiceActions as MSA } from '@store/message-service';

import styles from './Heroes.module.scss';

const Heroes: FunctionComponent = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [selectedHero, setSelectedHero] = useState<Hero>();
  const dispatch = useAppDispatch();
  const heroService = useHeroService();

  const getHeroes = useCallback(() => {
    heroService.getHeroes().pipe(
      tap(setHeroes),
    ).subscribe();
  }, [heroService]);

  const onSelect = (hero: Hero): void => {
    setSelectedHero(hero);
    dispatch(MSA.add(`HeroesComponent: Selected hero id=${hero.id}`));
  };

  const handleChange = (name: string): void => {
    const index = heroes.indexOf(selectedHero!);
    const newHero = {...selectedHero!, name};
    const newArray = [...heroes];
    newArray[index] = newHero;
    setHeroes(newArray);
    setSelectedHero(newHero);
  };

  useEffect(() => {
    getHeroes()
  }, [getHeroes]);

  return (<>
    <h2>My Heroes</h2>
    <ul className={styles.heroes}>
      {heroes.map((hero) =>
        <li
          key={hero.id}
          onClick={() => onSelect(hero)}
          className={classNames(
            {[styles.selected]: hero === selectedHero}
          )}
        >
          <span className={styles.badge}>{hero.id}</span> {hero.name}
        </li>
      )}
    </ul>

    <HeroDetail hero={selectedHero} handleChange={handleChange} />
  </>);
};

export default Heroes
