import { Header } from "../../components/Header";
import { RegisterSection } from "../../components/sections/RegisterSection";
import { EntrySection } from "../../components/sections/EntrySection";

export const HomePage = () => {
  return (
    <>
      <Header />

      <main className="container">
        <RegisterSection />
        <EntrySection />
      </main>
    </>
  );
};
