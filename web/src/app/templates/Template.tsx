import { WebsiteTemplateProps } from "@/types";
import ModelCanvas from "./Model";
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
      className={`relative z-0 bg-gradient-to-b from-${theme.start} to-${theme.end}`}
    >
      <Hero model={model} title={title} caption={caption} theme={theme} />
      {/* <About /> */}
    </div>
  );
  return (
    <div>
      <div>{title}</div>
      <div>{caption}</div>
      <div>
        <ModelCanvas model={model} />
      </div>

      <div>
        {sections.map((section) => {
          return (
            <div>
              <div>{section.title}</div>
              <div>{section.content}</div>
            </div>
          );
        })}
      </div>

      <div>
        {categoryCards.map((category) => {
          return (
            <div>
              <div>{category}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WebsiteTemplate;
