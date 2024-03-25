import styles from "./styles.module.css";

import { EntryItem } from "./EntryItem";

/*
  TODO:
  - Estilizar o trecho de "Nenhum valor cadastrado" com base no figma:
  https://www.figma.com/file/khx3stYlTjN7zJZOY1pofB/T22-Demo---Control-Finance?node-id=32%3A951&mode=dev
  - Criar um novo componente para esse trecho
  */

export const EntryList = ({ entries, removeEntry }) => {
  /*
    Renderização condicional:
      O tamanho do array de entries é maior que ? CASO SIM : CASO NAO
        SIM -> Renderize a lista de entries.
        NAO -> Renderize o trecho com parágrafo.
  */
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
        <div className={styles.infoBox}>
          <h2 className="title2">Nenhum valor cadastrado</h2>
          <p className="text1">Registrar novo valor</p>
        </div>
      )}
    </>
  );
};
