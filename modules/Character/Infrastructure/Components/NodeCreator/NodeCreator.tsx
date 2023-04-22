import { FC, useState } from 'react'
import styles from './NodeCreator.module.scss'

interface Character {
  name: string
  position: string
  gender: 'male' | 'female' | 'nb'
  description: string
}

export const NodeCreator: FC = () => {
  const [characters, setCharacters] = useState<Character[]>(() => [])

  return (<div className={ styles['character-node-creator__container'] } >
    <div>
      Actions
    </div>
    <div>
      NodeCreator
    </div>
    <div>NodeList</div>
  </div>)
}
