import BannerImg from "../../../assets/banner.png";
import style from "./style.module.css";

export const BannerSection = () => {
  return (
    <section className={style.bannerSection}>
      <img src={BannerImg} alt="" />
      <div>
        <h1 className="title1">FASHION STORE</h1>
        <p className="paragraph">
          Fique por dentro das nossas últimas promoções e novidades
        </p>
        <button className="btn">CONFIRA AS OFERTAS</button>
      </div>
    </section>
  );
};
