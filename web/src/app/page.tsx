"use client";
import { useRef, useState } from "react";
import axios from "axios";
import ComputersCanvas from "./templates/Model";

export default function Home() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  const [instagramData, setInstagramData] = useState<InstagramData | null>(
    null
  );

  const signInAndGetPosts = async (
    username: string,
    password: string
  ): Promise<InstagramData> => {
    const res = await axios
      .get(`http://127.0.0.1:5000/u/${username}/p/${password}`)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return res;
  };

  const startWebsiteGen = async () => {
    const data = await signInAndGetPosts(
      usernameRef.current?.value as string,
      passRef.current?.value as string
    );

    setInstagramData(data);

    // reuse this data to generate website params
  };

  return (
    <div>
      <ComputersCanvas />
    </div>
  );

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-blue-50 px-5 py-14 w-1/3 rounded-lg shadow-sm">
        <div className="text-lg font-bold">Instagram Posts</div>

        <div className="m-auto w-1/2">
          <input
            type="text"
            ref={usernameRef}
            className="p-2 m-1 outline-none rounded-md w-full focus:ring-2"
            placeholder="Username"
          />
        </div>
        <div className="m-auto w-1/2">
          <input
            type="password"
            name="password"
            ref={passRef}
            className="p-2 m-1 outline-none rounded-md w-full focus:ring-2"
            placeholder="Password"
          />
        </div>
        <div className="text-lg font-bold">Upload Resume</div>
        <input type="file" className="p-2 m-1 outline-none rounded-md w-full" />
        <div className="m-auto w-1/2">
          <button
            className="bg-blue-500 w-full p-2 rounded-md text-white m-1"
            onClick={() => startWebsiteGen()}
          >
            Generate Website
          </button>
        </div>
        {instagramData && JSON.stringify(instagramData)}
      </div>
    </div>
  );
}
