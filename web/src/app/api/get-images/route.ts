import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: any) {
  try {
    // const url = req.nextUrl.url;
    const image = await fetch(
      "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/476116144_18052722323281738_8448455613427470162_n.jpg?stp=dst-jpg_e15_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi43MzB4NzMwLnNkci5mNzU3NjEuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=-Om4mQLJg_0Q7kNvgE4HP4Y&_nc_gid=0de984bb738944c797eb66fec3b6de63&edm=APU89FABAAAA&ccb=7-5&oh=00_AYAFggFNwWy47MbxL89OyGxH_-t3-APHnZ3hgozOid3xBQ&oe=67ACA328&_nc_sid=bc0c2c",
      {
        method: "GET",
        headers: {
          // Pass any required headers (if needed)
          "User-Agent": "Mozilla/5.0",
          Referer: "https://www.instagram.com/",
        },
      }
    );

    const imageBuffer = await image.arrayBuffer();

    return Buffer.from(imageBuffer);
  } catch (error: unknown) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
