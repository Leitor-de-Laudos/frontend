import { useState } from "react";
import { ContainerNavBar, NavButton } from "./styles";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export function NavBarMenu() {
  const [active, setActive] = useState("home");

  const handleClick = (name: string) => {
    setActive(name);
  };

  return (
    <ContainerNavBar>
      <div>
        <Link to="/">
          <NavButton
            $isActive={active === "home"}
            onClick={() => handleClick("home")}
          >
            <Icon icon="lucide:home" width="24" height="24" />
          </NavButton>
        </Link>

        <NavButton
          $isActive={active === "inbox"}
          onClick={() => handleClick("inbox")}
        >
          <Icon icon="material-symbols:inbox-outline-rounded" width="24" height="24" />
        </NavButton>
      </div>

      <NavButton
        $isActive={active === "scanner"}
        $isMain
        onClick={() => handleClick("scanner")}
      >
        <Icon icon="streamline:scanner" width="28" height="28" />
      </NavButton>

      <div>
        <NavButton
          $isActive={active === "calendar"}
          onClick={() => handleClick("calendar")}
        >
          <Icon icon="lsicon:calendar-outline" width="24" height="24" />
        </NavButton>

        <Link to="/profile">
          <NavButton
            $isActive={active === "profile"}
            onClick={() => handleClick("profile")}
          >
            <Icon icon="iconoir:profile-circle" width="24" height="24" />
          </NavButton>
        </Link>
      </div>
    </ContainerNavBar>
  );
}
