import styles from "./styles.module.css";
// import TrashIcon from "../../../../../../assets/trash.svg";
import { TrashIcon } from "../../../../../../assets/icons/TrashIcon";

export const EntryItem = ({ entry, removeEntry }) => {
  return (
    <li className={styles.entryItem}>
      <p className="text1">
        {entry.entryValue.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <div>
        <span className="text3">{entry.entryType}</span>
        <button
          className={styles.delButton}
          onClick={() => removeEntry(entry.id)}
        >
          {/* <img src={TrashIcon} /> */}
          <TrashIcon />
        </button>
      </div>
    </li>
  );
};
