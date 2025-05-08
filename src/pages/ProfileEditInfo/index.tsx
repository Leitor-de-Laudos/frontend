import { Icon } from "@iconify/react/dist/iconify.js";
import { ContainerEditInfo } from "./styles";
import { InputPassword } from "@/components/InputPassword";
import { InputCPF } from "@/components/InputCPF";
import { Link } from "react-router-dom";


export function ProfileEditInfo(){
  return(
    <ContainerEditInfo>
      <Link to="/profile">
        <Icon icon="si:arrow-left-line" width={24} height={24} color="#000000"/>
        <p>Voltar</p>
      </Link>

      <h1>Suas informações pessoais</h1>

      <form >
      <div>
          <label htmlFor="">Aqui está seu nome</label>
          <input type="text" placeholder="Seu Nome"/>
        </div>
        <div>
          <label htmlFor="">Aqui está seu email</label>
          <input type="email" placeholder="Seu email"/>
        </div>
        <div>
          <label htmlFor="">Aqui está seu cpf</label>
          <InputCPF />
        </div>
        <div>
          <label htmlFor="">Digite sua senha atual</label>
          <InputPassword />
        </div>
        <div>
          <label htmlFor="">Digite sua nova senha</label>
          <InputPassword />
        </div>

        <button type="submit">Confirmar</button>
      </form>
    </ContainerEditInfo>
  )
}