import { Icon } from "@iconify/react/dist/iconify.js";
import { ContainerSignIn, HeaderSignIn } from "./styles";
import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <ContainerSignIn>
      <HeaderSignIn>
        <main>
          <Icon icon="famicons:camera-outline" width={40} height={40} />
          <h2>Leitor de Laudos</h2>
        </main>
        <h1>Seja bem-vindo(a)!👋</h1>
      </HeaderSignIn>
      <form >
        <div>
          <label htmlFor="">Seu email</label>
          <input type="email" name="email_input" id="email_input" placeholder="Digite seu email" />
        </div>
        <div>
         <label htmlFor="">Sua senha</label>
          <input type="password" name="password_input" id="password_input" placeholder="Digite sua senha"/>
        </div>
        <button type="submit">Entrar</button>
      </form>
      
      <Link to="/auth/signup">
        Não tem uma conta? <span>clique aqui!</span>
      </Link>
      
    </ContainerSignIn>
  )
}