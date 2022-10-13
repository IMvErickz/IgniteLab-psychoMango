import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface ButtonProps{
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';
    return (
        <Comp className={clsx(
            'py-4 px-3 bg-amareloMango rounded-2xl font-semibold text-black text-sm w-full transition-colors hover:amareloHover focus:ring-2 ring-white',
        )}>{children}</Comp>
    )
}