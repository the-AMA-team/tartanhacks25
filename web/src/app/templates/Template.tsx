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
              className={`p-20 bg-${theme.start} ring-1 ring-slate-100 my-10 mx-5 text-white text-xl font-bold rounded-2xl shadow-lg`}
            >
              {card}
            </div>
          );
        })}
      </div>
      <div className="mt-16">
        {sections.map((section, idx) => {
          return (
            <div key={idx} className="w-4/5 m-auto">
              <div
                className={`text-3xl text-${theme.priamryText} font-semibold capitalize`}
              >
                {section.title}
              </div>
              <hr className="pb-1 pt-2" />
              <div className={`text-${theme.priamryText} mb-8`}>
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
