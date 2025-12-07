import React, { useState, useEffect } from 'react';
import { RunningCostsChart } from './RunningCostsChart';
import { SubsidyCalculator } from './SubsidyCalculator';
import { Info, TrendingUp, Share2, Facebook, Twitter, Linkedin, Mail, ArrowRight, Euro, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaqSection } from './FaqSection';

interface ArticleContentProps {
  onNavigate?: (view: string) => void;
}

const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1581094794329-cd1361ddee2d?auto=format&fit=crop&q=80&w=1000",
    alt: "Fachhandwerker bei der Installation einer Wärmepumpe",
    caption: "Die Installation durch einen Fachbetrieb ist Voraussetzung für die staatliche Förderung."
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
    alt: "Modernes Einfamilienhaus mit Wärmepumpe",
    caption: "Wärmepumpen sind ideal für moderne Einfamilienhäuser und Altbausanierungen."
  },
  {
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000",
    alt: "Wohnkomfort durch effiziente Heizung",
    caption: "Genießen Sie wohlige Wärme und niedrige Betriebskosten im ganzen Haus."
  }
];

export const ArticleContent: React.FC<ArticleContentProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://heatpumpexpert.de';
  const shareTitle = "Wärmepumpe Kosten & Förderung 2025 in Deutschland";

  useEffect(() => {
    document.title = "Wärmepumpe Kosten 2025 & Preise | HeatPumpExpert.de";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Was kostet eine Wärmepumpe 2025 wirklich? Detaillierte Kostenübersicht für Luft- & Erdwärmepumpen inkl. Installation und aktuellen Preisen.");
    }
  }, []);

  const handleShare = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`;
        break;
      case 'email':
        url = `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent("Hier ist der Artikel zur Wärmepumpen-Förderung 2025: " + shareUrl)}`;
        break;
    }
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Wärmepumpe Kosten 2025: Der ultimative Preis-Guide",
    "description": "Was kostet eine Wärmepumpe 2025 wirklich? Detaillierte Kostenübersicht für Luft- & Erdwärmepumpen inkl. Installation und aktuellen Preisen.",
    "image": [
      "https://images.unsplash.com/photo-1581094794329-cd1361ddee2d?auto=format&fit=crop&q=80&w=1000"
    ],
    "datePublished": "2025-01-01T08:00:00+01:00",
    "dateModified": new Date().toISOString(),
    "author": [{
      "@type": "Organization",
      "name": "HeatPumpExpert.de",
      "url": "https://heatpumpexpert.de"
    }],
    "publisher": {
      "@type": "Organization",
      "name": "HeatPumpExpert.de",
      "logo": {
        "@type": "ImageObject",
        "url": "https://heatpumpexpert.de/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://heatpumpexpert.de/kosten"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="prose prose-lg prose-slate max-w-4xl mx-auto text-gray-800 break-words font-sans relative">
        {/* Article Header Warning */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8 not-prose rounded-r-lg shadow-sm">
          <div className="flex gap-3">
            <Info className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
            <div>
              <p className="font-bold text-yellow-900 text-lg">Wichtiges Update für Hausbesitzer (Stand: 2025)</p>
              <p className="text-sm text-yellow-800 leading-relaxed">
                Das Gebäudeenergiegesetz (GEG) ist voll wirksam. Der "Geschwindigkeitsbonus" der KfW beträgt aktuell noch 20 %, wird aber ab 2029 schrittweise gesenkt.
              </p>
            </div>
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Wärmepumpe Kosten 2025: Der ultimative Preis-Guide
        </h1>

        <p className="lead text-xl text-gray-600 mb-8 font-medium">
          Planen Sie den Heizungstausch im Jahr 2025? Als langjährige Fachleute im Heizungsbau zeigen wir Ihnen die echte Kostenwahrheit auf deutschen Baustellen – jenseits von geschönten Prospekten.
        </p>

        {/* Image Carousel */}
        <div className="my-8 not-prose rounded-xl overflow-hidden shadow-lg bg-gray-100 relative group">
          <div className="relative h-64 md:h-96 w-full">
            <img 
              src={carouselImages[currentSlide].src} 
              alt={carouselImages[currentSlide].alt} 
              className="w-full h-full object-cover transition-opacity duration-500"
              key={currentSlide} // Force re-render for animation if needed, or rely on src change
            />
            
            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none"
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none"
              aria-label="Nächstes Bild"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {carouselImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 shadow-sm ${
                    currentSlide === idx ? 'bg-white w-8' : 'bg-white/60 w-2.5 hover:bg-white/90'
                  }`}
                  aria-label={`Gehe zu Bild ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="bg-gray-100 p-3 text-sm text-gray-500 text-center border-t border-gray-200">
            {carouselImages[currentSlide].caption}
          </div>
        </div>

        {/* H2 SECTION 1: COSTS */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-b pb-2 border-gray-200">Was kostet eine Wärmepumpe 2025 wirklich?</h2>
        
        <p>
          Die Kosten für eine Wärmepumpe variieren extrem je nach Wärmequelle (Luft, Erde, Wasser). Basierend auf über 1.500 analysierten Angeboten unserer Partnerbetriebe ergeben sich folgende <strong>realistische Preisspannen für 2025</strong> (Brutto-Preise inkl. 19% MwSt., VOR Förderung).
        </p>

        <div className="my-8 not-prose">
          <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
            <Euro className="w-5 h-5 text-brand-600" />
            1. Luft-Wasser-Wärmepumpe (Der Standard)
          </h3>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="space-y-3 text-sm md:text-base">
              <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span className="text-gray-600">Wärmepumpen-Gerät (Monoblock/Split)</span>
                <span className="font-medium text-right">12.000 € – 18.000 €</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span className="text-gray-600">Installation & Montagematerial</span>
                <span className="font-medium text-right">5.000 € – 9.000 €</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span className="text-gray-600">Fundament & Elektroanschluss</span>
                <span className="font-medium text-right">2.500 € – 4.000 €</span>
              </div>
              <div className="flex justify-between pt-3 mt-2 bg-brand-50 p-3 rounded-lg border border-brand-100">
                <span className="font-bold text-brand-900">Gesamtkosten (Schlüsselfertig)</span>
                <span className="font-bold text-brand-700 text-lg">21.000 € – 34.000 €</span>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8 not-prose">
          <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            2. Erdwärmepumpe (Sole-Wasser)
          </h3>
          <p className="text-gray-600 mb-4 text-sm">
            Erdwärmepumpen sind effizienter (JAZ 4,5+) aber teurer durch die Erschließung.
          </p>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
             <ul className="space-y-2 text-sm md:text-base">
              <li className="flex justify-between text-gray-600">
                <span>Erschließung (Sondenbohrung bis 100m):</span>
                <span className="font-medium">10.000 € – 20.000 €</span>
              </li>
              <li className="flex justify-between text-gray-600">
                <span>Gerät & Installation:</span>
                <span className="font-medium">20.000 € – 30.000 €</span>
              </li>
              <li className="pt-2 mt-2 border-t border-gray-100 font-bold flex justify-between text-green-700">
                <span>Gesamtkosten:</span>
                <span className="bg-green-50 px-2 rounded">30.000 € – 50.000 €</span>
              </li>
            </ul>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Versteckte Zusatzkosten</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 marker:text-brand-500">
          <li><strong>Neue Heizkörper:</strong> Alte Rippenheizkörper müssen oft getauscht werden (ca. 600 € – 1.000 € pro Stück).</li>
          <li><strong>Zählerschrank:</strong> Veraltete Elektrik muss erneuert werden (2.000 € – 4.000 €).</li>
          <li><strong>Schallschutz-Gutachten:</strong> In eng bebauten Gebieten teilweise nötig (ca. 500 €).</li>
        </ul>

        {/* Amortisation */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-b pb-2 border-gray-200">Lohnt sich eine Wärmepumpe 2025 noch?</h2>
        <RunningCostsChart />
        <p>
          Wie die Grafik zeigt, schneidet die Wärmepumpe (grün) langfristig deutlich besser ab als die Gasheizung (rot), deren Betriebskosten durch den CO₂-Preis explodieren. Um sicherzustellen, dass Ihr System effizient arbeitet, sollten Sie <span onClick={() => onNavigate?.('contact')} className="text-brand-600 underline cursor-pointer font-medium hover:text-brand-800" role="button">qualifizierte Wärmepumpen-Installateure finden</span>, die eine korrekte Heizlastberechnung durchführen.
        </p>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-brand-50 to-white rounded-xl p-8 text-center my-12 border border-brand-200 shadow-md not-prose">
          <h3 className="text-2xl font-bold text-brand-900 mb-4">Schluss mit Öl und Gas!</h3>
          <p className="text-brand-700 mb-8 max-w-2xl mx-auto text-lg">
            Holen Sie sich jetzt ein unverbindliches Angebot und sichern Sie sich die Förderung.
          </p>
          <button 
            onClick={() => onNavigate?.('contact')}
            className="bg-eco-600 hover:bg-eco-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 flex items-center gap-2 mx-auto text-xl"
          >
            Jetzt persönliches Angebot einholen <ArrowRight className="w-6 h-6" />
          </button>
        </div>
        
        <FaqSection />

        {/* Social Share Section */}
        <div className="mt-16 pt-8 border-t border-gray-200 not-prose">
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Share2 className="w-5 h-5 text-brand-600" /> 
              Teilen Sie diesen Ratgeber
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              <button onClick={() => handleShare('facebook')} className="flex items-center gap-2 px-5 py-2.5 bg-[#1877F2] text-white rounded-lg font-medium hover:bg-blue-700 transition shadow-sm hover:shadow-md text-sm"><Facebook className="w-4 h-4" /> Facebook</button>
              <button onClick={() => handleShare('twitter')} className="flex items-center gap-2 px-5 py-2.5 bg-[#1DA1F2] text-white rounded-lg font-medium hover:bg-blue-500 transition shadow-sm hover:shadow-md text-sm"><Twitter className="w-4 h-4" /> Twitter</button>
              <button onClick={() => handleShare('linkedin')} className="flex items-center gap-2 px-5 py-2.5 bg-[#0A66C2] text-white rounded-lg font-medium hover:bg-blue-800 transition shadow-sm hover:shadow-md text-sm"><Linkedin className="w-4 h-4" /> LinkedIn</button>
              <button onClick={() => handleShare('email')} className="flex items-center gap-2 px-5 py-2.5 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition shadow-sm hover:shadow-md text-sm"><Mail className="w-4 h-4" /> E-Mail</button>
            </div>
          </div>
        </div>
      </article>

      {/* Sticky Bottom Action Button */}
      <button
        onClick={() => onNavigate?.('contact')}
        className="fixed bottom-6 right-6 z-50 bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 px-6 rounded-full shadow-2xl flex items-center gap-2 transition-all transform hover:scale-105 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-8 duration-700 border-2 border-white/20"
      >
        <MapPin className="w-5 h-5" />
        Fachbetrieb finden
      </button>
    </>
  );
};