import React, { useEffect } from 'react';
import { CheckCircle2, AlertTriangle, Calculator } from 'lucide-react';
import { SubsidyCalculator } from './SubsidyCalculator';

export const SubsidyView: React.FC = () => {
  useEffect(() => {
    document.title = "KfW Förderung 458 (2025) - Bis zu 70% Zuschuss | HeatPumpExpert.de";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Alle Infos zur neuen KfW Heizungsförderung 458. Sichern Sie sich bis zu 21.000 € Zuschuss. Jetzt Förderhöhe online berechnen.");
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
        KfW-Förderung 458 (2025): <span className="text-brand-600">Bis zu 70% Zuschuss sichern</span>
      </h1>
      
      {/* Header Image */}
      <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden mb-8 shadow-md">
        <img 
          src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000" 
          alt="Finanzierung und Förderung berechnen" 
          className="w-full h-full object-cover"
        />
      </div>

      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        Die Bundesförderung für effiziente Gebäude (BEG) wurde grundlegend reformiert. Seit 2024 ist die KfW für den Heizungstausch zuständig (Programm 458). Hier finden Sie alle Details zu den Boni und Voraussetzungen.
      </p>

      {/* Key Facts Box */}
      <div className="bg-brand-50 border border-brand-200 rounded-xl p-6 mb-12">
        <h3 className="font-bold text-brand-900 text-lg mb-4 flex items-center gap-2">
           <CheckCircle2 className="w-6 h-6 text-brand-600"/> Das Wichtigste auf einen Blick
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <li className="flex gap-3">
             <div className="bg-white p-1 rounded h-fit shadow-sm"><CheckCircle2 className="w-4 h-4 text-green-500"/></div>
             <span className="text-gray-700"><strong>Grundförderung:</strong> 30% für alle Antragsteller.</span>
           </li>
           <li className="flex gap-3">
             <div className="bg-white p-1 rounded h-fit shadow-sm"><CheckCircle2 className="w-4 h-4 text-green-500"/></div>
             <span className="text-gray-700"><strong>Maximalförderung:</strong> 70% (gedeckelt bei 21.000 €).</span>
           </li>
           <li className="flex gap-3">
             <div className="bg-white p-1 rounded h-fit shadow-sm"><CheckCircle2 className="w-4 h-4 text-green-500"/></div>
             <span className="text-gray-700"><strong>Förderfähige Kosten:</strong> Max. 30.000 € für die 1. Wohneinheit.</span>
           </li>
           <li className="flex gap-3">
             <div className="bg-white p-1 rounded h-fit shadow-sm"><CheckCircle2 className="w-4 h-4 text-green-500"/></div>
             <span className="text-gray-700"><strong>Antragstellung:</strong> Erst Vertrag unterschreiben, dann beantragen!</span>
           </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6">Alle Förderbausteine im Detail</h2>
      
      <div className="overflow-x-auto mb-12 rounded-lg shadow-sm border border-gray-200">
        <table className="min-w-full bg-white text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-4 px-6 font-bold text-gray-700">Bonus</th>
              <th className="py-4 px-6 font-bold text-gray-700">Höhe</th>
              <th className="py-4 px-6 font-bold text-gray-700">Voraussetzung</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="py-4 px-6 font-semibold">Grundförderung</td>
              <td className="py-4 px-6 text-brand-600 font-bold">30 %</td>
              <td className="py-4 px-6 text-gray-600">Für den Einbau einer klimafreundlichen Heizung (z.B. Wärmepumpe).</td>
            </tr>
            <tr>
              <td className="py-4 px-6 font-semibold">Klimageschwindigkeits-Bonus</td>
              <td className="py-4 px-6 text-brand-600 font-bold">20 %</td>
              <td className="py-4 px-6 text-gray-600">Für selbstnutzende Eigentümer beim Austausch funktionierender Öl-/Gasheizungen (bis Ende 2028).</td>
            </tr>
            <tr>
              <td className="py-4 px-6 font-semibold">Einkommens-Bonus</td>
              <td className="py-4 px-6 text-brand-600 font-bold">30 %</td>
              <td className="py-4 px-6 text-gray-600">Für selbstnutzende Eigentümer mit zu versteuerndem Haushaltseinkommen &lt; 40.000 €.</td>
            </tr>
            <tr>
              <td className="py-4 px-6 font-semibold">Effizienz-Bonus</td>
              <td className="py-4 px-6 text-brand-600 font-bold">5 %</td>
              <td className="py-4 px-6 text-gray-600">Für Wärmepumpen mit natürlichem Kältemittel (R290) oder Erdwärme/Wasser.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-12">
        <div className="flex gap-3">
          <AlertTriangle className="w-6 h-6 text-yellow-600 shrink-0"/>
          <p className="text-yellow-800 text-sm">
            <strong>Wichtig:</strong> Die Boni sind kumulierbar, aber der Gesamtfördersatz ist auf <strong>70 %</strong> begrenzt. Die maximal förderfähigen Kosten betragen 30.000 € für die erste Wohneinheit.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Calculator className="w-6 h-6 text-brand-600" />
          Jetzt Förderung berechnen
      </h2>
      <p className="text-gray-600 mb-6">Nutzen Sie unseren kostenlosen Rechner, um Ihren persönlichen Zuschussanspruch zu prüfen.</p>
      
      <SubsidyCalculator />
    </div>
  );
};