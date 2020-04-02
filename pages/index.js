import Head from 'next/head'
import {KeyHandler} from '../components/KeyHandler'

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">
        Welcome to KeyCheck!
      </h1>
      <KeyHandler/>
    </main>
  </div>
)

export default Home
