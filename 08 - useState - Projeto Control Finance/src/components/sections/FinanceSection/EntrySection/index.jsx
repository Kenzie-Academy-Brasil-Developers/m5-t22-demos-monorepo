import TrashIcon from "../../../../assets/trash.svg";
import styles from "./styles.module.css";

export const EntrySection = () => {
  return (
    <section className={styles.entrySection}>
      <h2 className="title2">Resumo Financeiro</h2>

      <div className={styles.entryListSubtotal}>
        <p className="text1">Soma dos valores</p>
        <p className="text1">R$ 589,00</p>
      </div>

      <ul className={styles.entryList}>
        <li className={styles.entryItem}>
          <p className="text1">R$ 80,00</p>
          <div>
            <span className="text3">Saída</span>
            <button>
              <img src={TrashIcon} />
            </button>
          </div>
        </li>

        <li className={styles.entryItem}>
          <p className="text1">R$ 97,00</p>
          <div>
            <span className="text3">Saída</span>
            <button>
              <img src={TrashIcon} />
            </button>
          </div>
        </li>

        <li className={styles.entryItem}>
          <p className="text1">R$ 104,00</p>
          <div>
            <span className="text3">Saída</span>
            <button>
              <img src={TrashIcon} />
            </button>
          </div>
        </li>

        <li className={styles.entryItem}>
          <p className="text1">R$ 870,00</p>
          <div>
            <span className="text3">Entrada</span>
            <button>
              <img src={TrashIcon} />
            </button>
          </div>
        </li>
      </ul>
    </section>
  );
};
