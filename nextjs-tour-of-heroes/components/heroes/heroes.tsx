import classNames from 'classNames';
import { FunctionComponent, useState } from 'react';

import { Hero } from '../../models/hero';
import HeroDetail from '../hero-detail/hero-detail';
import { HEROES } from '../mock-heroes';
import styles from './Heroes.module.scss';

const Heroes: FunctionComponent = () => {
  const [heroes, setHeroes] = useState<Hero[]>(HEROES);
  const [selectedHero, setSelectedHero] = useState<Hero>();

  const onSelect = (hero: Hero): void => {
    setSelectedHero(hero);
  }

  const handleChange = (name: string): void => {
    const index = heroes.indexOf(selectedHero!);
    const newHero = {...selectedHero!, name};
    const newArray = [...heroes];
    newArray[index] = newHero;
    setHeroes(newArray);
    setSelectedHero(newHero);
  }

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
}

export default Heroes
