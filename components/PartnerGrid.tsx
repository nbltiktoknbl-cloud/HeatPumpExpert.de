import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const PartnerGrid: React.FC = () => {
  const partners = [
    {
      name: "Heizungsfinder",
      color: "bg-orange-500",
      offer: "Kostenloser Heizungs-Vergleich",
      description: "Erhalten Sie bis zu 5 Angebote von geprüften Fachbetrieben aus Ihrer Region.",
      cta: "Angebote vergleichen",
      features: ["Kostenlos", "Unverbindlich", "Regional"]
    },
    {
      name: "Thermondo",
      color: "bg-red-600",
      offer: "Komplettangebot zum Festpreis",
      description: "Deutschlands größter Heizungsinstallateur. Schnelle Verfügbarkeit und Förder-Service inklusive.",
      cta: "Zum Festpreis-Angebot",
      features: ["Festpreis", "Schnelle Montage", "Alles aus einer Hand"]
    },
    {
      name: "1KOMMA5°",
      color: "bg-pink-600",
      offer: "Wärmepumpe + Stromtarif",
      description: "Intelligentes Energiemanagement. Verdienen Sie Geld mit Ihrer Wärmepumpe durch Heartbeat-Technologie.",
      cta: "Verfügbarkeit prüfen",
      features: ["Smart Grid", "Dynamischer Strom", "Tesla-Partner"]
    }
  ];

  return (
    <div className="py-12 bg-gray-50 rounded-xl my-12 border border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">Unsere Empfehlungen für Ihren Heizungstausch</h2>
          <p className="mt-4 text-xl text-gray-500">
            Vergleichen Sie Angebote der führenden Anbieter in Deutschland.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition duration-300 flex flex-col">
              <div className={`${partner.color} h-2`}></div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                <div className="text-sm font-semibold text-brand-600 bg-brand-50 inline-block px-2 py-1 rounded mb-4 w-fit">
                  {partner.offer}
                </div>
                <p className="text-gray-600 mb-6 flex-1">
                  {partner.description}
                </p>
                <ul className="mb-6 space-y-2">
                  {partner.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-500">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gray-900 text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-800 transition flex items-center justify-center">
                  {partner.cta} <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-8">
          *Wir finanzieren uns durch Affiliate-Provisionen. Dies hat keinen Einfluss auf den Preis für Sie.
        </p>
      </div>
    </div>
  );
};