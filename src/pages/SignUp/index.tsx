import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import { ContainerSignUp, HeaderSignUp } from "./styles";
import { InputPassword } from "@/components/InputPassword";
import { InputCPF } from "@/components/InputCPF";
import { useState } from "react";

export function SignUp() {
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLElement>){
    event.preventDefault();
    
    if(password === passwordAgain) {
      console.log("Passwords match");
    }
  }

  return (
    <ContainerSignUp>
      <HeaderSignUp>
        <main>
          <Icon icon="famicons:camera-outline" width={40} height={40} />
          <h2>Leitor de Laudos</h2>
        </main>
        <h1>Cadastre-se para acessar</h1>
      </HeaderSignUp>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email_input">Digite seu email</label>
          <input type="email" name="email_input" id="email_input" placeholder="Digite seu email" required />
        </div>
        <div>
          <label htmlFor="cpf_input">Digite seu cpf</label>
          <InputCPF name="cpf_input" id="cpf_input" placeholder="Digite seu cpf" required/>
        </div>
        <div>
          <label htmlFor="password_input">Escreva uma senha</label>
          <InputPassword 
            name="password_input" 
            id="password_input" 
            placeholder="Digite uma senha" 
            value={password}
            onChange={(el) =>{
              setPassword(el.target.value);
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="password_again_input">Escreva novamente a senha</label>
          <InputPassword 
            name="password_again_input" 
            id="password_again_input" 
            placeholder="Digite a senha novamente" 
            value={passwordAgain}
            onChange={(el) =>{
              setPasswordAgain(el.target.value);
            }}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      
      <Link to="/auth/signin">
        Já tem uma conta? <span>clique aqui!</span>
      </Link>
      
    </ContainerSignUp>
  )
}