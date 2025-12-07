import React, { useEffect } from 'react';
import { Star, ThumbsUp, Wind, Zap } from 'lucide-react';
import { PartnerGrid } from './PartnerGrid';

export const ComparisonView: React.FC = () => {
  useEffect(() => {
    document.title = "Wärmepumpen Vergleich 2025 - Die besten Modelle | HeatPumpExpert.de";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Viessmann, Vaillant, Bosch & Co. im großen Vergleich. Finden Sie die effizienteste und leiseste Wärmepumpe für Ihr Haus. Testsieger 2025.");
    }
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      
      {/* Hero Image for Comparison */}
      <div className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden mb-8 shadow-lg">
         <img 
            src="https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&q=80&w=1200" 
            alt="Smart Home Technology" 
            className="w-full h-full object-cover brightness-75"
         />
         <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white text-center px-4 drop-shadow-md">
              Die besten Wärmepumpen 2025 im Vergleich
            </h1>
         </div>
      </div>

      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Welche Wärmepumpe ist die leiseste? Welche die effizienteste? Wir vergleichen die Top-Modelle von Viessmann, Vaillant, Bosch & Co.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Winner 1 */}
        <div className="bg-white border-2 border-brand-500 rounded-xl shadow-lg overflow-hidden relative transform hover:-translate-y-2 transition duration-300">
          <div className="bg-brand-500 text-white text-center py-2 font-bold uppercase tracking-wider text-sm">
            Gesamtsieger (Sanierung)
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Viessmann Vitocal 250-A</h3>
            <div className="flex gap-1 mb-4 text-yellow-400">
              <Star className="fill-current w-5 h-5"/>
              <Star className="fill-current w-5 h-5"/>
              <Star className="fill-current w-5 h-5"/>
              <Star className="fill-current w-5 h-5"/>
              <Star className="fill-current w-5 h-5"/>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-gray-700"><Zap className="w-4 h-4 text-brand-500"/> Vorlauf bis 70°C</li>
              <li className="flex items-center gap-2 text-gray-700"><Wind className="w-4 h-4 text-brand-500"/> Sehr leise (Super Silent)</li>
              <li className="flex items-center gap-2 text-gray-700"><ThumbsUp className="w-4 h-4 text-brand-500"/> Kältemittel R290 (Propan)</li>
            </ul>
            <div className="bg-gray-50 p-3 rounded text-center">
              <span className="block text-xs text-gray-500">Preis inkl. Montage (ab)</span>
              <span className="block text-xl font-bold text-gray-900">ca. 30.000 €</span>
            </div>
          </div>
        </div>

        {/* Winner 2 */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden relative hover:shadow-xl transition duration-300">
          <div className="bg-gray-100 text-gray-600 text-center py-2 font-bold uppercase tracking-wider text-sm">
            Preis-Leistung
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Vaillant aroTHERM plus</h3>
            <div className="flex gap-1 mb-4 text-yellow-400">
              <Star className="fill-current w-5 h-5"/>
              <Star className="fill-current w-5 h-5"/>
              <Star className="fill-current w-5 h-5"/>
              <Star className="fill-current w-5 h-5"/>
              <Star className="text-gray-300 w-5 h-5"/>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-gray-700"><Zap className="w-4 h-4 text-brand-500"/> Kompakte Monoblock-Bauweise</li>
              <li className="flex items-center gap-2 text-gray-700"><Wind className="w-4 h-4 text-brand-500"/> Ideal für Reihenhäuser</li>
              <li className="flex items-center gap-2 text-gray-700"><ThumbsUp className="w-4 h-4 text-brand-500"/> Hohe Förderung (R290)</li>
            </ul>
            <div className="bg-gray-50 p-3 rounded text-center">
              <span className="block text-xs text-gray-500">Preis inkl. Montage (ab)</span>
              <span className="block text-xl font-bold text-gray-900">ca. 26.000 €</span>
            </div>
          </div>
        </div>

        {/* Winner 3 */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden relative hover:shadow-xl transition duration-300">
          <div className="bg-gray-100 text-gray-600 text-center py-2 font-bold uppercase tracking-wider text-sm">
            Design & Smart
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Bosch Compress 5800i AW</h3>
            <div className="flex gap-1 mb-4 text-yellow-400">
              <Star className="fill-current w-5 h-5"/>
              <Star className="fill-current w-5 h-5"/>
              <Star className="fill-current w-5 h-5"/>
              <Star className="fill-current w-5 h-5"/>
              <Star className="fill-current w-5 h-5"/>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-gray-700"><Zap className="w-4 h-4 text-brand-500"/> Futuristisches Design</li>
              <li className="flex items-center gap-2 text-gray-700"><Wind className="w-4 h-4 text-brand-500"/> Optimierter Schallschutz</li>
              <li className="flex items-center gap-2 text-gray-700"><ThumbsUp className="w-4 h-4 text-brand-500"/> Top App-Steuerung</li>
            </ul>
            <div className="bg-gray-50 p-3 rounded text-center">
              <span className="block text-xs text-gray-500">Preis inkl. Montage (ab)</span>
              <span className="block text-xl font-bold text-gray-900">ca. 29.000 €</span>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6">Vergleichstabelle Technische Daten</h2>
      <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-200">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Modell</th>
              <th className="p-4 text-left">Typ</th>
              <th className="p-4 text-left">Kältemittel</th>
              <th className="p-4 text-left">Vorlauf temp.</th>
              <th className="p-4 text-left">Effizienz (SCOP)</th>
              <th className="p-4 text-left">Wartung / Jahr</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="p-4 font-bold">Viessmann Vitocal 250-A</td>
              <td className="p-4">Luft-Wasser (Monoblock)</td>
              <td className="p-4 text-green-600 font-medium">R290 (Propan)</td>
              <td className="p-4">bis 70°C</td>
              <td className="p-4">ca. 5.1</td>
              <td className="p-4 text-gray-600">ca. 250 €</td>
            </tr>
            <tr>
              <td className="p-4 font-bold">Vaillant aroTHERM plus</td>
              <td className="p-4">Luft-Wasser (Monoblock)</td>
              <td className="p-4 text-green-600 font-medium">R290 (Propan)</td>
              <td className="p-4">bis 75°C</td>
              <td className="p-4">ca. 4.8</td>
              <td className="p-4 text-gray-600">ca. 240 €</td>
            </tr>
            <tr>
              <td className="p-4 font-bold">Wolf CHA-10</td>
              <td className="p-4">Luft-Wasser (Monoblock)</td>
              <td className="p-4 text-green-600 font-medium">R290 (Propan)</td>
              <td className="p-4">bis 70°C</td>
              <td className="p-4">ca. 5.2</td>
              <td className="p-4 text-gray-600">ca. 250 €</td>
            </tr>
            <tr>
              <td className="p-4 font-bold">Daikin Altherma 3 H HT</td>
              <td className="p-4">Luft-Wasser (Split)</td>
              <td className="p-4 text-gray-600">R32</td>
              <td className="p-4">bis 70°C</td>
              <td className="p-4">ca. 4.6</td>
              <td className="p-4 text-gray-600">ca. 260 €</td>
            </tr>
            <tr>
              <td className="p-4 font-bold">Stiebel Eltron WPL 47</td>
              <td className="p-4">Sole-Wasser</td>
              <td className="p-4 text-green-600 font-medium">R410A</td>
              <td className="p-4">bis 60°C</td>
              <td className="p-4">ca. 5.3</td>
              <td className="p-4 text-gray-600">ca. 180 €</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <p className="text-sm text-gray-500 mt-4 text-center">
        *Hinweis: SCOP Werte abhängig von Vorlauftemperatur (35°C) und Klimazone. Preise sind Richtwerte inkl. MwSt. vor Förderung.
      </p>

      {/* Partner Grid added back to comparison view */}
      <div className="mt-16">
          <h3 className="text-xl font-bold text-center mb-8">Angebote vergleichen bei unseren Partnern</h3>
          <PartnerGrid />
      </div>
    </div>
  );
};
