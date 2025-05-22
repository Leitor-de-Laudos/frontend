import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import { AuthLayout } from "./layouts/AuthLayout";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "@/pages/SignUp/index";
import { ProfileInfo } from "./pages/ProfileInfo";
import { ProfileEditInfo } from "./pages/ProfileEditInfo";

import { ReaderReport } from "./pages/ReaderReport";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { SummaryReader } from "./pages/SummaryReader";
import { HistoricReaderReport } from "./pages/HistoricReaderReport";

import { Reminder } from "./pages/Reminder";
import { Archives } from "./pages/Archives";
import { ReminderForm } from "./pages/ReminderForm";
import { PrivateRoute } from "./components/PrivateRoute";  // Importando o PrivateRoute

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<ProfileInfo />} />
        <Route path="profile/edit" element={<ProfileEditInfo />} />
      </Route>

      <Route path="/" element={<DefaultLayout />}>
        <Route path="/reader" element={<ReaderReport />} />
        <Route path="/reader/summary/:id" element={<SummaryReader />} />
        <Route path="/reader/historic" element={<HistoricReaderReport />} />
        <Route path="/reminder" element={<Reminder />} />
        <Route path="/reminder/create" element={<ReminderForm />} />
        <Route path="/archives" element={<Archives />} />
      </Route>

      <Route path="/auth" element={<AuthLayout />}>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
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
  );
}