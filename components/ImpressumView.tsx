import React from 'react';

export const ImpressumView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Impressum</h1>
      
      <div className="space-y-6 text-gray-700">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Angaben gemäß § 5 TMG</h2>
          <p>
            HeatPumpExpert.de<br />
            Musterstraße 1<br />
            10115 Berlin<br />
            Deutschland
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Kontakt</h2>
          <p>
            Telefon: +49 (0) 123 44 55 66<br />
            E-Mail: kontakt@heatpumpexpert.de
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            Max Mustermann<br />
            Musterstraße 1<br />
            10115 Berlin
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </div>
      </div>
    </div>
  );
};