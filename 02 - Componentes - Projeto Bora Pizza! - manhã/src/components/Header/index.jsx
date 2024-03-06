import LogoImg from "../../assets/logo.png";

export const Header = () => {
  return (
    <header>
      <figure>
        <img src={LogoImg} alt="Logo Bora Pizza" />
      </figure>
    </header>
  );
};
