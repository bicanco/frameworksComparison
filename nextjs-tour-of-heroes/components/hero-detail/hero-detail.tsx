import { useRouter } from 'next/router';
import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { tap } from 'rxjs';

import { useHeroService } from '@hooks/hero-service';
import { Hero } from '@models/hero';
import { uppercase } from '@utils/uppercase';

import styles from './Hero-detail.module.scss';

interface Props {
  hero?: Hero;
  handleChange?: (value: string) => void;
}

const HeroDetail: FunctionComponent = () => {
  const [hero, setHero] = useState<Hero>();
  const heroService = useHeroService();
  const router = useRouter();
  const { id } = router.query;

  const getHero = useCallback((): void => {
    heroService.getHero(Number(id)).pipe(
      tap(setHero),
    ).subscribe();
  }, [heroService, id]);

  const goBack = (): void => {
    router.back();
  }

  const save = (): void => {
    if (hero) {
      heroService.updateHero(hero).pipe(
        tap(goBack),
      ).subscribe();
    }
  }

  const handleChange = (name: string): void => {
    setHero({...hero!, name});
  }

  useEffect(() => {
    getHero();
  }, [getHero])

  return (<>
    { hero &&
      <div>

        <h2>{uppercase(hero.name)} Details</h2>
        <div><span>id: </span>{hero.id}</div>
        <div>
          <label className={styles.label} htmlFor="name">Hero name: </label>
          <input
            id="name"
            className={styles.input}
            value={hero.name}
            onChange={(event) => handleChange(event.target.value)}
            placeholder="Hero name"
          />
        </div>

        <button className={styles.button} onClick={goBack}>go back</button>
        <button className={styles.button} onClick={save}>save</button>
      </div>
    }
  </>);
}

export default HeroDetail
