import style from "./style.module.css";

export const NewsLetterSection = () => {
  return (
    <section className={style.newsletterSection}>
      <form className={style.form}>
        <h2 className="title2">INSCREVA-SE NA NEWSLETTER</h2>
        <input type="email" placeholder="E-MAIL" />
        <button className="btn">CADASTRE-SE</button>
      </form>
    </section>
  );
};
