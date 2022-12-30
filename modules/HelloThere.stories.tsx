import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HelloThere } from '@modules/HelloThere'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Modules/HelloThere',
    component: HelloThere,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof HelloThere>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HelloThere> = (args) => <HelloThere {...args} />;

export const HelloThereStory = Template.bind({});
