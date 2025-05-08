import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { AuthLayout } from "./layouts/AuthLayout";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "@/pages/SignUp/index";
import { ProfileInfo } from "./pages/ProfileInfo";
import { ProfileEditInfo } from "./pages/ProfileEditInfo";
import { PrivateRoute } from "./components/PrivateRoute";  // Importando o PrivateRoute

export function Router() {
  return (
    <Routes>
        <Route path="/" element={<DefaultLayout />}>
            {/* Use PrivateRoute para as rotas protegidas */}
            <Route index element={<PrivateRoute element={<Home />} path="/" />} />
            <Route path="/profile" element={<PrivateRoute element={<ProfileInfo />} path="/profile" />} />
            <Route path="/profile/edit" element={<PrivateRoute element={<ProfileEditInfo />} path="/profile/edit" />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
        </Route>
    </Routes>
  )
}