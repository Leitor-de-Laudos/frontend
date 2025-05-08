import { Outlet } from "react-router-dom";
import { ContainerRound, LayoutContainer } from "./styles";
import { NavBarMenu } from "@/components/NavBarMenu";

export function DefaultLayout() {
  return (
    <div>
      <LayoutContainer>
      <ContainerRound/>
        <Outlet/>
        <NavBarMenu />
      </LayoutContainer>
    </div>
  )
}