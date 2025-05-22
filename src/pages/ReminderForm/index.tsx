import { Link } from "react-router-dom";
import { ContainerReminder, ContainerReminderForm } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import { InputHour } from "@/components/InputHour";
import { InputWeekdays } from "@/components/InputWeekdays";
import { InputDosage } from "@/components/InputDosage";

export function ReminderForm() {
  return (
    <ContainerReminder>
      <header>
        <Link to="/reminder">
          <Icon icon="majesticons:arrow-left" height={24} width={24} />
        </Link>
        <h1>Criar lembrete</h1>
      </header>

      <ContainerReminderForm>
        <section>
          <label htmlFor="nameMed">Informe o nome</label>
          <input
            type="text"
            name="nameMed"
            id="nameMed"
            placeholder="Ex: Paracetamol"
          />
        </section>

        <section>
          <label htmlFor="quantMed">Informe a quantidade</label>
          <input
            type="number"
            name="quantMed"
            id="quantMed"
            placeholder="Ex: 2"
            min={1}
          />
        </section>

        {/* Dosagem e unidade */}
        <InputDosage
          inputProps={{
            required: true,
          }}
          selectProps={{
            required: true,
          }}
        />

        {/* Dias da semana */}
        <InputWeekdays />

        {/* Horário */}
        <InputHour />

        <button type="submit">Salvar lembrete</button>
      </ContainerReminderForm>
    </ContainerReminder>
  );
}
