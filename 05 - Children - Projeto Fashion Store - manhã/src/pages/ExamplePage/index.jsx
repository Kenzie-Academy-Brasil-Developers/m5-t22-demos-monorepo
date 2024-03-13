import { DefaultTemplate } from "../../components/DefaultTemplate";
import ProductImg2 from "../../assets/product2.png";

export const ExamplePage = () => {
  return (
    <>
      <DefaultTemplate>
        <section>
          <h2>Página do Produto</h2>

          <div>
            <img src={ProductImg2} alt="" />
            <h3>Sapato Amarelo</h3>
          </div>
        </section>
      </DefaultTemplate>
    </>
  );
};
