import { Meta, StoryObj } from '@storybook/react'
import {Envelope} from 'phosphor-react'
import { TextInput, TextInputRootProps } from './TextInput'

export default {
    tittle: 'components/Heading',
    component: TextInput.Root,
    args: {
        children: (
            [
            <TextInput.Incon>
              <Envelope/>
            </TextInput.Incon>,
                <TextInput.Input placeholder='Type your email' />
            ]
            
        ),
    },

    argTypes: {
        children: {
        table: {
          disable: true,
   }
},
    },
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}
export const withotIncon: StoryObj<TextInputRootProps> = {
    args: {
        children: <TextInput.Input placeholder='Type your email' />
    }
}
