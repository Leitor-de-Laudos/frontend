import { useState } from "react";
import { ContainerReminder } from "./styles";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { CardReminder } from "@/components/CardReminder";

interface ReminderItem {
  text: string;
  time: string;
}

interface ReminderData {
  id: number;
  date: Date;
  done: boolean;
  item: ReminderItem;
}

export function Reminder() {
  
  const [reminders, setReminders] = useState<ReminderData[]>([
    {
      id: 1,
      date: new Date(),
      done: false,
      item: { text: "Vitamina D\n1 Capsula 125mg", time: "09:00" },

    },
    {
      id: 2,
      date: new Date(),
      done: false,
      item: { text: "Consulta | Checkup\nHosp. São Camilo", time: "08:30" },
    },
  ]);

  return (
    <>
      <ContainerReminder>
        <header>
          <Link to="/">
            <Icon icon="garden:chevron-left-fill-16" height={16} width={16} />
            <span>Voltar</span>
          </Link>
          <h1>Lembretes</h1>
          <span>
            <Link to="/reminder/create">
              <Icon icon="line-md:plus" height={16} width={16} />
            </Link>
          </span>
        </header>
      </ContainerReminder>

      {reminders.map((rem) => (
        <CardReminder
          key={rem.id}
          id={rem.id}
          date={rem.date}
          done={rem.done}
          item={rem.item}
        />
      ))}
    </>
  );
}
