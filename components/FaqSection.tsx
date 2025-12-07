import React, { useState } from 'react';
import { FaqItem } from '../types';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs: FaqItem[] = [
  {
    question: "Ist eine Wärmepumpe im Altbau ohne Fußbodenheizung sinnvoll?",
    answer: "Ja, absolut. Moderne Hochtemperatur-Wärmepumpen (z.B. mit Propan R290) erreichen Vorlauftemperaturen bis zu 70°C und können problemlos mit herkömmlichen Heizkörpern betrieben werden. Wichtig ist jedoch, dass die Heizkörper groß genug dimensioniert sind. Ein hydraulischer Abgleich ist Pflicht und wird gefördert."
  },
  {
    question: "Brauche ich eine Genehmigung für die Wärmepumpe?",
    answer: "Für Luft-Wasser-Wärmepumpen benötigen Sie in der Regel keine Genehmigung, müssen aber die Abstandsflächen zum Nachbarn und die Lärmschutzvorgaben (TA Lärm) einhalten. Für Erdwärmesonden ist immer eine Genehmigung der Unteren Wasserbehörde erforderlich."
  },
  {
    question: "Was kostet der Strom für die Wärmepumpe 2025?",
    answer: "Spezielle Wärmepumpenstrom-Tarife liegen aktuell bei ca. 20 bis 28 Cent/kWh. Da die Netzentgelte für steuerbare Verbrauchseinrichtungen (§ 14a EnWG) seit 2024 reduziert sind, ist der Betrieb oft günstiger als Haushaltsstrom."
  },
  {
    question: "Kann ich Photovoltaik mit der Wärmepumpe kombinieren?",
    answer: "Ja, das ist die ideale Kombination ('Sektorenkopplung'). In den Übergangszeiten (Frühling/Herbst) kann die PV-Anlage die Wärmepumpe oft tagsüber komplett versorgen. Mit einem Pufferspeicher oder Batteriespeicher lässt sich die Eigenverbrauchsquote deutlich steigern."
  },
  {
    question: "Wie laut ist eine Wärmepumpe wirklich?",
    answer: "Moderne Geräte sind extrem leise. Im Nachtmodus liegen viele Modelle bei ca. 30-35 dB(A) in 3 Metern Entfernung – das ist leiser als ein Flüstern. Achten Sie auf den Schallleistungspegel im Datenblatt und platzieren Sie das Gerät nicht direkt unter dem Schlafzimmerfenster."
  },
  {
    question: "Wann bekomme ich das Geld von der KfW ausgezahlt?",
    answer: "Die Auszahlung erfolgt erst NACH Durchführung der Maßnahme. Sie müssen in Vorleistung gehen. Nach Einreichung der Rechnungen im KfW-Portal ('Bestätigung nach Durchführung') dauert es erfahrungsgemäß 4-8 Wochen bis zur Überweisung."
  },
  {
    question: "Muss ich mein Haus vorher dämmen?",
    answer: "Nein, eine Dämmung ist keine zwingende Voraussetzung für die Förderung. Oft ist es sogar wirtschaftlicher, erst die Heizung zu tauschen (hoher CO2-Effekt) und später sukzessive zu dämmen. Ein Energieberater kann dies im individuellen Sanierungsfahrplan (iSFP) berechnen."
  },
  {
    question: "Wie oft muss eine Wärmepumpe gewartet werden?",
    answer: "Wärmepumpen sind sehr wartungsarm, da keine Verbrennung stattfindet. Dennoch wird eine jährliche Inspektion durch einen Fachbetrieb empfohlen, um die Effizienz sicherzustellen und Garantieansprüche (oft 5 Jahre) zu wahren. Die Kosten liegen meist zwischen 150 € und 250 €."
  },
  {
    question: "Wie hoch ist die Lebensdauer einer modernen Wärmepumpe?",
    answer: "Man geht von einer durchschnittlichen Lebensdauer von 15 bis 20 Jahren aus. Das am stärksten beanspruchte Bauteil ist der Verdichter (Kompressor). Eine korrekte Dimensionierung ist entscheidend: Ist die Anlage zu groß, schaltet sie zu oft an und aus ('Takten'), was die Lebensdauer verkürzt."
  },
  {
    question: "Ist die Installation auch im Reihenhaus möglich?",
    answer: "Ja, aber hier ist Planung wichtig. In vielen Bundesländern wurden die Abstandsflächen für Wärmepumpen reduziert (oft auf 2,5m oder weniger), dennoch muss der Lärmschutz zum Nachbarn eingehalten werden. Besonders leise Geräte ('Silent Mode') oder Innenaufstellung sind hier oft die Lösung."
  },
  {
    question: "Welche baulichen Voraussetzungen braucht der Aufstellort?",
    answer: "Für Luft-Wärmepumpen benötigt die Außeneinheit ein festes Fundament (Beton oder Gehwegplatten) und einen frostsicheren Kondensatablauf (Kiesbett oder Kanalanschluss), da im Winter mehrere Liter Wasser pro Tag anfallen können. Der Luftstrom darf nicht durch Büsche oder Wände blockiert werden."
  },
  {
    question: "Kann die Wärmepumpe im Sommer auch kühlen?",
    answer: "Ja, viele moderne Luft-Wasser-Wärmepumpen verfügen über eine 'Active Cooling'-Funktion (Kreislaufumkehr). Sie können das Haus über eine Fußbodenheizung um 2–3 Grad herunterkühlen. Das ist zwar keine Klimaanlage, sorgt aber für sehr angenehme Temperaturen ohne Zugluft."
  },
  {
    question: "Funktioniert die Wärmepumpe auch bei extremen Minustemperaturen (-20°C)?",
    answer: "Ja, moderne Wärmepumpen heizen zuverlässig bis -25°C. Zwar sinkt die Effizienz bei extremer Kälte (COP nähert sich 1-2), aber für die wenigen sehr kalten Tage im Jahr springt der elektrische Heizstab ein. Auf die Jahresbilanz hat das kaum negative Auswirkungen."
  },
  {
    question: "Was bedeutet die 'Dimmbarkeit' nach § 14a EnWG?",
    answer: "Seit 2024 müssen neue Wärmepumpen netzdienlich steuerbar sein. Der Netzbetreiber darf die Leistung im Notfall kurzzeitig dimmen (nicht abschalten!). Im Gegenzug erhalten Sie reduzierte Netzentgelte (Wahlweise Pauschale oder Arbeitspreisreduzierung)."
  },
  {
    question: "Darf ich eine Wärmepumpe im Wasserschutzgebiet aufstellen?",
    answer: "Bei Luft-Wärmepumpen ist das meist unkritisch, besonders wenn sie natürliche Kältemittel wie R290 (Propan) nutzen, die nicht wassergefährdend sind (WGK 0). Erdwärmebohrungen sind in Wasserschutzgebieten jedoch oft verboten oder genehmigungspflichtig."
  },
  {
    question: "Was ist der Unterschied zwischen Split- und Monoblock-Geräten?",
    answer: "Beim Monoblock ist der gesamte Kältekreis in der Außeneinheit (einfachere Installation, keine Kälteschein nötig, ideal für R290). Bei Split-Geräten zirkuliert Kältemittel zwischen Innen- und Außeneinheit. Monoblocks setzen sich im Neubau und Bestand zunehmend durch."
  },
  {
    question: "Lohnt sich die Wärmepumpe für Vermieter?",
    answer: "Ja. Vermieter können 8-10% der Modernisierungskosten (abzüglich Förderung) auf die Jahreskaltmiete umlegen (Modernisierungsumlage). Zudem steigt der Immobilienwert und die CO2-Kostenaufteilung entfällt weitgehend, da kaum noch CO2-Preis für fossile Brennstoffe anfällt."
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="my-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Häufige Fragen (FAQ)</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center p-5 text-left focus:outline-none hover:bg-gray-50 transition"
            >
              <span className="font-bold text-gray-800 text-lg pr-4">{faq.question}</span>
              {openIndex === index ? <ChevronUp className="text-brand-500 shrink-0" /> : <ChevronDown className="text-gray-400 shrink-0" />}
            </button>
            {openIndex === index && (
              <div className="p-5 pt-0 text-gray-600 border-t border-gray-100 bg-gray-50 leading-relaxed">
                <p className="mt-4">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};