import { createContext, ReactNode, useState, useEffect } from "react";
import { api } from "@/lib/axios";

interface ProfileInfoTypeResponse {
  id: string;
  nome: string;
  email: string;
  telefone: string;
}

interface IssuesContextType {
  profile: ProfileInfoTypeResponse;
  login: (email: string, senha: string) => Promise<boolean>;
  register: (nome: string, email: string, senha: string, telefone: string) => Promise<boolean>;
}

interface InfoUserProviderProps {
  children: ReactNode;
}

export const InfoUserContext = createContext({} as IssuesContextType);

export function InfoUserProvider({ children }: InfoUserProviderProps) {

  const [profile, setProfile] = useState<ProfileInfoTypeResponse>({} as ProfileInfoTypeResponse);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      api
        .get("/usuarios/me")
        .then((response) => {
          setProfile(response.data);
        })
        .catch((error) => {
          console.error("Erro ao carregar perfil:", error);
        });
    }
  }, []);


  async function login(email: string, senha: string) {
    try {
      const response = await api.post("/auth/login", { email, senha });
      const { token } = response.data;

      localStorage.setItem("authToken", token);

      const profileResponse = await api.get("/usuarios/me");
      console.log(profileResponse.data);
      setProfile(profileResponse.data);

      return true;
    } catch (error) {
      console.error("Erro no login:", error);
      return false;
    }
  }

  async function register(nome: string, email: string, senha: string, telefone: string) {
    try {
      await api.post('/usuarios', { nome, email, telefone, senha });      
  
      return true;
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
      return false;
    }
  }
  function logout() {
    localStorage.removeItem("authToken");
    delete api.defaults.headers.common["Authorization"];
    setProfile({} as ProfileInfoTypeResponse);
  }

  return (
    <InfoUserContext.Provider value={{ profile, login, register }}>
      {children}
    </InfoUserContext.Provider>
  );
}
