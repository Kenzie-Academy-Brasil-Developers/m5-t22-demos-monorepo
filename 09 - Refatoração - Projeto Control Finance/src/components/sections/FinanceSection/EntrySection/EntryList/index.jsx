import styles from "./styles.module.css";

import { EntryItem } from "./EntryItem";

/*
  TODO:
  - Estilizar o trecho de "Nenhum valor cadastrado" com base no figma:
  https://www.figma.com/file/khx3stYlTjN7zJZOY1pofB/T22-Demo---Control-Finance?node-id=32%3A951&mode=dev
*/

export const EntryList = ({ entries, removeEntry }) => {
  return (
    <>
      {entries.length > 0 ? (
        <ul className={styles.entryList}>
          {entries.map((entry) => {
            return (
              <EntryItem
                key={entry.id}
                entry={entry}
                removeEntry={removeEntry}
              />
            );
          })}
        </ul>
      ) : (
        <p>Nenhum valor cadastrado</p>
      )}
    </>
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
