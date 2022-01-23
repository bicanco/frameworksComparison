import '../styles/globals.scss';

import Head from 'next/head';
import Link from 'next/link';
import { Provider } from 'react-redux';

import Messages from '@components/messages/messages';
import { store } from '@store';

import styles from '../styles/App.module.scss';

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const title = 'Tour of Heroes';

  return (<>
    <Head>
      <title>Tour Of Heroes - Nextjs(React)</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Provider store={store}>
      <h1 className={styles.h1}>{title}</h1>
      <nav className={styles.nav}>
        <Link href="/dashboard">
          <a>Dashboard</a>
        </Link>
        <Link href="/heroes">
          <a>Heroes</a>
        </Link>
      </nav>
      <Component {...pageProps} />
      <Messages />
    </Provider>
  </>)
}

export default MyApp
