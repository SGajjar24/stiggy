import { GoogleGenAI, Type, SchemaType } from "@google/genai";
import { PRODUCTS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are "Stiggy AI", a hip, trendy, and helpful fashion assistant for the streetwear brand "Stiggy India".
Your goal is to help customers find products from our catalog, suggest outfits, and answer questions about style.
You have access to the following product catalog in JSON format: ${JSON.stringify(PRODUCTS.map(p => ({id: p.id, name: p.name, price: p.price, category: p.category, description: p.description})))}.

Rules:
1. Always be polite but keep the tone cool, modern, and energetic ("Gen Z friendly").
2. When a user asks for recommendations (e.g., "I need an outfit for a party" or "Show me hoodies"), analyze the catalog and recommend specific items.
3. If you recommend items, strictly output the list of Product IDs in the JSON schema provided.
4. Keep text responses concise (under 50 words) unless describing a full outfit.
5. If the user asks about something we don't sell, politely redirect them to our streetwear collection.
`;

export const chatWithStylist = async (message: string, history: any[] = []) => {
  try {
    const model = 'gemini-2.5-flash';
    
    // We will use a structured response to separate the text answer from product recommendations
    const responseSchema = {
      type: Type.OBJECT,
      properties: {
        replyText: {
          type: Type.STRING,
          description: "The conversation reply to the user."
        },
        recommendedProductIds: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
          description: "A list of product IDs found in the catalog that match the user's request. Leave empty if no specific products are recommended."
        }
      },
      required: ["replyText"]
    };

    const response = await ai.models.generateContent({
      model: model,
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.7,
      }
    });

    const jsonText = response.text;
    if (!jsonText) throw new Error("No response from AI");

    const parsed = JSON.parse(jsonText);
    return {
      text: parsed.replyText,
      productIds: parsed.recommendedProductIds || []
    };

  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      text: "Yo, my connection is a bit glitchy right now. Try asking me again in a sec!",
      productIds: []
    };
  }
};
