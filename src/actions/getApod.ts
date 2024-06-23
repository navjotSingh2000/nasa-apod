"use server";
import { env } from "process";
export const getApod = async () => {
  const response = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=" + env.NASA_APOD_API_KEY
  );
  const data = await response.json();
  return data;
};
