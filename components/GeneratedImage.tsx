import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Info, Calendar, Database, FileText } from 'lucide-react';

interface GeneratedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  prompt?: string;
  model?: string;
  metaSource?: string;
  metaDate?: string;
}

// Simple in-memory cache to prevent re-generation during session
const imageCache: Record<string, string> = {};

export const GeneratedImage: React.FC<GeneratedImageProps> = ({ 
  src, 
  prompt, 
  model = 'gemini-2.5-flash-image', 
  metaSource,
  metaDate,
  ...props 
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [loading, setLoading] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [generationDate, setGenerationDate] = useState<string | null>(null);
  const hasAttemptedRef = useRef(false);

  useEffect(() => {
    // If we have a cached image for this prompt, use it immediately
    if (prompt && imageCache[prompt]) {
        setCurrentSrc(imageCache[prompt]);
        setIsGenerated(true);
        // For cached images, we just assume "today" or "cached" context for now
        setGenerationDate(new Date().toLocaleDateString());
        return;
    }

    const generate = async () => {
      // Avoid generating if no prompt, already attempted this mount, or already cached
      if (!prompt || hasAttemptedRef.current || imageCache[prompt]) return;
      
      hasAttemptedRef.current = true;
      
      // Check for API Key
      let apiKey = process.env.API_KEY;
      if (!apiKey) {
        // Fallback for downloaded projects to run easily
        // We do not prompt in this component to avoid multiple alerts if multiple images load at once.
        // We just log a warning and return, leaving the placeholder.
        console.warn("Skipping image generation: API Key not found.");
        return;
      }

      setLoading(true);

      try {
        const ai = new GoogleGenAI({ apiKey: apiKey });
        const response = await ai.models.generateContent({
          model: model,
          contents: {
            parts: [{ text: prompt }],
          },
        });

        // Loop through parts to find image data (standard pattern for 2.5-flash-image)
        const part = response.candidates?.[0]?.content?.parts?.find(p => p.inlineData);
        if (part && part.inlineData) {
          const mimeType = part.inlineData.mimeType || 'image/png';
          const newSrc = `data:${mimeType};base64,${part.inlineData.data}`;
          
          // Cache and update state
          imageCache[prompt] = newSrc;
          setCurrentSrc(newSrc);
          setIsGenerated(true);
          setGenerationDate(new Date().toLocaleDateString());
        }
      } catch (error) {
        console.error("Failed to generate image for prompt:", prompt, error);
        // On error, we keep the placeholder (src)
      } finally {
        setLoading(false);
      }
    };

    if (prompt) {
        generate();
    }
  }, [prompt, model]);

  // Update currentSrc if the prop src changes (e.g. placeholder updates),
  // but only if we haven't generated/cached an image yet.
  useEffect(() => {
      if (!prompt || !imageCache[prompt]) {
          setCurrentSrc(src);
      }
  }, [src, prompt]);

  // Determine alt text: Use prompt if generated, otherwise fallback to prop or generic placeholder text
  // Compliance with requirement: "ensure the alt text for AI-generated images is descriptive and derived from the prompt, while placeholder images use a generic description like 'Placeholder image for [topic]'."
  const derivedAlt = (isGenerated && prompt) ? prompt : (props.alt || 'Placeholder image for blog post');

  // Determine metadata to display
  const displaySource = metaSource || (isGenerated ? 'Gemini AI' : 'Placeholder / Stock');
  const displayDate = metaDate || (isGenerated ? generationDate : 'Static');

  return (
    <div className={`relative overflow-hidden group ${props.className || ''}`}>
      <img 
        src={currentSrc} 
        {...props} 
        alt={derivedAlt}
        className={`w-full h-full object-cover transition-all duration-1000 ${loading ? 'opacity-80 scale-105 blur-sm' : 'opacity-100 scale-100 blur-0'}`} 
      />
      
      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] transition-all z-10">
          <div className="flex flex-col items-center gap-2">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white shadow-lg"></div>
            <span className="text-white text-xs font-medium bg-black/40 px-2 py-1 rounded backdrop-blur-md">Generiere Bild...</span>
          </div>
        </div>
      )}

      {/* Metadata Overlay (Top Right) */}
      <div className="absolute top-2 right-2 z-20 max-w-[260px] pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
        <div className="bg-black/75 backdrop-blur-md rounded-lg p-3 text-white border border-white/10 shadow-xl space-y-3">
          
          <div className="flex items-center gap-2 pb-2 border-b border-white/10">
            <Info className="w-3.5 h-3.5 text-brand-400" />
            <span className="font-bold uppercase tracking-wide text-[11px] text-gray-100">Image Metadata</span>
          </div>

          <div className="space-y-2 text-[11px]">
            <div className="flex items-center justify-between gap-4">
              <span className="flex items-center gap-1.5 text-gray-400 font-medium">
                <Database className="w-3.5 h-3.5" /> Source
              </span>
              <span className="font-bold text-right truncate max-w-[140px] text-gray-100">
                {displaySource}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span className="flex items-center gap-1.5 text-gray-400 font-medium">
                <Calendar className="w-3.5 h-3.5" /> Date
              </span>
              <span className="font-bold text-right text-gray-100">
                {displayDate}
              </span>
            </div>
            
            {isGenerated && prompt && (
              <div className="pt-2 border-t border-white/10 mt-1">
                <span className="flex items-center gap-1.5 text-gray-400 mb-1.5 font-medium">
                  <FileText className="w-3.5 h-3.5" /> Prompt
                </span>
                <p className="text-[11px] text-gray-300 leading-relaxed line-clamp-4 font-normal italic">
                  "{prompt}"
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* AI Badge (Bottom Right) */}
      {isGenerated && !loading && (
        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded-full backdrop-blur-md flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg border border-white/10 z-20">
          <Sparkles className="w-3 h-3 text-yellow-400" />
          <span>AI Generated</span>
        </div>
      )}
    </div>
  );
};