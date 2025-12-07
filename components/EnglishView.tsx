import React from 'react';
import { ArrowRight, Info } from 'lucide-react';

interface EnglishViewProps {
  onSwitchToGerman: () => void;
}

export const EnglishView: React.FC<EnglishViewProps> = ({ onSwitchToGerman }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-8">
        <div className="flex gap-3">
           <Info className="w-6 h-6 text-blue-600 shrink-0" />
           <p className="text-blue-900">
             <strong>Note:</strong> This is a summary for international visitors. The full detailed guide and calculator are available in the German version.
           </p>
        </div>
      </div>

      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Heat Pump Costs & Grants in Germany 2025</h1>
      
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        Germany offers one of the most attractive subsidy programs for heat pumps in Europe. Homeowners can receive up to <strong>70% of the eligible costs</strong> back from the state (KfW 458 program).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Estimated Costs 2025</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex justify-between border-b py-2"><span>Air-Source Heat Pump:</span> <span className="font-bold">21.000 € – 34.000 €</span></li>
            <li className="flex justify-between border-b py-2"><span>Ground-Source Heat Pump:</span> <span className="font-bold">30.000 € – 50.000 €</span></li>
            <li className="text-sm text-gray-500 pt-2">*Turnkey prices including installation, before grants.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Available Grants (KfW)</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex justify-between border-b py-2"><span>Basic Subsidy:</span> <span className="font-bold text-green-600">30%</span></li>
            <li className="flex justify-between border-b py-2"><span>Speed Bonus (replace old heater):</span> <span className="font-bold text-green-600">+20%</span></li>
            <li className="flex justify-between border-b py-2"><span>Income Bonus (&lt;40k€/year):</span> <span className="font-bold text-green-600">+30%</span></li>
            <li className="flex justify-between py-2 font-bold"><span>Maximum Cap:</span> <span className="font-bold text-green-700">70% (max 21.000 €)</span></li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-xl font-bold mb-4">Looking for an installer?</h3>
        <p className="text-gray-600 mb-6">We connect you with certified local heat pump specialists.</p>
        <button 
           onClick={onSwitchToGerman}
           className="bg-brand-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-700 transition inline-flex items-center gap-2"
        >
           Switch to German Version <ArrowRight className="w-4 h-4"/>
        </button>
      </div>
    </div>
  );
};