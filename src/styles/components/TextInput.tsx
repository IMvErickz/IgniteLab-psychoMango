import { clsx } from 'clsx';
import { Children, InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export interface TextInputRootProps{
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className='flex intems-center gap-3 h-12 py-4 px-3 rounded-2xl w-full bg-grayInput focus-within:ring-2 ring-amarelo-Mango'>
            {props.children}
        </div>
    )
}

export interface TextInputInconProps{
    children: ReactNode;
}

function TextInputIncon(props: TextInputInconProps) {
    return (
        <Slot className="w-6 h-6 text-grayLabel">
            {props.children}
    </Slot>
    )
}
export interface InputInputProps extends InputHTMLAttributes<HTMLInputElement>{}


function Input(props: InputInputProps) {
    return (

        
        <input className="bg-transparent flex-1 outline-none text-labelHead text-xs placeholder:text-grayLabel"
        {...props}
            />
        
    )
}

export const TextInput = {
    Root: TextInputRoot,
    Input: Input,
    Incon: TextInputIncon
}