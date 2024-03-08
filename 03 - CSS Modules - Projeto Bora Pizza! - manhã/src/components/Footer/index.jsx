import LogoImg from "../../assets/logo.png";
import style from "./style.module.css";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <figure>
          <img src={LogoImg} alt="" />
        </figure>
        <p>© Kenzie Academy Brasil</p>
      </div>
    </footer>
  );
};
