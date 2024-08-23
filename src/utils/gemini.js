import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

let model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  // Set the `responseMimeType` to output JSON
  generationConfig: { responseMimeType: "application/json" },
});

export default model;
