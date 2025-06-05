import { ExamContainer } from "@/components/ExamContainer";
import { HistoricContainer } from "./styles";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext, useEffect } from "react";
import { ReaderReportContext } from "@/contexts/ReaderReportContext";
import { InfoUserContext } from "@/contexts/InfoUserContext";

export function HistoricReaderReport() {
  const { getReaderList, readerList } = useContext(ReaderReportContext);
  const { profile } = useContext(InfoUserContext);

  useEffect(() => {
    if (profile?.id) {
      getReaderList(profile.id);
    }
  }, [profile.id]);

  const isArray = Array.isArray(readerList);

  return (
    <HistoricContainer>
      <header>
        <Link to="/">
          <Icon icon="garden:chevron-left-fill-16" height={16} width={16} />
          <span>Voltar</span>
        </Link>
        <h1>Exames</h1>
        <span>
          <Link to="/reader">
            <Icon icon="line-md:plus" height={16} width={16} />
          </Link>
        </span>
      </header>

      {!isArray ? (
        <p style={{ padding: "1rem", color: "gray" }}>Nenhum exame encontrado ou erro ao carregar.</p>
      ) : readerList.length === 0 ? (
        <p style={{ padding: "1rem", color: "gray" }}>Nenhum exame disponível.</p>
      ) : (
        readerList.map((el) => (
          <ExamContainer
            key={el.id}
            id={el.id}
            date={new Date(el.createdAt).toLocaleDateString("pt-BR", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
            name={el.title}
            nameUser={profile.nome}
          />
        ))
      )}
    </HistoricContainer>
  );
}
