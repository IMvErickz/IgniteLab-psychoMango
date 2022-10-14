import './styles/global.css'
import {Logo} from './Logo'
import { Heading } from './styles/components/Heading'
import {Text} from './styles/components/text'
import { TextInput } from './styles/components/TextInput'
import { Envelope } from 'phosphor-react'
import { Lock } from 'phosphor-react'
import { Checkbox } from './styles/components/Checkbox'
import { Button } from './styles/components/Button'


export function App() {

  return (
    <div className="w-screen h-screen bg-deskBackground flex flex-col items-center justify-center text-labelHead">
      <header className='flex flex-col items-center'>
          <Logo />
      
          <Heading size="lg" className="mt-4">
            PsychoMango
          </Heading>
      
          <Text size='lg' className='text-grayLabel mt-1'>
             Faça login e comece a usar!
        </Text>
      </header>  

      <form className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text className='font-semibold'>
            Endereço de email
          </Text>
          <TextInput.Root>
              <TextInput.Incon>
                <Envelope/>
              </TextInput.Incon>
              
              <TextInput.Input type="email" id='email' placeholder='Digite seu email'/>
            </TextInput.Root>
        </label>
        
        <label htmlFor="password" className='flex flex-col gap-3'>
            <Text className='font-semibold'>
              Sua senha
            </Text>
            <TextInput.Root>
                <TextInput.Incon>
                  <Lock/>
                </TextInput.Incon>
                
                <TextInput.Input id='password' type='password' placeholder='********'/>
              </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex intem-center gap-2">
          <Checkbox id='remember'/>
          <Text size='sm' className='text-grayLabel'>Lembre de mim</Text>
        </label>

        <Button type="submit" className='mt-4'>
          Entrar na plataforma
        </Button>
      </form>

      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChild size='sm'>
           <a href="" className='text-grayLabel underline hover:text-labelHead'>Esqueceu sua senha?</a>
        </Text>
        <Text asChild size='sm'>
        <a href="" className='text-grayLabel underline hover:text-labelHead'>Cadastre-se aqui</a>
        </Text>
      </footer>
    </div>
    

  )
}
