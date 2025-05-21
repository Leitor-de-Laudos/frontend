import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { AuthLayout } from "./layouts/AuthLayout";
import { NavBarLayout } from "./layouts/NavBarMenu";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "@/pages/SignUp/index";
import { ProfileInfo } from "./pages/ProfileInfo";
import { ProfileEditInfo } from "./pages/ProfileEditInfo";
import { Reminder } from "./pages/Reminder";
 // Importando o PrivateRoute

export function Router() {
  return (
    <Routes>
        <Route path="/" element={<DefaultLayout />}>
            
            <Route index element={<Home />} />
            <Route path="/profile" element={<ProfileInfo />} />
            <Route path="/profile/edit" element={<ProfileEditInfo />} />
        </Route>
        <Route path="/" element={<NavBarLayout />}>
            
            <Route path="/reminder" element={<Reminder/>}/>

        </Route>
        <Route path="/auth" element={<AuthLayout />}>
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
        </Route>
    </Routes>
  )
}