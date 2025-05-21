import React, { useState } from "react";
import { ContainerReminder, HeaderLembretes, BotaoIcone, CartaoLembrete, CirculoData, DataColuna, BotaoChecar, ColunaDetalhes, LinhaItens } from "./styles";
//simulacao, trocar para backend


                    // Tipagem dos lembretes
                        interface ReminderItem {
                            text: string;
                            time: string;
                        }
                        
                        interface ReminderData {
                            id: number;
                            dia: number;
                            diaSemana: string;
                            done: boolean;
                            items: ReminderItem[];
                        }
                        
export function Reminder(){
    const [reminders, setReminders] = useState<ReminderData[]>([
        {
          id: 1,
          dia: 21,
          diaSemana: "QUA",
          done: false,
          items: [
            { text: "Vitamina D\n  1 Capsula125mg", time: "09:00" },
            { text: "Mirtazapina\n  1 Comprimido 50mg", time: "11:30" },
          ],
        },
        {
          id: 2,
          dia: 22,
          diaSemana: "QUI",
          done: false,
          items: [
            { text: "Consulta | Checkup\n  Hosp. São Camilo", time: "08:30" },
            { text: "Vitamina D\n  1 Capsula125mg", time: "09:00" },
            { text: "Mirtazapina\n  1 Comprimido 50mg", time: "11:30" },
          ],
        },
      ]);
    
      // 2) Função para alternar o done
      const onToggleDone = (id: number) => {
        setReminders((prev) =>
          prev.map((r) =>
            r.id === id ? { ...r, done: !r.done } : r
          )
        );
      };
    
    return(
        <>
        <ContainerReminder>
            <HeaderLembretes>
                <h1>Lembretes</h1>
            </HeaderLembretes>
            <div>
                <BotaoIcone>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"/></svg>
                </BotaoIcone>
                <BotaoIcone>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1"/><path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3zM16 5l3 3"/></g></svg>
                </BotaoIcone>
                <BotaoIcone>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m16.24 3.56l4.95 4.94c.78.79.78 2.05 0 2.84L12 20.53a4.01 4.01 0 0 1-5.66 0L2.81 17c-.78-.79-.78-2.05 0-2.84l10.6-10.6c.79-.78 2.05-.78 2.83 0M4.22 15.58l3.54 3.53c.78.79 2.04.79 2.83 0l3.53-3.53l-4.95-4.95z"/></svg>
                </BotaoIcone>
            </div>
        </ContainerReminder>

        {reminders.map((rem) => (
            <CartaoLembrete key={rem.id}>
                <DataColuna>

                    <CirculoData>
                        <span>{rem.dia}</span>
                        <small>{rem.diaSemana}</small>
                    </CirculoData>
                    <BotaoChecar
                        done={rem.done}
                        onClick={() => onToggleDone(rem.id)}
                        >
                            {rem.done ? (
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                >
                                    <path d="M20.285 6.708l-11.57 11.57-5.708-5.708 1.414-1.414 4.294 4.294 10.156-10.156z" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            )}
                        </BotaoChecar>
                </DataColuna>

                <ColunaDetalhes>
                    {rem.items.map((item, idx) => (
                        <LinhaItens key={idx}>
                            <div className="text">{item.text}</div>
                            <div className="time">{item.time}</div>
                        </LinhaItens>
                    ))}
                </ColunaDetalhes>
            </CartaoLembrete>
        )
        )}
        </>
    );
}