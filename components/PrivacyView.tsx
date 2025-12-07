import React from 'react';

export const PrivacyView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>
      
      <div className="space-y-6 text-gray-700">
        <p>
          Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer Privatsphäre ist für uns sehr wichtig. Nachstehend informieren wir Sie ausführlich über den Umgang mit Ihren Daten.
        </p>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">1. Zugriffsdaten und Hosting</h2>
          <p>
            Sie können unsere Webseiten besuchen, ohne Angaben zu Ihrer Person zu machen. Bei jedem Aufruf einer Webseite speichert der Webserver lediglich automatisch ein sogenanntes Server-Logfile, das z.B. den Namen der angeforderten Datei, Ihre IP-Adresse, Datum und Uhrzeit des Abrufs, übertragene Datenmenge und den anfragenden Provider (Zugriffsdaten) enthält und den Abruf dokumentiert.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">2. Datenerhebung und -verwendung</h2>
          <p>
            Wir erheben personenbezogene Daten, wenn Sie uns diese im Rahmen Ihrer Kontaktaufnahme (z.B. per Kontaktformular oder E-Mail) freiwillig mitteilen. Pflichtfelder werden als solche gekennzeichnet, da wir in diesen Fällen die Daten zwingend zur Bearbeitung Ihrer Kontaktaufnahme benötigen. Welche Daten erhoben werden, ist aus den jeweiligen Eingabeformularen ersichtlich.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">3. Weitergabe an Partner</h2>
          <p>
            Zur Vermittlung von Angeboten für Wärmepumpen geben wir Ihre eingegebenen Daten (Name, Kontaktdaten, Gebäudedaten) an bis zu drei ausgewählte Fachbetriebe oder Vermittlungsplattformen weiter. Dies geschieht nur auf Grundlage Ihrer expliziten Einwilligung im Anfrageformular.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">4. Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf unentgeltliche Auskunft über Ihre gespeicherten Daten sowie ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten wenden Sie sich bitte an uns.
          </p>
        </div>
      </div>
    </div>
  );
};