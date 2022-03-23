import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spotify clone</title>
      </Head>

      <h1>Spotify build</h1>

    </div>
  )
}
