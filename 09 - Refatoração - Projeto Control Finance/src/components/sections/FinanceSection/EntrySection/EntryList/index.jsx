import styles from "./styles.module.css";

import { EntryItem } from "./EntryItem";

export const EntryList = ({ entries, removeEntry }) => {
  return (
    <ul className={styles.entryList}>
      {entries.map((entry) => {
        return (
          <EntryItem key={entry.id} entry={entry} removeEntry={removeEntry} />
        );
      })}
    </ul>
  );
};

/*
  <li key={entry.id} className={styles.entryItem}>
    <p className="text1">
      {entry.entryValue.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}
    </p>
    <div>
      <span className="text3">{entry.entryType}</span>
      <button onClick={() => removeEntry(entry.id)}>
        <img src={TrashIcon} />
      </button>
    </div>
  </li>
*/
