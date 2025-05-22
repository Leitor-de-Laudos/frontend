import { Icon } from "@iconify/react/dist/iconify.js";
import { ContainerEditInfo } from "./styles";
import { InputPassword } from "@/components/InputPassword";
import { Link } from "react-router-dom";
import { InfoUserContext } from "@/contexts/InfoUserContext";
import { useContext, useState } from "react";

export function ProfileEditInfo() {
  const { profile } = useContext(InfoUserContext); // Supondo que o contexto tenha uma função updateProfile

  // Estado local para gerenciar os valores dos inputs
  const [formData, setFormData] = useState({
    nome: profile.nome || "",
    email: profile.email || "",
    telefone: profile.telefone || "",
    senhaAtual: "",
    novaSenha: "",
  });

  // Função para atualizar o estado ao mudar os inputs
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Função para lidar com a submissão do formulário
  const handleSubmit = (e:any) => {
    e.preventDefault();

    // Validação básica (exemplo)
    if (!formData.senhaAtual) {
      alert("Por favor, insira sua senha atual.");
      return;
    }

    const senhaParaEnviar = formData.novaSenha.trim() === ""
    ? formData.senhaAtual
    : formData.novaSenha;

    // Criar objeto com os dados atualizados
    const updatedProfile = {
      nome: formData.nome,
      email: formData.email,
      telefone: formData.telefone,
      ...(formData.novaSenha && { senha: formData.novaSenha }),
    };

    // Chamar a função do contexto para atualizar o profile
    // updateProfile(updatedProfile)
    //   .then(() => {
    //     alert("Informações atualizadas com sucesso!");
    //   })
    //   .catch((error) => {
    //     alert("Erro ao atualizar informações: " + error.message);
    //   });
  };

  return (
    <ContainerEditInfo>
      <Link to="/profile">
        <Icon icon="si:arrow-left-line" width={24} height={24} color="#000000" />
        <p>Voltar</p>
      </Link>

      <h1>Suas informações pessoais</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Aqui está seu nome</label>
          <input
            type="text"
            name="nome"
            placeholder="Seu Nome"
            value={formData.nome}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Aqui está seu email</label>
          <input
            type="email"
            name="email"
            placeholder="Seu email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="telefone">Aqui está seu telefone</label>
          <input
            type="text"
            name="telefone"
            placeholder="Seu telefone"
            value={formData.telefone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="senhaAtual">Digite sua senha atual</label>
          <InputPassword
            name="senhaAtual"
            value={formData.senhaAtual}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="novaSenha">Digite sua nova senha</label>
          <InputPassword
            name="novaSenha"
            value={formData.novaSenha}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Confirmar</button>
      </form>
    </ContainerEditInfo>
  );
}