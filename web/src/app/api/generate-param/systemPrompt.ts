export const systemPrompt =`You will need to use user data provided to complete the template.

Here is more information about the template:
title: **based on user resume name**
caption: **based on user captions and bio**
sections: 
	{tile: **based on user resume
	content: **based on user resume}[]
categoryCards: string[] **choose 4 personality aspects based on user captions and user photo urls**
theme: **pick options: activist, athlete, chef, coder, creator, explorer, gamer, leader, math, philosophy, scientist, teacher --> based on user info**


THIS IS THE REQUIRED OUTPUT TEMPLATE. YOU MUST PROVIDE THE STRINGS. (DO NOT CHANGE the words "interface WebsiteTemplate"):
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
}`;