import styles from "./styles.module.css";

import { EntryForm } from "../../../forms/EntryForm";

export const RegisterSection = ({ addEntry }) => {
  return (
    <section className={styles.registerSection}>
      {/* TODO: COMPONENTIZAR TRECHO ABAIXO */}
      <div>
        <h2 className="title2">Registro de valor</h2>
        <p className="text1">
          Digite o valor e em seguida aperto no botão referente ao tipo do valor
        </p>
      </div>

      <EntryForm addEntry={addEntry} />
    </section>
  );
};
