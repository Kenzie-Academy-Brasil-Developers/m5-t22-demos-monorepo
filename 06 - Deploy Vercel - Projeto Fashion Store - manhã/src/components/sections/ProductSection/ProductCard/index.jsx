import style from "./style.module.css";

// props (properties) -> são parametros que passamos para um componente
//  - props sempre vem como objeto

// V2
export const ProductCard = ({ title, price, image }) => {
  return (
    <li className={style.productItem}>
      <img src={image} alt={`Imagem do Produto ${title}`} />
      <h3 className="title3">{title}</h3>
      <p className="price">R$ {price}</p>
    </li>
  );
};

// V1
// export const ProductCard = (product) => {
//   console.log(product);
//   // console.log(product.name);
//   // console.log(product.price);
//   // console.log(product.image);
//   return (
//     <li>
//       <img src={product.image} alt={`Imagem do Produto ${product.title}`} />
//       <p>{product.title}</p>
//       <p>R$ {product.price}</p>
//     </li>
//   );
// };
