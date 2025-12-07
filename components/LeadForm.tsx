import React, { useState } from 'react';
import { ArrowRight, Check, ShieldCheck, HelpCircle } from 'lucide-react';
import { LeadFormData } from '../types';

// Internal Tooltip Component
const InfoTooltip = ({ text }: { text: string }) => (
  <div className="group relative inline-block ml-2 align-middle z-50">
    <HelpCircle className="w-4 h-4 text-gray-400 hover:text-brand-500 cursor-help transition-colors" />
    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute w-48 p-2 bg-gray-900 text-white text-xs font-normal rounded-lg shadow-xl bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none text-center leading-relaxed z-50">
      {text}
      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
    </div>
  </div>
);

export const LeadForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    zip: '',
    buildingType: 'Einfamilienhaus',
    heatingType: 'Ölheizung',
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step < 3) {
      setLoading(true);
      setTimeout(() => {
        setStep(step + 1);
        setLoading(false);
      }, 500);
    } else {
      // Final submit
      setLoading(true);
      setTimeout(() => {
        setStep(4); // Success state
        setLoading(false);
        console.log("Lead Submitted:", formData);
      }, 1000);
    }
  };

  if (step === 4) {
    return (
      <div className="bg-green-50 p-8 rounded-xl border border-green-200 text-center sticky top-24 shadow-lg">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Anfrage erfolgreich!</h3>
        <p className="text-gray-600 mb-4">
          Vielen Dank, {formData.name}. Wir haben Ihre Daten erhalten.
        </p>
        <p className="text-sm text-gray-500">
          Bis zu 3 geprüfte Fachbetriebe aus der Region {formData.zip} werden sich in Kürze telefonisch oder per E-Mail bei Ihnen melden.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-xl border border-gray-200 sticky top-24">
      <div className="bg-brand-900 p-4 text-white text-center rounded-t-xl">
        <h3 className="font-bold text-xl">3 Kostenlose Angebote</h3>
        <p className="text-sm text-brand-200 opacity-90">Preise vergleichen & bis zu 30% sparen</p>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full bg-gray-100 h-2">
        <div 
          className="bg-eco-500 h-2 transition-all duration-500" 
          style={{ width: `${(step / 3) * 100}%` }}
        ></div>
      </div>

      <div className="p-6">
        {step === 1 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <h4 className="font-bold text-gray-800 mb-4">Schritt 1: Ihr Gebäude</h4>
            <label className="block">
              <span className="text-gray-700 font-semibold text-sm flex items-center">
                Postleitzahl (PLZ)
                <InfoTooltip text="Bitte geben Sie eine gültige 5-stellige deutsche Postleitzahl ein." />
              </span>
              <input 
                type="text" 
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                placeholder="z.B. 10115" 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-3 focus:border-brand-500 focus:ring-brand-500 outline-none transition" 
              />
            </label>
            <label className="block">
              <span className="text-gray-700 font-semibold text-sm">Gebäudeart</span>
              <select 
                name="buildingType"
                value={formData.buildingType}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-3 bg-white focus:border-brand-500 outline-none transition"
              >
                <option value="Einfamilienhaus">Einfamilienhaus</option>
                <option value="Reihenhaus">Reihenhaus / DHH</option>
                <option value="Mehrfamilienhaus">Mehrfamilienhaus</option>
                <option value="Gewerbe">Gewerbeobjekt</option>
              </select>
            </label>
            <button 
              onClick={handleNext}
              disabled={!formData.zip || formData.zip.length < 4}
              className={`w-full font-bold py-3 rounded-lg flex justify-center items-center gap-2 transition ${!formData.zip || formData.zip.length < 4 ? 'bg-gray-300 cursor-not-allowed text-gray-500' : 'bg-brand-600 text-white hover:bg-brand-700 shadow-md'}`}
            >
              {loading ? 'Prüfe...' : 'Weiter'}
              {!loading && <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
             <h4 className="font-bold text-gray-800 mb-4">Schritt 2: Aktuelle Heizung</h4>
             <label className="block">
              <span className="text-gray-700 font-semibold text-sm">Derzeitige Heizung</span>
              <select 
                name="heatingType"
                value={formData.heatingType}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-3 bg-white focus:border-brand-500 outline-none transition"
              >
                <option value="Ölheizung">Ölheizung</option>
                <option value="Gasheizung">Gasheizung</option>
                <option value="Strom">Nachtspeicher / Strom</option>
                <option value="Holz">Holz / Pellets</option>
                <option value="Fernwärme">Fernwärme</option>
              </select>
            </label>
            <button 
              onClick={handleNext}
              className="w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition flex justify-center items-center gap-2 shadow-md"
            >
              {loading ? 'Prüfe...' : 'Weiter'}
              {!loading && <ArrowRight className="w-4 h-4" />}
            </button>
            <button onClick={() => setStep(1)} className="text-sm text-gray-400 hover:text-gray-600 w-full text-center mt-2">Zurück</button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <h4 className="font-bold text-gray-800 mb-4">Schritt 3: Kontakt für Angebote</h4>
            <label className="block">
              <span className="text-gray-700 font-semibold text-sm flex items-center">
                Ihr Name
                <InfoTooltip text="Bitte geben Sie Ihren Vor- und Nachnamen ein." />
              </span>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Max Mustermann" 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-3 focus:border-brand-500 focus:ring-brand-500 outline-none transition" 
              />
            </label>
            <label className="block">
              <span className="text-gray-700 font-semibold text-sm flex items-center">
                E-Mail Adresse
                <InfoTooltip text="Gültige E-Mail Adresse (z.B. name@beispiel.de) für die Angebote." />
              </span>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@beispiel.de" 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-3 focus:border-brand-500 focus:ring-brand-500 outline-none transition" 
              />
            </label>
            <label className="block">
              <span className="text-gray-700 font-semibold text-sm flex items-center">
                Telefonnummer (für Rückfragen)
                <InfoTooltip text="Ihre Mobil- oder Festnetznummer für kurze Rückfragen der Handwerker." />
              </span>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="0171 12345678" 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-3 focus:border-brand-500 focus:ring-brand-500 outline-none transition" 
              />
            </label>
            <button 
              onClick={handleNext}
              disabled={!formData.name || !formData.email || !formData.phone}
              className={`w-full font-bold py-3 rounded-lg flex justify-center items-center gap-2 transition shadow-lg ${!formData.name || !formData.email || !formData.phone ? 'bg-gray-300 cursor-not-allowed text-gray-500' : 'bg-eco-600 text-white hover:bg-eco-700'}`}
            >
              {loading ? 'Sende Anfrage...' : 'Angebote jetzt anfordern'}
            </button>
            <div className="flex justify-center gap-2 text-xs text-gray-400 mt-2 items-center">
                <ShieldCheck className="w-3 h-3"/>
                <span>100% Kostenlos & Unverbindlich.</span>
            </div>
            <p className="text-[10px] text-gray-400 text-center leading-tight">
              Mit dem Absenden stimmen Sie zu, dass bis zu 3 Fachbetriebe Sie kontaktieren dürfen. Sie können diese Einwilligung jederzeit widerrufen.
            </p>
          </div>
        )}
      </div>
      
      <div className="bg-gray-50 p-3 text-xs text-center text-gray-500 border-t border-gray-100 rounded-b-xl">
        Über 15.000 Anfragen erfolgreich vermittelt in 2024.
      </div>
    </div>
  );
};