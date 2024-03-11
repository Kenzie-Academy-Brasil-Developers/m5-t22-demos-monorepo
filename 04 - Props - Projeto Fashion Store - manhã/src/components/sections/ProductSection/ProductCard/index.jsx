// props (properties) -> são parametros que passamos para um componente
//  - props sempre vem como objeto

// V2
export const ProductCard = ({ title, price, image }) => {
  // console.log(product);
  console.log(title);
  // console.log(price);
  // console.log(image);
  return (
    <li>
      <img src={image} alt={`Imagem do Produto ${title}`} />
      <p>{title}</p>
      <p>R$ {price}</p>
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
