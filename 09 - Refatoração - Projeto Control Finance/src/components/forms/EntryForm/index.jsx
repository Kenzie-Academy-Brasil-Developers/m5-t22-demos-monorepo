import { useState } from "react";
import styles from "./styles.module.css";
import { Input } from "../Input";
import { Select } from "../Select";

export const EntryForm = ({ addEntry }) => {
  const [entryValue, setEntryValue] = useState("");
  const [entryType, setEntryType] = useState("entrada");

  const submitHandler = (event) => {
    event.preventDefault();
    const newEntry = { entryValue, entryType };
    addEntry(newEntry);
  };

  return (
    <form onSubmit={submitHandler} className={styles.addEntryForm}>
      <Input
        label="Valor"
        setValue={setEntryValue}
        placeholder="R$ 00,00"
        type="number"
        id="entryValue"
        value={entryValue}
      />
      <div>
        <Select setValue={setEntryType} id="entryType" label="Tipo">
          <option value="entrada">Entrada</option>
          <option value="saida">Saída</option>
          {/* <option value="outraOpcao">Outra opção</option> */}
        </Select>
      </div>

      <button className="btn">Inserir registro</button>
    </form>
  );
};
