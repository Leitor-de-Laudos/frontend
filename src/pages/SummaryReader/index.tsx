import { Icon } from "@iconify/react/dist/iconify.js";
import { SummaryContainer } from "./styles";
import { Link, useParams } from "react-router-dom";

import { useContext, useEffect } from "react";
import { ReaderReportContext } from "@/contexts/ReaderReportContext";

export function SummaryReader() {
  const { getReaderById, readerSpecific } = useContext(ReaderReportContext);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getReaderById(id);
    }
  }, [id]);

  return (
    <SummaryContainer>
      <header>
        <Link to="/reader/historic">
          <Icon icon="garden:chevron-left-fill-16" height={16} width={16} />
          <span>Voltar</span>
        </Link>
        <h1>Resumo do Laudo</h1>
        <button type="button">
          <Icon icon="solar:trash-bin-trash-outline" height={16} width={16} />
        </button>
      </header>
      <main>
        <p>{readerSpecific?.content || "Carregando..."}</p>
      </main>
    </SummaryContainer>
  );
}