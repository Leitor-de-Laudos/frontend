import {

  CardContainer,
  CirculoData,

  ColunaDetalhes,

  DataColuna,
  LineItem,
 
} from "./styles";

interface ReminderItem {
  text: string;
  time: string;
}

interface CardReminderProps {
  id: number;
  date: Date;
  done: boolean;
  item: ReminderItem;
}

export function CardReminder({
  date,
  item,
}: CardReminderProps) {
  return (
    <CardContainer>
      <DataColuna>
        <CirculoData>
          <span>
            {date.toLocaleString("pt-BR", { day: "2-digit"})}
          </span>
          <small>
            {date.toLocaleString("pt-BR", { weekday: "short"}).replace(".", "")}
          </small>
        </CirculoData>
      </DataColuna>

      <ColunaDetalhes>
        <LineItem>
          <div className="text">{item.text}</div>
          <div className="time">{item.time}</div>
        </LineItem >
      </ColunaDetalhes>
    </CardContainer>
  );
}
