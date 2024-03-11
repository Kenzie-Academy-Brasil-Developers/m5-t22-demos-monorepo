import ProductImg1 from "../../../assets/product1.png";
import ProductImg2 from "../../../assets/product2.png";
import ProductImg3 from "../../../assets/product3.png";
import ProductImg4 from "../../../assets/product4.png";

import { ProductCard } from "./ProductCard";

export const ProductSection = () => {
  return (
    <section>
      <h2>PRODUTOS EM DESTAQUE</h2>

      {/* IMPLEMENTAR UM LOOP PARA CHAMAR OS ELEMENTOS DO ARQUIVO data/productDatabase.js (USANDO MAP) */}
      <ul>
        <ProductCard
          image={ProductImg1}
          title="Blazer Branco Elegante"
          price="490,00"
        />
        <ProductCard
          image={ProductImg2}
          title="Sapatos Amarelos"
          price="340,00"
        />
        <ProductCard
          image={ProductImg3}
          title="Blazer Laranja"
          price="320,00"
        />
        <ProductCard image={ProductImg4} title="Calça Preta" price="140,00" />
      </ul>
    </section>
  );

  // V1
  // return (
  //   <section>
  //     <h2>PRODUTOS EM DESTAQUE</h2>

  //     <ul>
  //       <li>
  //         <img src={ProductImg1} alt="" />
  //         <p>Blazer Branco Elegante</p>
  //         <p>R$ 490,00</p>
  //       </li>

  //       <li>
  //         <img src={ProductImg2} alt="" />
  //         <p>Sapatos Amarelos</p>
  //         <p>R$ 340,00</p>
  //       </li>

  //       <li>
  //         <img src={ProductImg3} alt="" />
  //         <p>Blazer Laranja</p>
  //         <p>R$ 320,00</p>
  //       </li>

  //       <li>
  //         <img src={ProductImg4} alt="" />
  //         <p>Calça Preta</p>
  //         <p>R$ 140,00</p>
  //       </li>
  //     </ul>
  //   </section>
  // );
};

// const showMessage = (name, module) => {
//   console.log(`Olá ${name}, bem vindo ao módulo ${module}`);
// };

// const nameParam = "Fernando";
// const moduleParam = "M1";

// showMessage(nameParam, moduleParam);
