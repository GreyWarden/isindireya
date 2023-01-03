import { Component } from 'react'

interface Character {
  name: string
  position: string
  gender: 'male' | 'female' | 'nb'
  description: string
}

interface State {
  characters: Character[]
}

export class CharacterNodeCreator extends Component {
  state: State = {
    characters: [],
  }

  componentDidMount () {
    this.setState((state: State) => ({
      characters: [
        ...state.characters,
        {
          name: 'Aye! Aye!',
          position: 'Capitán',
          gender: 'nb',
          description: 'Quién vive en la piña debajo del mar?',
        },
      ],
    }))
  }

  render () {
    return (<>
      { this.state.characters.map((character) => (character.name)) }
    </>)
  }
}
