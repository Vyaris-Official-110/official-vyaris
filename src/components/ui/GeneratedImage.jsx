import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

const apiKey = ""; // Note: Ideally this should be in an env var

export const GeneratedImage = ({ prompt, className = "" }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generate = async () => {
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${apiKey}`, {
          method: 'POST',
          body: JSON.stringify({
            instances: [{ prompt: `High-end tech abstract, ${prompt}, dark aesthetic, neon green accents, minimalist, 8k, 3d render style` }],
            parameters: { sampleCount: 1 }
          })
        });
        const result = await response.json();
        if (result.predictions?.[0]?.bytesBase64Encoded) {
          setImageUrl(`data:image/png;base64,${result.predictions[0].bytesBase64Encoded}`);
        }
      } catch (error) {
        console.error("Image generation failed", error);
      } finally {
        setLoading(false);
      }
    };
    if (apiKey) generate();
    else {
        // Simple delay to simulate loading if no API key
        setTimeout(() => setLoading(false), 1000);
    } 
  }, [prompt]);

  return (
    <div className={`relative overflow-hidden bg-zinc-900 border border-white/5 ${className}`}>
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      ) : (
        <img 
          src={imageUrl || "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop"} 
          alt={prompt} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 grayscale hover:grayscale-0" 
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
    </div>
  );
};
