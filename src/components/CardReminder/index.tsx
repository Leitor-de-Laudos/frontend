import {
  CardContainer,
  CirculoData,
  ColunaDetalhes,
  DataColuna,
  LineItem,
} from "./styles";

interface ReminderItem {
  text: string;
  time: string; // formato "HH:mm"
  quant: string;
  dosage: number;
  dosageUnit: string;
}

interface CardReminderProps {
  id: string;
  date: string; // também no formato "HH:mm"
  done: boolean;
  item: ReminderItem;
}

export function CardReminder({
  date,
  item,
}: CardReminderProps) {

  const now = new Date();
  const [hours, minutes] = date.split(":").map(Number);
  now.setHours(hours, minutes, 0, 0);

  return (
    <CardContainer>
      <DataColuna>
        <CirculoData>
          <span>
            {now.toLocaleString("pt-BR", { day: "2-digit" })}
          </span>
          <small>
            {now.toLocaleString("pt-BR", { weekday: "short" }).replace(".", "")}
          </small>
        </CirculoData>
      </DataColuna>

      <ColunaDetalhes>
        <LineItem>
          <div className="text">
            {item.text + " x"+item.quant + "\n"}
            {item.dosage + " " + item.dosageUnit}
          </div>

          <div className="time">{item.time.slice(0, 5)}</div>
        </LineItem>
      </ColunaDetalhes>
    </CardContainer>
  );
}
