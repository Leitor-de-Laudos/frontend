import { Icon } from "@iconify/react/dist/iconify.js";
import { ContainerOptionsInfo, ContainerProfile, ProfileMain } from "./styles";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { InfoUserContext } from "@/contexts/InfoUserContext";


export function ProfileInfo() {
  const { profile } = useContext(InfoUserContext);

  return (
    <ContainerProfile>
      <ProfileMain>
        <h1>Perfil</h1>
        <div>
          <span><Icon icon="mynaui:pencil" width="16" height="16"/></span>
        </div>
        <h2>{profile.nome}</h2>
      </ProfileMain>

      <ContainerOptionsInfo>
        <div>
          <span><Icon icon="material-symbols:info-outline" width="18" height="18"/></span>
          <Link to="/profile/edit">
            <p>Informações</p>
          </Link>
        </div>
        <div>
          <span><Icon icon="garden:exit-fill-16" width="18" height="18"/></span>
          <p>Sair</p>
        </div>
      </ContainerOptionsInfo>
    </ContainerProfile>
  )
}