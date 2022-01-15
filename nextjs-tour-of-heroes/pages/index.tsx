import type { NextPage } from 'next'

import Heroes from '../components/heroes/heroes';
import styles from '../styles/App.module.scss';

const App: NextPage = () => {
  const title = 'Tour of Heroes';

  return (<>
    <h1>{title}</h1>
    <Heroes />
  </>)
}

export default App
