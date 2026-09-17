import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

export async function analyzeIdea(idea) {
  const model = genAI.getGenerativeModel({
    model: "gemini-3.5-flash",
  });

 const result = await model.generateContent(`
You are a professional startup consultant.

Analyze this startup idea:

${idea}

Provide:

# Executive Summary
# Problem Statement
# Target Audience
# Market Size
# Competitors
# Revenue Model
# MVP Features
# Tech Stack
# SWOT Analysis
# Growth Strategy
# Investor Pitch
# Startup Score (/100)

Make the response concise and investor-ready.
`);
 }