import { Icon } from "@iconify/react/dist/iconify.js";
import { ContainerMenu } from "./styles";


export function MenuFunctionality(){

  return(
    <ContainerMenu>
      <div>
        <button>
          <Icon icon="streamline:scanner" width="54" height="54"/>
        </button>
        <p>Leitor de laudos</p>
      </div>
      <div>
        <button>
          <Icon icon="la:file-medical-alt" width="54" height="54"/>
        </button>
        <p>Exames</p>
      </div>
      <div>
        <button>
          <Icon icon="solar:jar-of-pills-2-bold" width="54" height="54"/>
        </button>
        <p>Medicações</p>
      </div>
      <div>
        <button>
          <Icon icon="fluent:desktop-pulse-20-regular" width="54" height="54"/>
        </button>
        <p>Consultas</p>
      </div>
    </ContainerMenu>
  )
}