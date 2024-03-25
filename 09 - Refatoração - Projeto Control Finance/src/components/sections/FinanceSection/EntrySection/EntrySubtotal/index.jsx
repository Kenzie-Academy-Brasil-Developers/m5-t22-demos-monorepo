import styles from "./styles.module.css";

export const EntrySubtotal = ({ entries }) => {
  const entriesSubTotal = () => {
    const subTotal = entries.reduce((accumulator, current) => {
      return current.entryType === "entrada"
        ? accumulator + current.entryValue
        : accumulator - current.entryValue;
    }, 0);

    return subTotal;
  };

  return (
    <div className={styles.entryListSubtotal}>
      <p className="text1">Soma dos valores</p>
      <p className="text1">
        {entriesSubTotal().toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
    </div>
  );
};
