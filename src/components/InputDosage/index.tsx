import { InputHTMLAttributes, SelectHTMLAttributes, useState } from "react";
import { InputDosageContainer } from "./styles";


interface InputDosageProps {
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  selectProps?: SelectHTMLAttributes<HTMLSelectElement>;
}

export function InputDosage({ inputProps, selectProps }: InputDosageProps) {
  const [dosage, setDosage] = useState("");
  const [unit, setUnit] = useState("mg");

  return (
    <InputDosageContainer>
      <label htmlFor="dosMed">Informe a dosagem</label>

      <div className="input-wrapper">
        <input
          type="number"
          name="dosMed"
          id="dosMed"
          placeholder="Ex: 500"
          min={0}
          step="any"
          value={dosage}
          onChange={(e) => {
            setDosage(e.target.value);
            inputProps?.onChange?.(e);
          }}
          {...inputProps}
        />

        <select
          name="dosUnit"
          id="dosUnit"
          value={unit}
          onChange={(e) => {
            setUnit(e.target.value);
            selectProps?.onChange?.(e);
          }}
          {...selectProps}
        >
          <option value="mg">mg</option>
          <option value="g">g</option>
          <option value="ml">ml</option>
          <option value="mcg">mcg</option>
        </select>
      </div>
    </InputDosageContainer>
  );
}
