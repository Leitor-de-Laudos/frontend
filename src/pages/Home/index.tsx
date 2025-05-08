import { MenuFunctionality } from "@/components/MenuFunctionality";
import { ContainerHome, ContainerProfile} from "./styles";
import { HistoricReminders } from "@/components/HistoricReminders";

export function Home() {
  return (
    <ContainerHome>
      <ContainerProfile>
        <div>
          <h1>Olá Bem Vindo(a)</h1>
          <h2>Camila Queiroz</h2>
        </div>

        <button>
          <img src="https://i.pinimg.com/474x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg" alt="" />
        </button>
      </ContainerProfile>
 
      <MenuFunctionality />

      <HistoricReminders />
    </ContainerHome>
  )
}