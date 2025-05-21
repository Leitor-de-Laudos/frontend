import { NavBarMenu } from "@/components/NavBarMenu";
import { LayoutContainer } from "./syles";
import { Outlet } from "react-router-dom";

export function NavBarLayout() {
    return(
        <LayoutContainer>
            <NavBarMenu/>
            <Outlet/>
        </LayoutContainer>
    )
}