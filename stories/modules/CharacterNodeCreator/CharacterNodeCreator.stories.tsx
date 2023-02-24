import type { Meta } from '@storybook/react'
import { CharacterNodeCreator } from '@modules/CharacterNodeCreator/CharacterNodeCreator'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof CharacterNodeCreator> = {
  title: 'Example/CharacterNodeCreator',
  component: CharacterNodeCreator,
}

export default meta

export const Default = () => (<CharacterNodeCreator />)
