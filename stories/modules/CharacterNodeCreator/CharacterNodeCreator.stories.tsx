import type { Meta } from '@storybook/react'
import { NodeCreator } from '@modules/Character/Infrastructure/Components/NodeCreator/NodeCreator'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof NodeCreator> = {
  title: 'Example/NodeCreator',
  component: NodeCreator,
}

export default meta

export const Default = () => (<NodeCreator />)
