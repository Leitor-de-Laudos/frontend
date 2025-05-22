import { InputHTMLAttributes, useState } from "react";
import { Icon } from "@iconify/react";
import { InputHourContainer } from "./styles";

export function InputHour({...rest}: InputHTMLAttributes<HTMLInputElement>) {
  const [hour, setHour] = useState("");

  return (
    <InputHourContainer>
      <label htmlFor="hourMed">Selecione o horário</label>
      <div>
        <input
          type="time"
          name="hourMed"
          id="hourMed"
          value={hour}
          onChange={(e) => setHour(e.target.value)} 
          {...rest}
        />
        <span>{hour ? hour : "Clique para escolher"}</span>
        <Icon icon="proicons:clock" width={20} height={20} />
      </div>
    </InputHourContainer>
  );
}
