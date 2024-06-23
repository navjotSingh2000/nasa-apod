"use client";

import { NASAImage } from "@/lib/types";
import { useState } from "react";

export default function ClientBoxView({
  url,
  title,
  date,
  explanation,
}: NASAImage) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <>
      {isFullScreen && (
        <div className="fixed inset-0 z-50 bg-black flex justify-center items-center">
          <div className="relative w-full h-full">
            <img src={url} alt={title} className="w-full h-full object-cover" />
            <button
              onClick={toggleFullScreen}
              className="text-sm absolute top-4 right-4 bg-white text-black px-4 py-2 rounded"
            >
              Close Preview
            </button>
          </div>
        </div>
      )}
      <div className="max-w-2xl mx-auto my-8 border rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <img src={url} alt={title} className="w-full h-64 object-cover" />
          <button
            onClick={toggleFullScreen}
            className="text-sm absolute top-4 right-4 bg-white text-black px-4 py-2 rounded"
          >
            Full Screen
          </button>
        </div>
        <div className="bg-white text-black p-4">
          <h1 className="text-2xl font-bold mb-1">{title}</h1>
          <p className="text-sm">{date}</p>
          <p className="mt-2">{explanation}</p>
        </div>
      </div>
    </>
  );
}
