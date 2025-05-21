import { Icon } from "@iconify/react/dist/iconify.js";
import { ContainerNavBar } from "./styles";
import { Link } from "react-router-dom";

export function NavBarMenu(){
  return(
    <ContainerNavBar>

      <div>
        <Link to="/">
          <button><Icon icon="lucide:home" width="24" height="24"/></button>
        </Link>
        <Link to="/reminder">
        <button><Icon icon="material-symbols:inbox-outline-rounded" width="24" height="24"/></button>
        </Link>
      </div>
      <button>
        <Icon icon="streamline:scanner" width="28" height="28"/>
      </button>
      <div>
        <button><Icon icon="lsicon:calendar-outline" width="24" height="24"/></button>
        <Link to="/profile">
          <button><Icon icon="iconoir:profile-circle" width="24" height="24"/></button>
        </Link>
      </div>
      
    </ContainerNavBar>
  )
}