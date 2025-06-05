import { createContext, ReactNode, useState } from "react";
import axios from "axios";

interface ReaderReportInfoTypeResponse {
  id: string;
  content: string;
  userId: string;
  createdAt: string;
  title: string;
}

interface ReaderReportContextType {
  readerSummary: ReaderReportInfoTypeResponse; 
  readerSpecific: ReaderReportInfoTypeResponse;
  readerList: ReaderReportInfoTypeResponse[];
  getReaderList: (userId: string) => Promise<ReaderReportInfoTypeResponse[]>;
  getReaderById: (id: string) => Promise<ReaderReportInfoTypeResponse>;
  sendFile: (file: File, userId: string) => Promise<ReaderReportInfoTypeResponse>;
  deleteReportReader: (id: string ) => Promise<void>;
}


interface ReaderReportProviderProps {
  children: ReactNode;
}

const urlReader = "http://4cb1-2804-d4b-7a9f-4900-6d55-8c5f-377d-14c1.ngrok-free.app"

export const ReaderReportContext = createContext({} as ReaderReportContextType);

export function ReaderReportProvider({ children }: ReaderReportProviderProps) {
  const [readerSummary, setReaderSummary] = useState<ReaderReportInfoTypeResponse>({} as ReaderReportInfoTypeResponse);
  const [readerSpecific, setReaderSpecific] = useState<ReaderReportInfoTypeResponse>({} as ReaderReportInfoTypeResponse)
  const [readerList, setReaderList] = useState<ReaderReportInfoTypeResponse[]>([]);

  async function getReaderList(userId: string): Promise<ReaderReportInfoTypeResponse[]> {
    try {
      const response = await axios.get<ReaderReportInfoTypeResponse[]>(urlReader+"/api/list", {
        params: { userId },
      });
      setReaderList(response.data);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar lista de relatórios:", error);
      setReaderList([]);
      return []; 
    }
  }


  async function getReaderById(id: string): Promise<ReaderReportInfoTypeResponse> {
    try {
      const response = await axios.get<ReaderReportInfoTypeResponse>(urlReader+`/api/report/laudo/${id}`);
      setReaderSpecific(response.data);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar relatório:", error);
      // Retorne um objeto vazio com valores padrão válidos
      return {
        id: '',
        content: '',
        userId: '',
        createdAt: '',
        title: ''
      };
    }
  }


  async function sendFile(file: File, userId: string) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("userId", userId);

    try {
      const response = await axios.post<ReaderReportInfoTypeResponse>(urlReader+"/api/scanner", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setReaderSummary(response.data);
      
      return response.data;
    } catch (error) {
      console.error("Erro ao enviar arquivo:", error);
      throw error;
    }
  }

  async function deleteReportReader(id: string): Promise<void> {
    try {
      await axios.delete(urlReader+`/api/scanner/delete/${id}`);
      
      
      setReaderList((prev) => prev.filter((report) => report.id !== id)); // Atualiza a lista 
    } catch (error) {
      console.error("Erro ao remover o relatório:", error);
      throw error;
    }
  }

  return (
    <ReaderReportContext.Provider value={{ readerSummary, readerSpecific, readerList, getReaderList, getReaderById, sendFile, deleteReportReader }}>
      {children}
    </ReaderReportContext.Provider>
  );
}
