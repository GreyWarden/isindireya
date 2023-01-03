import Head from 'next/head'
import { CharacterNodeCreator } from '@modules/CharacterNodeCreator/CharacterNodeCreator'

export default function Home () {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div>
          <CharacterNodeCreator />
      </div>
    </>
  )
}
