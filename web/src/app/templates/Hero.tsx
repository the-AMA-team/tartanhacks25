import ModelCanvas from "./Model";
import { ModelType, Theme, WebsiteTemplateProps } from "@/types";

const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};

const Hero: React.FC<{
  title: string;
  caption: string;
  model: ModelType;
  theme: Theme;
}> = ({ title, caption, model, theme }) => {
  return (
    <section
      className={`relative w-full h-screen mx-auto text-${theme.priamryText}`}
    >
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-${theme.priamryText}`}>
            {" "}
            {title.split(" ").slice(0, -1).join("")}{" "}
            <span className={`text-${theme.accentText}`}>
              {title.split(" ").slice(-1).join("")}
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {caption}
          </p>
        </div>
      </div>

      <ModelCanvas model={model} />
    </section>
  );
};

export default Hero;
