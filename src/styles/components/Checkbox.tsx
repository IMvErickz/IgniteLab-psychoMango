import * as CheckboxPri from '@radix-ui/react-checkbox';
import { Check} from 'phosphor-react';
import { ReactNode } from 'react';

export interface CheckboxProps extends CheckboxPri.CheckboxProps{}

export function Checkbox(props: CheckboxProps) {
    return (
        <CheckboxPri.Root className="w-6 h-6 p-[2px] bg-gray-input rounded" {...props}>
            <CheckboxPri.Indicator asChild>
              <Check weight='bold'className="h-5 w-5 text-amarelo-Mango"/>
            </CheckboxPri.Indicator>
        </CheckboxPri.Root>
    )
}