import { Header } from "../Header";
import { Footer } from "../Footer";

export const DefaultTemplate = ({ children }) => {
  console.log(children);
  return (
    <>
      <Header />

      <main className="container">{children}</main>

      <Footer />
    </>
  );
};
