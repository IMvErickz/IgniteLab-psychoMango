import {Meta, StoryObj} from '@storybook/react'
import { Checkbox, CheckboxProps } from './Checkbox'
import {Text} from './text'
export default {
    tittle: 'components/Heading',
    component: Checkbox,
    args: {},
    argTypes: {},
    decorators: [
        (Story) => {
            return (
                <div className="flex intems-center gap-2">
                    {Story()}
                    <Text size='sm'>Lembre de mim</Text>
                </div>
            )
        }
    ]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}