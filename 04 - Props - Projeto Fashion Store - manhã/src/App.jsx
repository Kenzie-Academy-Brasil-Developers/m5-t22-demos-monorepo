import { Header } from "./components/Header";
import { BannerSection } from "./components/sections/BannerSection";
import { ProductSection } from "./components/sections/ProductSection";
import { NewsLetterSection } from "./components/sections/NewsLetterSection";
import { Footer } from "./components/Footer";

import "./styles/index.css";

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <BannerSection />
        <ProductSection />
        <NewsLetterSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
