import { GoogleGenAI } from "@google/genai";
import { GEMINI_KEY } from "./constants";

const gemini = new GoogleGenAI({ apiKey: GEMINI_KEY });

export default gemini;