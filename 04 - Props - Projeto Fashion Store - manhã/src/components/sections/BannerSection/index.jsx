import BannerImg from "../../../assets/banner.png";

export const BannerSection = () => {
  return (
    <section>
      <img src={BannerImg} alt="" />
      <div>
        <h1>FASHION STORE</h1>
        <p>Fique por dentro das nossas últimas promoções e novidades</p>
        <button>CONFIRA AS OFERTAS</button>
      </div>
    </section>
  );
};
