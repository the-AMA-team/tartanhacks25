interface WebsiteTemplate {
  title: string;
  caption: string;
  model: string;
  sections: {
    title: string;
    content: string;
  }[];
  categoryCards: string[];
  theme: string;
}

const WebsiteTemplate: React.FC<WebsiteTemplate> = ({
  title,
  caption,
  model,
  sections,
  categoryCards,
  theme,
}) => {
  return (
    <div>
      <div>{title}</div>
      <div>{caption}</div>
      <div>{model}</div>

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
