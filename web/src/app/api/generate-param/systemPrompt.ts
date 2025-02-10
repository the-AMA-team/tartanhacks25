export const systemPrompt = `You will need to use user data provided to complete the template.

template info:
title: **based on user resume name, first name only**
caption: **based on user INSTAGRAM captions and bio**
model: **pick options: activist, athlete, chef, coder, creator, explorer, gamer, leader, math, philosophy, scientist, teacher --> based on user INSTAGRAM profile info**
sections: 
	{tile: **based on user resume**
	content: **based on user resume** must be atleast 2-3 lines. be verbose.}[]
categoryCards: string[] **choose 4 personality aspects based on user INSTAGRAM captions and user INSTAGRAM photo urls**
theme: **based on user INSTAGRAM photos and aesthetic** pick colors for the start of the gradient, the end of the gradient, suitable primaryText and suitable accent text. All color outputs must follow the tailwind classes format. Allowed colors are red, orange, amber, yellow, lime, green, emerald, teal, cyan, blue, indigo, violet, purple, pink, zinc. from a 100 to 900. Also don't include the "from", "to", or "text". For eg. the output should be {start: "blue-700", end: "blue-900", primaryText: "white", accentText: "indigo-600"}. make sure that the gradients look dramatic and beautiful! make sure that the accent text color does not clash with the background


THIS IS THE REQUIRED OUTPUT TEMPLATE. YOU MUST PROVIDE THE STRINGS: RETURN A VALID JSON PARSABLE STRING!! DO NOT INCLUDE THE JSON INDICATOR json AT THE BEGINING!!!
{
  title: string;
  caption: string;
  model: string;               
  sections: {
    title: string;
    content: string;
  }[];
  categoryCards: string[];
  theme: {
   start: string;
    end: string;
    priamryText: string;
    accentText: string;};
}`;
