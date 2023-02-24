import { FC, useState } from 'react'
import styles from './CharacterNodeCreator.module.scss'

interface Character {
  name: string
  position: string
  gender: 'male' | 'female' | 'nb'
  description: string
}

export const CharacterNodeCreator: FC = () => {
  const [characters, setCharacters] = useState<Character[]>(() => [{
    name: 'Aye! Aye!',
    position: 'Capitán',
    gender: 'nb',
    description: 'Quién vive en la piña debajo del mar?',
  }])

  return (<div className={ styles['character-node-creator__container'] } >
    { characters.map((character) => (character.name)) }
  </div>)
}
