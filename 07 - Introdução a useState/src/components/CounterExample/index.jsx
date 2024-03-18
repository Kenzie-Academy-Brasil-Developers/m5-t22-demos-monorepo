import { useState } from "react";

export const CounterExample = () => {
  /*
  O estado é semelhante a uma variável no sentido que é capaz de armazenar
  qualquer valor do JS;

  O estado utiliza da função fornecida para alterar o valor da variavel (REATIVIDADE)
  */

  const [count, setCount] = useState(0);

  console.log(count);

  const addCount = () => {
    // count = count + 1;
    setCount(count + 0.1);
  };

  const subCount = () => {
    setCount(count - 0.1);
  };

  return (
    <>
      <h1>{count}</h1>
      {/* <p>Valor em real: R$ {count},00</p> */}
      <p>
        Valor em real:
        {count.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </p>
      <p>Dobro do valor: {count * 2}</p>
      <button onClick={addCount}>Adicionar 1 ao contador</button>
      <button onClick={subCount}>Remover 1 do contador</button>
    </>
  );
};

// v1 (COMO FAZIAMOS NO M4 (COM DOM)). NÃO PRECISAMOS MANIPULAR O DOM DIRETAMENTE NO REACT
// export const CounterExample = () => {
//   let count = 0;

//   const addCount = () => {
//     // count++;
//     count = count + 1;
//     console.log(count);

//     const h1 = document.querySelector("h1");
//     h1.innerText = count;
//   };

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={addCount}>Adicionar +1 ao contador</button>
//     </>
//   );
// };
