import styles from "./styles.module.css";
import { EntrySubtotal } from "./EntrySubtotal";
import { EntryList } from "./EntryList";

export const EntrySection = ({ entries, removeEntry }) => {
  return (
    <section className={styles.entrySection}>
      <h2 className="title2">Resumo Financeiro</h2>

      <EntrySubtotal entries={entries} />
      <EntryList removeEntry={removeEntry} entries={entries} />
    </section>
  );
};
