import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { AuthLayout } from "./layouts/AuthLayout";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "@/pages/SignUp/index";

export function Router() {
  return (
    <Routes>
        <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
            {/* <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} /> */}
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
    </Routes>
  )
}