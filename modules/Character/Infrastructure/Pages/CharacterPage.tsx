import Head from 'next/head'
import {
  NodeCreator as CharacterNodeCreator
} from '@modules/Character/Infrastructure/Components/NodeCreator/NodeCreator'

export function CharacterPage () {
  return (
    <>
      <Head>
        <title>Isindireya&apos;s Character Creation</title>
      </Head>
      <div>
        <CharacterNodeCreator />
      </div>
    </>
  )
}
