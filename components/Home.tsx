import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Euro, Calculator, BarChart3, CheckCircle2 } from 'lucide-react';
import { PartnerGrid } from './PartnerGrid';
import { GoogleGenAI } from "@google/genai";

interface HomeProps {
  onChangeView: (view: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onChangeView }) => {
  const [heroImage, setHeroImage] = useState("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000");
  const hasGenerated = useRef(false);

  useEffect(() => {
    const generateHeroImage = async () => {
      if (hasGenerated.current) return;
      hasGenerated.current = true;

      let apiKey = process.env.API_KEY;
      
      // Fallback: If no env key, ask user (useful for local testing after download)
      if (!apiKey) {
         console.warn("API Key not found in environment variables.");
         // Note: In a real production app, we wouldn't prompt like this, but for a 
         // downloadable demo project, this ensures it works immediately.
         const userKey = window.prompt("Google Gemini API Key needed for image generation. Please enter it here (or click Cancel to use placeholder):");
         if (userKey) apiKey = userKey;
      }

      if (!apiKey) return; // Keep placeholder if no key

      try {
        const ai = new GoogleGenAI({ apiKey: apiKey });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [
              {
                text: 'Photorealistic modern German single-family house with a sleek white air-source heat pump unit installed in the garden, sunny spring day, green grass, solar panels on roof, blue sky, 8k resolution, architectural photography, sustainable energy concept',
              },
            ],
          },
        });

        if (response.candidates?.[0]?.content?.parts) {
          for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
              const base64EncodeString = part.inlineData.data;
              const mimeType = part.inlineData.mimeType || 'image/png';
              setHeroImage(`data:${mimeType};base64,${base64EncodeString}`);
              break;
            }
          }
        }
      } catch (error) {
        console.error("Failed to generate hero image:", error);
      }
    };

    generateHeroImage();
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-brand-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Moderne Wärmepumpe vor Einfamilienhaus" 
            className="w-full h-full object-cover opacity-30 transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/80 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Wärmepumpe Kosten <br/>
            <span className="text-eco-500">& Förderung 2025</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-100 max-w-2xl mb-10">
            Der unabhängige Ratgeber für Hausbesitzer. Sichern Sie sich bis zu <strong>21.000 €</strong> staatlichen Zuschuss (KfW 458).
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onChangeView('calculator')}
              className="px-8 py-4 bg-eco-600 hover:bg-eco-700 text-white rounded-lg font-bold text-lg flex items-center justify-center gap-2 shadow-lg transition transform hover:-translate-y-1"
            >
              <Calculator className="w-6 h-6" />
              Jetzt Förderung berechnen
            </button>
            <button 
              onClick={() => onChangeView('contact')}
              className="px-8 py-4 bg-white text-brand-900 hover:bg-gray-50 rounded-lg font-bold text-lg flex items-center justify-center gap-2 shadow-lg transition"
            >
              Angebot anfordern
            </button>
          </div>
          <div className="mt-12 flex gap-6 text-sm font-medium text-brand-200">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-eco-500"/> Unabhängig</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-eco-500"/> Aktuell (Stand 01/2025)</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-eco-500"/> Kostenlos</div>
          </div>
        </div>
      </div>

      {/* 3 Boxes Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Box 1: Kosten */}
          <div 
            onClick={() => onChangeView('costs')}
            className="bg-white p-8 rounded-xl shadow-xl border-b-4 border-brand-500 cursor-pointer hover:shadow-2xl transition group"
          >
            <div className="bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-100 transition">
              <Euro className="w-8 h-8 text-brand-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition">Kosten 2025</h3>
            <p className="text-gray-600 mb-6">
              Was kostet eine Wärmepumpe wirklich? Wir zeigen reale Preise für Gerät, Installation und Zubehör.
            </p>
            <div className="flex items-center text-brand-600 font-bold">
              Zur Kostenübersicht <ArrowRight className="w-5 h-5 ml-2" />
            </div>
          </div>

          {/* Box 2: Förderung */}
          <div 
            onClick={() => onChangeView('subsidy')}
            className="bg-white p-8 rounded-xl shadow-xl border-b-4 border-eco-500 cursor-pointer hover:shadow-2xl transition group"
          >
            <div className="bg-eco-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-eco-100 transition">
              <Calculator className="w-8 h-8 text-eco-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-eco-600 transition">Förderung</h3>
            <p className="text-gray-600 mb-6">
              Die neue KfW-Förderung 458 erklärt: Wer bekommt den Geschwindigkeitsbonus? Wie beantrage ich richtig?
            </p>
            <div className="flex items-center text-eco-600 font-bold">
              Zum Förder-Guide <ArrowRight className="w-5 h-5 ml-2" />
            </div>
          </div>

          {/* Box 3: Vergleich */}
          <div 
            onClick={() => onChangeView('comparison')}
            className="bg-white p-8 rounded-xl shadow-xl border-b-4 border-purple-500 cursor-pointer hover:shadow-2xl transition group"
          >
            <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-100 transition">
              <BarChart3 className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition">Vergleich</h3>
            <p className="text-gray-600 mb-6">
              Viessmann, Vaillant oder Bosch? Die besten Modelle im direkten Vergleich bzgl. Effizienz (JAZ) und Lautstärke.
            </p>
            <div className="flex items-center text-purple-600 font-bold">
              Zum Testsieger <ArrowRight className="w-5 h-5 ml-2" />
            </div>
          </div>

        </div>
      </div>
      
      {/* Partner Section */}
      <div className="bg-gray-50 pb-16">
        <PartnerGrid />
      </div>
      
      {/* Trust Section */}
      <div className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Bekannt aus der Fachpresse</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
                <span className="text-xl font-bold text-gray-800">Haustec.de</span>
                <span className="text-xl font-bold text-gray-800">SHK Profi</span>
                <span className="text-xl font-bold text-gray-800">Energie & Management</span>
                <span className="text-xl font-bold text-gray-800">Moderne Gebäudetechnik</span>
            </div>
        </div>
      </div>
    </div>
  );
};