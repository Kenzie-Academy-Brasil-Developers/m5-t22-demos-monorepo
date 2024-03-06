// import PizzaImg1 from "../../../assets/pizza1.jpg";
// import PizzaImg2 from "../../../assets/pizza2.jpg";
// import PizzaImg3 from "../../../assets/pizza3.jpg";
// import PizzaImg4 from "../../../assets/pizza4.jpg";
// import PizzaImg5 from "../../../assets/pizza5.jpg";

import { pizzasList } from "../../../database";

export const MenuSection = () => {
  return (
    <section>
      <h2>Confira o cardápio</h2>

      <ul>
        {pizzasList.map((pizza) => {
          return (
            <li key={pizza.id}>
              <img src={pizza.img} alt="" />
              <h3>{pizza.name}</h3>
            </li>
          );
        })}
      </ul>
    </section>
  );

  // return (
  //   <section>
  //     <h2>Confira o cardápio</h2>

  //     <ul>
  //       <li>
  //         <img src={PizzaImg1} alt="" />
  //         <h3>Calabresa</h3>
  //       </li>
  //       <li>
  //         <img src={PizzaImg2} alt="" />
  //         <h3>Marguerita</h3>
  //       </li>
  //       <li>
  //         <img src={PizzaImg3} alt="" />
  //         <h3>4 Queijos</h3>
  //       </li>
  //       <li>
  //         <img src={PizzaImg4} alt="" />
  //         <h3>Frango e Bacon</h3>
  //       </li>
  //       <li>
  //         <img src={PizzaImg5} alt="" />
  //         <h3>Vegana</h3>
  //       </li>
  //     </ul>
  //   </section>
  // );
};
