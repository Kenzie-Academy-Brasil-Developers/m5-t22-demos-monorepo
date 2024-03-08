import { pizzasList } from "../../../database";
import style from "./style.module.css";

export const MenuSection = () => {
  return (
    <section className="container">
      <h2 className={style.menuTitle}>Confira o cardápio</h2>

      <ul className={style.menuList}>
        {pizzasList.map((pizza) => {
          return (
            <li key={pizza.id} className={style.menuItem}>
              <img src={pizza.img} alt="" />
              <h3 className={style.foodName}>{pizza.name}</h3>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
