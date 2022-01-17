import { FunctionComponent } from 'react';

import { Hero } from '../../models/hero';
import { uppercase } from '../../utils/uppercase';
import styles from './Hero-detail.module.scss';

interface Props {
  hero?: Hero;
  handleChange: (value: string) => void;
}

const HeroDetail: FunctionComponent<Props> = (props) => {
  return (<>
    { props.hero &&
      <div>

        <h2>{uppercase(props.hero.name)} Details</h2>
        <div><span>id: </span>{props.hero.id}</div>
        <div>
          <label htmlFor="name">Hero name: </label>
          <input
            id="name"
            className={styles.input}
            value={props.hero.name}
            onChange={(event) => props.handleChange(event.target.value)}
            placeholder="name"
          />
        </div>

      </div>
    }
  </>);
}

export default HeroDetail
