import { Header } from "./components/Header";
import { TitleSection } from "./components/sections/TitleSection";
import { MenuSection } from "./components/sections/MenuSection";
import { Footer } from "./components/Footer";

import "./styles/index.css";

function App() {
  return (
    <>
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
