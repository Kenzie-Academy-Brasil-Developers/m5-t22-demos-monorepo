import LogoImg from "../../assets/logo.png";
import style from "./style.module.css";

export const Header = () => {
  return (
    <header className="container">
      <figure className={style.logoContainer}>
        <img src={LogoImg} alt="Logo Bora Pizza" />
      </figure>
    </header>
  );
};
