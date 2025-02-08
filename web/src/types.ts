export interface InstagramData {
  bio: string;
  posts: {
    url: string;
    caption: string;
  }[];
}

export interface WebsiteTemplateProps {
  title: string;
  caption: string;
  model: ModelType;
  sections: {
    title: string;
    content: string;
  }[];
  categoryCards: string[];
  theme: Theme;
}

export interface Theme {
  start: string;
  end: string;
  priamryText: string;
  accentText: string;
}

export enum ModelType {
  activist = "activist",
  athlete = "athlete",
  chef = "chef",
  coder = "coder",
  creator = "creator",
  explorer = "explorer",
  gamer = "gamer",
  leader = "leader",
  math = "math",
  philosophy = "philosophy",
  scientist = "scientist",
  teacher = "teacher",
}
