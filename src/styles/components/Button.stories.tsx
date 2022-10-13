import {Meta, StoryObj} from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
    tittle: 'components/Heading',
    component: Button,
    args: {
        children: 'Create account',
    },

    argTypes: {},
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}