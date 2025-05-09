import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { AuthLayout } from "./layouts/AuthLayout";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "@/pages/SignUp/index";
import { ProfileInfo } from "./pages/ProfileInfo";
import { ProfileEditInfo } from "./pages/ProfileEditInfo";
 // Importando o PrivateRoute

export function Router() {
  return (
    <Routes>
        <Route path="/" element={<DefaultLayout />}>
            
            <Route index element={<Home />} />
            <Route path="/profile" element={<ProfileInfo />} />
            <Route path="/profile/edit" element={<ProfileEditInfo />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
        </Route>
    </Routes>
  )
}