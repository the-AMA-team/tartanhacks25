"use client";
import { useRef } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:5000";

export default function Home() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  const handleSignIn = async (username: string, password: string) => {
    console.log(username, password);
    await axios
      .get(`/u/${username}/p/${password}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-blue-50 px-5 py-14 w-1/3 rounded-lg shadow-md">
        <div className="m-auto w-1/2">
          <input
            type="text"
            ref={usernameRef}
            className="p-2 m-1 outline-none rounded-md w-full"
            placeholder="Username"
          />
        </div>
        <div className="m-auto w-1/2">
          <input
            type="password"
            name="password"
            ref={passRef}
            className="p-2 m-1 outline-none rounded-md w-full"
            placeholder="Password"
          />
        </div>
        <div className="m-auto w-1/2">
          <button
            className="bg-blue-500 w-full p-2 rounded-md text-white m-1"
            onClick={() =>
              handleSignIn(
                usernameRef.current?.value as string,
                passRef.current?.value as string
              )
            }
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
