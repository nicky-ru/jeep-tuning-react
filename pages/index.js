import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Jumbotron from "../components/jumbotron";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>JeepService</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <header><Header/></header>
        <main className={styles.main}>
            <Jumbotron/>

        </main>
      <footer className={styles.footer}/>
    </div>
  )
}
