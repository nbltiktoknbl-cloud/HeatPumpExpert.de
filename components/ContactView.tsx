import React, { useEffect } from 'react';
import { LeadForm } from './LeadForm';
import { Phone, Mail, MapPin } from 'lucide-react';

export const ContactView: React.FC = () => {
  useEffect(() => {
    document.title = "Kostenloses Wärmepumpen Angebot erhalten | HeatPumpExpert.de";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Erhalten Sie bis zu 3 kostenlose und unverbindliche Angebote von geprüften Heizungsbauern aus Ihrer Region. Sparen Sie bis zu 30% durch den Vergleich.");
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Kostenloses Angebot anfordern</h1>
          <p className="text-xl text-gray-600 mb-8">
            Starten Sie jetzt Ihr Wärmepumpen-Projekt. Füllen Sie das Formular aus und erhalten Sie bis zu 3 unverbindliche Angebote von geprüften Fachbetrieben aus Ihrer Region.
          </p>
          
          <div className="bg-brand-50 p-8 rounded-xl border border-brand-100 mb-8">
             <h3 className="font-bold text-brand-900 mb-4">Ihre Vorteile:</h3>
             <ul className="space-y-3">
               <li className="flex items-center gap-3 text-brand-800">
                 <span className="bg-white p-1 rounded-full text-brand-600 font-bold text-xs shadow-sm">✓</span>
                 Kostenlos & Unverbindlich
               </li>
               <li className="flex items-center gap-3 text-brand-800">
                 <span className="bg-white p-1 rounded-full text-brand-600 font-bold text-xs shadow-sm">✓</span>
                 Regionale Meisterbetriebe
               </li>
               <li className="flex items-center gap-3 text-brand-800">
                 <span className="bg-white p-1 rounded-full text-brand-600 font-bold text-xs shadow-sm">✓</span>
                 Vergleich spart bis zu 30%
               </li>
             </ul>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3 rounded-full"><Phone className="w-5 h-5 text-gray-600"/></div>
              <div>
                <h4 className="font-bold text-gray-900">Telefonische Beratung</h4>
                <p className="text-gray-600">0800 - 123 456 78 (Mo-Fr 9-18 Uhr)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3 rounded-full"><Mail className="w-5 h-5 text-gray-600"/></div>
              <div>
                <h4 className="font-bold text-gray-900">E-Mail</h4>
                <p className="text-gray-600">anfrage@heatpumpexpert.de</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <LeadForm />
        </div>
      </div>
    </div>
  );
};