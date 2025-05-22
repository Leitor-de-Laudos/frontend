import { createContext, ReactNode, useState } from "react";
import { apiReminder } from "@/lib/axiosReminder";

export interface ReminderTypeResponse {
  id: string;
  idUser: string;
  nameReminder: string;
  quantReminder: string;
  dosageReminder: number;
  dosageUnitReminder: "mg" | "ml" | "g" | "mcg";
  weekDayReminder: string[];
  hourReminder: string;
}

export interface ReminderTypeRequest {
  idUser: string;
  nameReminder: string;
  quantReminder: string;
  dosageReminder: number;
  dosageUnitReminder: "mg" | "ml" | "g" | "mcg";
  weekDayReminder: string[];
  hourReminder: string;
}


interface ReminderContextType {
  createReminder: (data: ReminderTypeRequest) => Promise<ReminderTypeResponse>;
  listReminders: (userId: string) => Promise<void>;
  reminderList: ReminderTypeResponse[];
}

interface ReaderReportProviderProps {
  children: ReactNode;
}

export const ReminderContext = createContext({} as ReminderContextType);

export function ReminderProvider({ children }: ReaderReportProviderProps) {
  const [reminderList, setReminderList] = useState<ReminderTypeResponse[]>([]);

  async function createReminder(data: ReminderTypeRequest): Promise<ReminderTypeResponse> {
  try {
    const response = await apiReminder.post<ReminderTypeResponse>(
      "/api/reminders",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao criar lembrete:", error);
    throw error;
  }
}


  async function listReminders(userId: string) {
    try {
      
      if(userId == undefined || userId == null || userId == '') {
        return;
      }

      const response = await apiReminder.get<ReminderTypeResponse[]>(
        `/api/reminders/user/${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setReminderList(response.data);
    } catch (error) {
      console.error("Erro ao listar lembretes:", error);
      throw error;
    }
  }

  return (
    <ReminderContext.Provider value={{ createReminder, listReminders, reminderList }}>
      {children}
    </ReminderContext.Provider>
  );
}
