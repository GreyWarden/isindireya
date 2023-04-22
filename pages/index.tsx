import Head from 'next/head'
import { NodeCreator as CharacterNodeCreator } from '@modules/Character/NodeCreator/NodeCreator'

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
