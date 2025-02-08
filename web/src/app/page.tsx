"use client";
import { useRef } from "react";

export default function Home() {
  const usernameRef = useRef(null);
  const passRef = useRef(null);

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
          <button className="bg-blue-500 w-full p-2 rounded-md text-white m-1">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
