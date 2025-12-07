import React from 'react';
import { BlogPost } from '../types';
import { CheckCircle2, AlertTriangle, TrendingUp } from 'lucide-react';

export const blogPosts: BlogPost[] = [
  {
    id: 'waermepumpe-lautstaerke',
    title: 'Wie laut sind Wärmepumpen wirklich?',
    excerpt: 'Lärmbelästigung durch Wärmepumpen ist ein häufiges Streitthema. Wir klären auf über Dezibel-Werte, Abstandsregeln und Flüstermodi.',
    date: '15. Januar 2025',
    author: 'Thomas Weber',
    authorImageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    category: 'Technik',
    readTime: '5 Min.',
    imageUrl: 'https://images.unsplash.com/photo-1599690925058-90e1a0b45154?auto=format&fit=crop&q=80&w=800',
    prompt: 'Cinematic close-up photography of a modern, silent heat pump outdoor unit in a peaceful residential garden at twilight, visualization of silence with soft lighting, premium materials, matte white finish, 8k resolution, highly detailed',
    content: (
      <>
        <p className="lead text-xl text-gray-600 mb-6">
          "Die brummt doch den ganzen Tag!" – dieses Vorurteil hält sich hartnäckig. Doch moderne Geräte sind oft leiser als ein Kühlschrank.
        </p>
        <h3 className="text-2xl font-bold mb-4 text-gray-900">Schallleistungspegel vs. Schalldruckpegel</h3>
        <p className="mb-4 text-gray-700">
          Entscheidend für die Beurteilung ist der Unterschied zwischen dem, was das Gerät aussendet (Schallleistung) und dem, was beim Nachbarn ankommt (Schalldruck). Der Schalldruck nimmt mit der Entfernung drastisch ab.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
          <li><strong>Direkt am Gerät:</strong> 50–60 dB(A) (vergleichbar mit normaler Unterhaltung)</li>
          <li><strong>In 3 Metern Entfernung:</strong> 30–40 dB(A) (vergleichbar mit Flüstern oder Vogelgezwitscher)</li>
        </ul>
        <div className="bg-brand-50 p-6 rounded-lg border-l-4 border-brand-500 mb-6">
            <h4 className="font-bold text-brand-900 flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5"/> Tipp: Silent Mode
            </h4>
            <p className="text-brand-800">
                Achten Sie beim Kauf auf einen "Silent Mode" oder "Nachtmodus". Dieser reduziert die Lüfterdrehzahl in der Nacht und senkt die Lautstärke um weitere 3-5 dB(A).
            </p>
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-900">Abstandsflächen und TA Lärm</h3>
        <p className="mb-4 text-gray-700">
            In reinen Wohngebieten darf der Lärmpegel nachts 35 dB(A) am Fenster des Nachbarn nicht überschreiten. Mit modernen Geräten (z.B. Viessmann Vitocal 250-A oder Wolf CHA) ist dies bei 3 Metern Abstand meist problemlos einhaltbar.
        </p>
      </>
    )
  },
  {
    id: 'waermepumpe-altbau-heizkoerper',
    title: 'Wärmepumpe im Altbau: Geht das mit Heizkörpern?',
    excerpt: 'Muss die Fußbodenheizung rein? Nein! Wir zeigen, wie Hochtemperatur-Wärmepumpen auch mit alten Radiatoren effizient arbeiten.',
    date: '02. Januar 2025',
    author: 'Sarah Meyer',
    authorImageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    category: 'Sanierung',
    readTime: '7 Min.',
    imageUrl: 'https://images.unsplash.com/photo-1507646227500-4d389b0012be?auto=format&fit=crop&q=80&w=800',
    prompt: 'Interior architectural shot of a renovated classic German Altbau living room, high ceilings with decorative stucco, herringbone parquet floor, featuring a modern flat white radiator on the wall, cozy warm ambient lighting, 8k resolution',
    content: (
      <>
        <p className="lead text-xl text-gray-600 mb-6">
            Lange hieß es: Wärmepumpe nur im Neubau. Das ist technischer Stand von gestern. Heute werden 40% aller Wärmepumpen im Bestand verbaut.
        </p>
        <h3 className="text-2xl font-bold mb-4 text-gray-900">Die Vorlauftemperatur ist entscheidend</h3>
        <p className="mb-4 text-gray-700">
            Alte Gasheizungen fahren oft unnötig hohe Temperaturen (70°C+). Prüfen Sie im Winter: Werden Ihre Räume auch warm, wenn Sie die Vorlauftemperatur auf 55°C begrenzen? Wenn ja, ist Ihr Haus "Wärmepumpen-ready".
        </p>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
            <h4 className="font-bold text-yellow-900 flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5"/> Heizkörper-Check
            </h4>
            <p className="text-yellow-800">
                Kleine Rippenheizkörper ("Gliederheizkörper") sind ungünstig, da sie wenig Fläche haben. Tauschen Sie diese gegen moderne Plattenheizkörper (Typ 22 oder 33). Kostenpunkt: ca. 500-800 € pro Stück inkl. Montage. Das steigert die Effizienz enorm (JAZ +0,5).
            </p>
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-900">R290 Propan als Gamechanger</h3>
        <p className="mb-4 text-gray-700">
            Wärmepumpen mit dem Kältemittel R290 können Vorlauftemperaturen bis 70°C erreichen, ohne den elektrischen Heizstab zu nutzen. Damit können selbst ungedämmte Häuser warmgehalten werden – auch wenn eine Dämmung natürlich die Betriebskosten senkt.
        </p>
      </>
    )
  },
  {
    id: 'photovoltaik-kombination',
    title: 'Wärmepumpe + Photovoltaik: Das Traumpaar?',
    excerpt: 'Lohnt sich die Kombination? Wie viel Autarkie ist realistisch? Wir rechnen nach, ob sich der PV-Strom für die Heizung nutzen lässt.',
    date: '20. Dezember 2024',
    author: 'Dipl.-Ing. Markus Koch',
    authorImageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    category: 'Energie',
    readTime: '6 Min.',
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800',
    prompt: 'Wide architectural shot of a modern energy-efficient single family house with solar panels on the roof and a heat pump unit in the green garden, sunny spring day, blue sky, symbolizing sustainable energy independence, 8k photorealistic',
    content: (
      <>
        <h3 className="text-2xl font-bold mb-4 text-gray-900">Das saisonale Dilemma</h3>
        <p className="mb-4 text-gray-700">
            Im Sommer haben Sie Stromüberschuss, brauchen aber kaum Wärme (nur Warmwasser). Im Winter braucht die Wärmepumpe viel Strom, aber die PV-Anlage liefert wenig. Passt das zusammen?
        </p>
        <p className="mb-4 text-gray-700">
            <strong>Ja, aber vor allem in der Übergangszeit!</strong> Im März, April, September und Oktober liefert die PV-Anlage oft genug Strom, um das Haus tagsüber zu heizen.
        </p>
        
        <h3 className="text-2xl font-bold mb-4 text-gray-900">SG-Ready Schnittstelle</h3>
        <p className="mb-4 text-gray-700">
            Achten Sie darauf, dass Ihre Wärmepumpe "SG-Ready" (Smart Grid Ready) ist. Wenn die PV-Anlage Überschuss meldet, kann die Wärmepumpe das Brauchwasser höher erhitzen (z.B. auf 60°C statt 50°C) und so Energie speichern.
        </p>

        <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-6">
            <h4 className="font-bold text-green-900 flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5"/> Wirtschaftlichkeit
            </h4>
            <p className="text-green-800">
                Ohne Wärmepumpe liegt der PV-Eigenverbrauch oft nur bei 30%. Mit Wärmepumpe können Sie diesen auf 45-55% steigern. Da Netzstrom ca. 30 Cent kostet und Gestehungskosten von PV bei 10-12 Cent liegen, sparen Sie mit jeder selbst genutzten kWh bares Geld.
            </p>
        </div>
      </>
    )
  }
];
