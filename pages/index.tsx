import Head from 'next/head'
import { HelloThere } from '@modules/HelloThere'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div>
          <HelloThere />
      </div>
    </>
  )
}
