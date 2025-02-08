import OpenAI from 'openai';
import { NextRequest, NextResponse } from 'next/server';

console.log("hello")

// POST is used to send data to a server to create/update a resource

// dummy temp stuff
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    });


// export async function POST(req: NextRequest) {
//    const openai = new OpenAI({ // creates new openai client 
//      apiKey: process.env.OPENAI_API_KEY, // accesses the api key from the .env file
//    });

//    try {
//      const {resume, instagramData} = await req.json(); // resume is a pdf; instagramData is a json object


//      if (!event) {
//        return NextResponse.json(
//          { error: 'Invalid or missing prompt' },
//          { status: 400 }
//        );
//      } // checks if the thingy has stuff inside or if it is empty

     const systemPrompt = "You are Uncle Iroh from Avatar the last Airbender"; // the system prompt is a set of instructions that tells the model how to behave
     const contentPrompt = "Will I win at TartanHacks? I think my idea is pretty fire 🔥"

     const completion = await openai.beta.chat.completions.parse({
       model: 'gpt-4o-2024-08-06',
       messages: [
         { role: 'system', content: systemPrompt }, // system --> set behavior
         { role: 'user', content: contentPrompt } // user --> the question
         // assistant --> if u wanted to save chat history i guess (keep it context aware)
       ],
       temperature: 0.2,
     });

     const response = completion.choices[0].message.content; //chatgpt returns an array of choices, so u chose the first one or something idk
     console.log(response);

//     // Log the validated portfolio
//     console.log(event, response);

//     return NextResponse.json(response);
//   } catch (error) {
//     console.error("Error: ", error);
//     return NextResponse.json(
//       { error: 'Failed to generate delta information' },
//       { status: 500 }
//     );
//   }
// }