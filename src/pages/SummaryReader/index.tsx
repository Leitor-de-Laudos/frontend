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

  
  const extractExplanationAndConclusion = (content: string) => { // Função para extrair partes do texto
    const match = content.match(/\*\*Explicação\*\*(.*?)\*\*Conclusão\*\*(.*)/s);
    if (!match) return { explanation: content, conclusion: "" };

    const [, explanation, conclusion] = match;
    return {
      explanation: explanation.trim(),
      conclusion: conclusion.trim(),
    };
  };

  const { explanation, conclusion } = extractExplanationAndConclusion(readerSpecific?.content || "");

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
        {readerSpecific?.content ? (
          <>
            <div>
              <h2>Explicação</h2>
              <p>{explanation}</p>
            </div>
            <div>
              <h2>Conclusão</h2>
              <p>{conclusion}</p>
            </div>
          </>
        ) : (
          <p>Carregando...</p>
        )}
      </main>
    </SummaryContainer>
  );
}
