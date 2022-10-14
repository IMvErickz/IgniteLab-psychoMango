import './styles/global.css'
import {Logo} from './Logo'
import { Heading } from './styles/components/Heading'
import {Text} from './styles/components/text'
import { TextInput } from './styles/components/TextInput'
import { Envelope } from 'phosphor-react'
import { Key } from 'phosphor-react'
import { Checkbox } from './styles/components/Checkbox'
import { Button } from './styles/components/Button'
import Swal from 'sweetalert2'


export function App() {
  
  function alert() {
    let email = (document.getElementById("email") as HTMLInputElement).value 
    let password = (document.getElementById("password") as HTMLInputElement).value 

    Swal.fire({
    title: "Parabéns!",
      text: "Seu email: " + email,
     icon: "success",
    }).then(() => {
        Swal.fire({
           title: "Parabéns!",
           text: "Sua senha: " + password,
            icon: "success",
           });
      })
  }

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

      <div className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
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
                  <Key/>
                </TextInput.Incon>
                
                <TextInput.Input id='password' type='password' placeholder='********'/>
              </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex intem-center gap-2">
          <Checkbox id='remember'/>
          <Text size='sm' className='text-grayLabel'>Lembre de mim</Text>
        </label>

        <Button type="submit" className='mt-4' onClick={alert}>
          Entrar na plataforma
        </Button>
      </div>

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
function swal(arg0: { title: string; text: string; icon: string }) {
  throw new Error('Function not implemented.')
}

