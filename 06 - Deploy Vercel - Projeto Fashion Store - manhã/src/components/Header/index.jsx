import Logo from "../../assets/FashionStoreLogo.svg";
import style from "./style.module.css";

export const Header = () => {
  return (
    <header className={style.header}>
      <img src={Logo} alt="" />
    </header>
  );
};
