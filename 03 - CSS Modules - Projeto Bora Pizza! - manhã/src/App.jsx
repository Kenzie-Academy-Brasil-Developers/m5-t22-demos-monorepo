import { Header } from "./components/Header";
import { TitleSection } from "./components/sections/TitleSection";
import { MenuSection } from "./components/sections/MenuSection";
import { Footer } from "./components/Footer";
// import { Componente1 } from "./components/Componente1";
// import { Componente2 } from "./components/Componente2";

import "./styles/index.css";

/*
  SPA -> Single Page Application
*/

function App() {
  return (
    <>
      {/* Exemplo de estilo global */}
      {/* <Componente1 />
      <Componente2 /> */}

      <Header />
      <TitleSection />

      <main>
        <MenuSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
