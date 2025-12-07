import React, { useState, useEffect } from 'react';
import { SubsidyState } from '../types';
import { Calculator, CheckCircle2, HelpCircle } from 'lucide-react';

const MAX_ELIGIBLE_COSTS = 30000; // Cap for the first residential unit
const MAX_PERCENTAGE = 70; // Hard cap

// Internal Tooltip Component
const InfoTooltip = ({ text }: { text: string }) => (
  <div className="group relative inline-block ml-2 align-middle z-50">
    <HelpCircle className="w-4 h-4 text-gray-400 hover:text-brand-500 cursor-help transition-colors" />
    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute w-64 p-3 bg-gray-900 text-white text-xs font-normal rounded-lg shadow-xl bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none text-center leading-relaxed z-50">
      {text}
      {/* Little arrow */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
    </div>
  </div>
);

export const SubsidyCalculator: React.FC = () => {
  const [state, setState] = useState<SubsidyState>({
    base: true, // Always 30% if switching to renewable
    efficiency: false, // 5% for R290 or ground source
    speed: false, // 20% Klimageschwindigkeitsbonus
    income: false, // 30% for <40k household income
    totalCost: 28000,
  });

  const [result, setResult] = useState({
    percentage: 30,
    amount: 0,
    netCost: 0
  });

  useEffect(() => {
    let pct = 30; // Base
    if (state.efficiency) pct += 5;
    if (state.speed) pct += 20;
    if (state.income) pct += 30;

    // Apply cap
    const finalPct = Math.min(pct, MAX_PERCENTAGE);
    
    // Calculate amount based on eligible costs (max 30k)
    const eligibleAmount = Math.min(state.totalCost, MAX_ELIGIBLE_COSTS);
    const subsidyAmount = (eligibleAmount * finalPct) / 100;
    
    setResult({
      percentage: finalPct,
      amount: subsidyAmount,
      netCost: state.totalCost - subsidyAmount
    });
  }, [state]);

  const handleCheckbox = (key: keyof Omit<SubsidyState, 'totalCost'>) => {
    setState(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 my-8" id="rechner-tool">
      <div className="bg-brand-700 p-6 text-white rounded-t-xl">
        <div className="flex items-center gap-3 mb-2">
          <Calculator className="w-8 h-8" />
          <h2 className="text-2xl font-bold">Offizieller Förderrechner 2025 (BEG / KfW 458)</h2>
        </div>
        <p className="text-brand-100">Berechnen Sie jetzt Ihren Investitionszuschuss für die Wärmepumpe.</p>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
              Geschätzte Gesamtkosten (€)
              <InfoTooltip text="Dies sind die Bruttokosten (vor Förderung) für Gerät, Installation und Umfeldmaßnahmen. Maximal förderfähig sind 30.000 € für die erste Wohneinheit." />
            </label>
            <input 
              type="number" 
              value={state.totalCost}
              onChange={(e) => setState({...state, totalCost: Number(e.target.value)})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none font-bold text-gray-800"
            />
            <p className="text-xs text-gray-500 mt-1">Beinhaltet Gerät, Installation, Fundament und Umfeldmaßnahmen.</p>
          </div>

          <div className="space-y-3">
            <p className="font-semibold text-gray-800">Wählen Sie Ihre Boni:</p>
            
            <label className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition border border-transparent hover:border-gray-200 relative group/item">
              <input type="checkbox" checked={true} disabled className="mt-1 w-5 h-5 text-brand-600 rounded bg-gray-200 border-gray-300" />
              <div className="flex-1">
                <span className="font-bold text-gray-900 flex items-center">
                  Grundförderung
                  <InfoTooltip text="Die Basisförderung von 30% steht allen privaten Hauseigentümern zu, die eine alte fossile Heizung gegen eine neue klimafreundliche Wärmepumpe tauschen." />
                </span>
                <span className="text-sm text-gray-600">30% - Für jeden Heizungstausch auf Erneuerbare.</span>
              </div>
            </label>

            <label className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition border border-transparent hover:border-gray-200">
              <input 
                type="checkbox" 
                checked={state.efficiency} 
                onChange={() => handleCheckbox('efficiency')}
                className="mt-1 w-5 h-5 text-brand-600 rounded focus:ring-brand-500 border-gray-300" 
              />
              <div className="flex-1">
                <span className="font-bold text-gray-900 flex items-center">
                  Effizienz-Bonus
                  <InfoTooltip text="Gilt für Wärmepumpen, die als Wärmequelle Wasser, Erdreich oder Abwasser nutzen oder ein natürliches Kältemittel (z.B. R290 Propan) einsetzen." />
                </span>
                <span className="text-sm text-gray-600">+5% - Bei Nutzung von Erdreich, Wasser oder natürlichem Kältemittel (R290).</span>
              </div>
            </label>

            <label className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition border border-transparent hover:border-gray-200">
              <input 
                type="checkbox" 
                checked={state.speed} 
                onChange={() => handleCheckbox('speed')}
                className="mt-1 w-5 h-5 text-brand-600 rounded focus:ring-brand-500 border-gray-300" 
              />
              <div className="flex-1">
                <span className="font-bold text-gray-900 flex items-center">
                  Klimageschwindigkeits-Bonus
                  <InfoTooltip text="Gilt für selbstnutzende Eigentümer, die eine funktionierende Öl-, Kohle-, Gasetagen- oder Nachtspeicherheizung (oder eine mind. 20 Jahre alte Gas- oder Biomasseheizung) austauschen. Bonus sinkt ab 2029." />
                </span>
                <span className="text-sm text-gray-600">+20% - Für Austausch funktionierender Öl-/Gas-/Biomasseheizung bis 2028.</span>
              </div>
            </label>

            <label className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition border border-transparent hover:border-gray-200">
              <input 
                type="checkbox" 
                checked={state.income} 
                onChange={() => handleCheckbox('income')}
                className="mt-1 w-5 h-5 text-brand-600 rounded focus:ring-brand-500 border-gray-300" 
              />
              <div className="flex-1">
                <span className="font-bold text-gray-900 flex items-center">
                  Einkommens-Bonus
                  <InfoTooltip text="Gilt für selbstnutzende Eigentümer mit einem zu versteuernden Haushaltsjahreseinkommen von bis zu 40.000 Euro. Nachweis über Einkommensteuerbescheid." />
                </span>
                <span className="text-sm text-gray-600">+30% - Für selbstnutzende Eigentümer mit zu versteuerndem Haushaltseinkommen &lt; 40.000 €.</span>
              </div>
            </label>
          </div>
        </div>

        {/* Results */}
        <div className="bg-gray-50 p-6 rounded-xl flex flex-col justify-between border border-gray-200">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-600"/> Ihr Ergebnis
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-gray-600">Gesamtkosten Projekt</span>
                <span className="font-bold text-xl">{state.totalCost.toLocaleString('de-DE')} €</span>
              </div>
              
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">Fördersatz (Max. 70%)</span>
                  {result.percentage === 70 && <span className="text-[10px] bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-bold uppercase tracking-wide">Gedeckelt</span>}
                </div>
                <span className="font-bold text-xl text-brand-600">{result.percentage} %</span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Zuschussbetrag</span>
                <span className="font-bold text-2xl text-eco-600">-{result.amount.toLocaleString('de-DE')} €</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex justify-between items-end mb-2">
              <span className="text-gray-900 font-bold text-lg">Ihr Eigenanteil</span>
              <span className="text-3xl font-extrabold text-gray-900">{result.netCost.toLocaleString('de-DE')} €</span>
            </div>
            <p className="text-xs text-gray-500 text-right">Vorbehaltlich KfW-Prüfung.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
