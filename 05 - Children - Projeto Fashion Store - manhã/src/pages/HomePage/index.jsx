import { DefaultTemplate } from "../../components/DefaultTemplate";
import { BannerSection } from "../../components/sections/BannerSection";
import { ProductSection } from "../../components/sections/ProductSection";
import { NewsLetterSection } from "../../components/sections/NewsLetterSection";

export const HomePage = () => {
  return (
    <>
      <DefaultTemplate>
        <BannerSection />
        <ProductSection />
        <NewsLetterSection />
      </DefaultTemplate>
    </>
  );
};
