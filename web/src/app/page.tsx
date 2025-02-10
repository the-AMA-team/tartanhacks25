"use client";
import { useRef, useState } from "react";
import axios from "axios";
import ModelCanvas from "./templates/Model";
import WebsiteTemplate from "./templates/Template";
import { ModelType, InstagramData, WebsiteTemplateProps } from "@/types";

export default function Home() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  const [instagramData, setInstagramData] = useState<InstagramData | null>();

  const [resumeString, setResumeString] = useState("");

  const [websiteParams, setWebsiteParams] = useState<WebsiteTemplateProps>();

  const [loading, setLoading] = useState<
    | "Generate Website"
    | "Analyzing your personality..."
    | "Realizing achievements..."
    | "Done..."
  >("Generate Website");

  const signInAndGetPosts = async (
    username: string,
    password: string
  ): Promise<InstagramData> => {
    setLoading("Analyzing your personality...");
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

  const getWebsiteParams = async (igData: InstagramData) => {
    setLoading("Realizing achievements...");
    const res = await axios
      .post(`/api/generate-param`, {
        instagramData: igData,
        resume: resumeString,
      })
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((err) => {
        console.log(err);
      });

    return res.data;
  };

  const startWebsiteGen = async () => {
    if (!resumeString || !usernameRef.current?.value || !passRef.current?.value)
      return;

    const data = await signInAndGetPosts(
      usernameRef.current?.value as string,
      passRef.current?.value as string
    );

    await setInstagramData(data);

    getWebsiteParams(instagramData!).then((data) => {
      setWebsiteParams(data);
    });
  };

  if (websiteParams) {
    return (
      <div>
        <WebsiteTemplate
          caption={websiteParams.caption}
          title={"Hi, I'm " + websiteParams.title}
          model={websiteParams.model}
          sections={websiteParams.sections}
          categoryCards={websiteParams.categoryCards}
          theme={websiteParams.theme}
        />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-200 px-64">
      <div className="m-auto w-2/3">
        <div className="text-7xl font-bold">Gram-Folio</div>
        <div className="2xl font-semibold px-2">
          Your personality, your skills,{" "}
          <span className="text-pink-500">your website</span>
        </div>
      </div>
      <div className="bg-pink-600 text-white px-5 py-14 w-1/3 rounded-lg shadow-sm">
        <div className="text-lg text-center">Instagram Posts</div>
        <div className="m-auto w-2/3">
          <input
            type="text"
            ref={usernameRef}
            className="p-2 m-1 outline-none rounded-md w-full focus:ring-2 text-black"
            placeholder="Username"
          />
        </div>
        <div className="m-auto w-2/3">
          <input
            type="password"
            name="password"
            ref={passRef}
            className="p-2 m-1 outline-none rounded-md w-full focus:ring-2 text-black"
            placeholder="Password"
          />
        </div>
        <div className="text-lg text-center mt-1">Resume</div>
        <div className="m-auto w-2/3">
          <textarea
            value={resumeString}
            onChange={(e) => setResumeString(e.target.value)}
            className="h-1/2 w-full outline-none p-2 m-1 rounded-md text-black"
            placeholder="Paste your resume"
          />
          <button
            className={`bg-pink-100 w-full p-2 rounded-md text-pink-500 m-1 ${
              loading !== "Generate Website" && "animate-pulse"
            }`}
            onClick={() => startWebsiteGen()}
          >
            {loading}
          </button>
        </div>
        {websiteParams && JSON.stringify(websiteParams)}
      </div>
    </div>
  );
}
