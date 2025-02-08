import { WebsiteTemplateProps } from "@/types";
import Hero from "./Hero";

const WebsiteTemplate: React.FC<WebsiteTemplateProps> = ({
  title,
  caption,
  model,
  sections,
  categoryCards,
  theme,
}) => {
  return (
    <div
      className={`relative z-0 bg-gradient-to-b from-${theme.start} to-${theme.end} pb-16`}
    >
      <Hero model={model} title={title} caption={caption} theme={theme} />

      <div className="flex justify-center">
        {categoryCards.map((card, idx) => {
          return (
            <div
              key={idx}
              className={`p-24 bg-${theme.start} ring-2 ring-${theme.priamryText} my-10 mx-5 text-white text-xl rounded-2xl`}
            >
              {card}
            </div>
          );
        })}
      </div>
      <div className="">
        {sections.map((section, idx) => {
          return (
            <div key={idx} className="w-4/5 m-auto">
              <div
                className={`text-3xl text-${theme.priamryText} py-2 font-semibold capitalize`}
              >
                {section.title}
              </div>
              <div className={`text-${theme.priamryText}`}>
                {section.content}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default WebsiteTemplate;
