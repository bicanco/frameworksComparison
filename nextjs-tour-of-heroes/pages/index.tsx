import Head from 'next/head';
import { Provider } from 'react-redux';

import Heroes from '@components/heroes/heroes';
import Messages from '@components/messages/messages';
import { store } from '@store';

import styles from '../styles/App.module.scss';

import type { NextPage } from 'next'

const App: NextPage = () => {
  const title = 'Tour of Heroes';

  return (<>
    <Head>
      <title>Tour Of Heroes - Nextjs(React)</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Provider store={store}>
      <h1>{title}</h1>
      <Heroes />
      <Messages />
    </Provider>
  </>)
}

export default App
