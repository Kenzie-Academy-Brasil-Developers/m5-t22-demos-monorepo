// import ProductImg1 from "../../../assets/product1.png";
// import ProductImg2 from "../../../assets/product2.png";
// import ProductImg3 from "../../../assets/product3.png";
// import ProductImg4 from "../../../assets/product4.png";

import { ProductCard } from "./ProductCard";
import { productList } from "../../../data/productDatabase";

import style from "./style.module.css";

export const ProductSection = () => {
  return (
    <section className={style.productSection}>
      <h2 className="title2">PRODUTOS EM DESTAQUE</h2>
      {/* IMPLEMENTAR UM LOOP PARA CHAMAR OS ELEMENTOS DO ARQUIVO data/productDatabase.js (USANDO MAP) */}
      <ul className={style.productList}>
        {productList.map(({ id, image, title, price }) => {
          return (
            <ProductCard key={id} image={image} title={title} price={price} />
          );
        })}
      </ul>
    </section>
  );

  // v2
  // return (
  //   <section className={style.productSection}>
  //     <h2 className="title2">PRODUTOS EM DESTAQUE</h2>
  //     {/* IMPLEMENTAR UM LOOP PARA CHAMAR OS ELEMENTOS DO ARQUIVO data/productDatabase.js (USANDO MAP) */}
  //     <ul className={style.productList}>
  //       {productList.map((product) => {
  //         return (
  //           <ProductCard
  //             key={product.id}
  //             image={product.image}
  //             title={product.title}
  //             price={product.price}
  //           />
  //         );
  //       })}
  //     </ul>
  //   </section>
  // );

  // v1
  // return (
  //   <section className={style.productSection}>
  //     <h2 className="title2">PRODUTOS EM DESTAQUE</h2>
  //     {}
  //     {/* IMPLEMENTAR UM LOOP PARA CHAMAR OS ELEMENTOS DO ARQUIVO data/productDatabase.js (USANDO MAP) */}
  //     <ul className={style.productList}>
  //       <ProductCard
  //         image={ProductImg1}
  //         title="Blazer Branco Elegante"
  //         price="490,00"
  //       />
  //       <ProductCard
  //         image={ProductImg2}
  //         title="Sapatos Amarelos"
  //         price="340,00"
  //       />
  //       <ProductCard
  //         image={ProductImg3}
  //         title="Blazer Laranja"
  //         price="320,00"
  //       />
  //       <ProductCard image={ProductImg4} title="Calça Preta" price="140,00" />
  //     </ul>
  //   </section>
};
