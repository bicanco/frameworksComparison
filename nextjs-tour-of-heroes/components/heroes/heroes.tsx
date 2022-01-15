import { FunctionComponent, useState } from 'react';

import { Hero } from '../../models/hero';
import { uppercase } from '../../utils/uppercase';
import styles from './Heroes.module.scss';

const Heroes: FunctionComponent = () => {
  const [hero, setHero] = useState<Hero>({
    id: 1,
    name: 'Windstorm',
  });

  return (<>
    <h2>{uppercase(hero.name)} Details</h2>
    <div><span>id: </span>{hero.id}</div>
    <div>
      <label htmlFor="name">Hero name: </label>
      <input
        id="name"
        value={hero.name}
        onChange={(event) => setHero({...hero, name: event.target.value})}
        placeholder="name"
      />
    </div>
  </>);
}

export default Heroes
