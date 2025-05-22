import { InputHTMLAttributes, useState } from "react";
import { InputWeekDayContainer } from "./styles";

const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

export function InputWeekdays ({...rest}: InputHTMLAttributes<HTMLInputElement>) {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  function toggleDay(day: string) {
    setSelectedDays((prev) =>
      prev.includes(day)
        ? prev.filter((d) => d !== day)
        : [...prev, day]
    );
  }

  return (
    <InputWeekDayContainer>
      <label>Selecione os dias</label>

      <div>
        {daysOfWeek.map((day) => (
          <label
            key={day}
            className={selectedDays.includes(day) ? "checked" : ""}
          >
            <input
              type="checkbox"
              value={day}
              checked={selectedDays.includes(day)}
              onChange={() => toggleDay(day)}
              {...rest}
            />
            {day}
          </label>
        ))}
      </div>
    </InputWeekDayContainer>
  );
}

