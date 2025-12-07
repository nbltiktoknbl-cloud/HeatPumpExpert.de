import React, { useState } from 'react';
import { Home } from './components/Home';
import { ArticleContent } from './components/ArticleContent';
import { SubsidyView } from './components/SubsidyView';
import { ComparisonView } from './components/ComparisonView';
import { ContactView } from './components/ContactView';
import { EnglishView } from './components/EnglishView';
import { SubsidyCalculator } from './components/SubsidyCalculator';
import { ImpressumView } from './components/ImpressumView';
import { PrivacyView } from './components/PrivacyView';
import { BlogView } from './components/BlogView';
import { BlogPostView } from './components/BlogPostView';
import { LeadForm } from './components/LeadForm';
import { Menu, Flame, X, Facebook, Twitter, Linkedin, Mail, Globe, BookOpen } from 'lucide-react';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState('home'); // 'home', 'costs', 'subsidy', 'comparison', 'calculator', 'blog', 'blog-post', 'contact', 'en', 'impressum', 'privacy'
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLeadModal, setShowLeadModal] = useState(false);

  const handleNavClick = (view: string) => {
    setActiveView(view);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleSelectPost = (id: string) => {
    setSelectedPostId(id);
    setActiveView('blog-post');
    window.scrollTo(0, 0);
  };

  const getNavLinkClass = (view: string) => {
    const baseClass = "px-3 py-2 rounded-md text-sm transition-colors";
    // Active state styling: Background + Font Weight + Color + Ring
    if (activeView === view || (view === 'blog' && activeView === 'blog-post')) {
      return `${baseClass} bg-brand-50 text-[#0369a1] font-bold shadow-sm ring-1 ring-brand-100`;
    }
    // Inactive state styling: Hover effect with specific hex color #0369a1 and subtle underline
    return `${baseClass} font-medium text-gray-600 hover:bg-gray-50 hover:text-[#0369a1] hover:underline hover:underline-offset-4`;
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex flex-col relative overflow-x-hidden">
      
      {/* Lead Form Modal */}
      {showLeadModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setShowLeadModal(false)}
            aria-hidden="true"
          />
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
             <button 
               onClick={() => setShowLeadModal(false)} 
               className="absolute top-4 right-4 z-20 p-2 bg-white/80 hover:bg-white text-gray-600 hover:text-gray-900 rounded-full transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
               aria-label="Schließen"
             >
               <X className="w-6 h-6" />
             </button>
             <div className="p-1">
               <LeadForm />
             </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 backdrop-blur-sm ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Slide-in Drawer */}
      <div className={`fixed inset-y-0 right-0 z-[70] w-[280px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-5 border-b border-gray-100 bg-white">
            <span className="font-bold text-xl tracking-tight text-gray-900 flex items-center gap-2">
               <Flame className="w-6 h-6 text-brand-600" /> Navigation
            </span>
            <button 
              onClick={() => setMobileMenuOpen(false)} 
              className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-label="Menü schließen"
            >
              <X className="w-6 h-6" />
            </button>
        </div>
        <div className="p-4 space-y-2 overflow-y-auto flex-1">
           <button onClick={() => handleNavClick('home')} className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${activeView === 'home' ? 'bg-brand-50 text-brand-700 font-bold' : 'text-gray-700 hover:bg-gray-50'}`}>Startseite</button>
           <button onClick={() => handleNavClick('costs')} className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${activeView === 'costs' ? 'bg-brand-50 text-brand-700 font-bold' : 'text-gray-700 hover:bg-gray-50'}`}>Kosten 2025</button>
           <button onClick={() => handleNavClick('subsidy')} className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${activeView === 'subsidy' ? 'bg-brand-50 text-brand-700 font-bold' : 'text-gray-700 hover:bg-gray-50'}`}>Förderung</button>
           <button onClick={() => handleNavClick('comparison')} className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${activeView === 'comparison' ? 'bg-brand-50 text-brand-700 font-bold' : 'text-gray-700 hover:bg-gray-50'}`}>Vergleich</button>
           <button onClick={() => handleNavClick('calculator')} className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${activeView === 'calculator' ? 'bg-brand-50 text-brand-700 font-bold' : 'text-gray-700 hover:bg-gray-50'}`}>Förderrechner</button>
           <button onClick={() => handleNavClick('blog')} className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${activeView === 'blog' || activeView === 'blog-post' ? 'bg-brand-50 text-brand-700 font-bold' : 'text-gray-700 hover:bg-gray-50'}`}>Ratgeber</button>
           
           <div className="h-px bg-gray-100 my-4 mx-2"></div>
           
           <button 
             onClick={() => {
               setMobileMenuOpen(false);
               setShowLeadModal(true);
             }} 
             className="block w-full text-center px-4 py-3 rounded-lg text-base font-bold text-white bg-brand-600 hover:bg-brand-700 shadow-md transition-all transform hover:scale-[1.02]"
           >
             Angebot anfordern
           </button>
           <button onClick={() => handleNavClick('en')} className="block w-full text-center px-4 py-3 rounded-lg text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 flex items-center gap-2 justify-center mt-2">
             <Globe className="w-4 h-4" /> English Version
           </button>
        </div>
        <div className="p-4 bg-gray-50 text-xs text-center text-gray-400 border-t border-gray-100">
           &copy; 2025 HeatPumpExpert.de
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
              <Flame className="w-8 h-8 text-brand-600" />
              <span className="font-bold text-xl tracking-tight text-gray-900">HeatPump<span className="text-brand-600">Expert</span>.de</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-2">
              <button 
                onClick={() => handleNavClick('home')} 
                className={getNavLinkClass('home')}
              >
                Start
              </button>
              <button 
                onClick={() => handleNavClick('costs')} 
                className={getNavLinkClass('costs')}
              >
                Kosten
              </button>
              <button 
                onClick={() => handleNavClick('subsidy')} 
                className={getNavLinkClass('subsidy')}
              >
                Förderung
              </button>
              <button 
                onClick={() => handleNavClick('comparison')} 
                className={getNavLinkClass('comparison')}
              >
                Vergleich
              </button>
              <button 
                onClick={() => handleNavClick('calculator')} 
                className={getNavLinkClass('calculator')}
              >
                Rechner
              </button>
              <button 
                onClick={() => handleNavClick('blog')} 
                className={getNavLinkClass('blog')}
              >
                Ratgeber
              </button>
              
              <div className="h-6 w-px bg-gray-300 mx-2"></div>
              
              <button 
                onClick={() => handleNavClick('en')} 
                className={`flex items-center gap-1 text-sm px-3 py-2 rounded-md transition-colors ${activeView === 'en' ? 'bg-blue-50 text-[#0369a1] ring-1 ring-blue-100 font-bold' : 'font-semibold text-gray-500 hover:bg-gray-50 hover:text-[#0369a1] hover:underline hover:underline-offset-4'}`}
              >
                <Globe className="w-4 h-4" /> EN
              </button>
            </div>

            <div className="flex items-center gap-4">
               <button 
                 onClick={() => setShowLeadModal(true)} 
                 className="hidden md:block bg-brand-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-brand-700 transition shadow-md text-sm"
               >
                Angebot anfordern
               </button>
               <button 
                 className="md:hidden text-gray-500 p-2 hover:bg-gray-100 rounded-md transition-colors" 
                 onClick={() => setMobileMenuOpen(true)}
                 aria-label="Menü öffnen"
               >
                 <Menu className="w-6 h-6" />
               </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {activeView === 'home' && <Home onChangeView={handleNavClick} />}
        {activeView === 'costs' && (
          <div className="max-w-7xl mx-auto px-4 py-8">
            <ArticleContent onNavigate={handleNavClick} />
          </div>
        )}
        {activeView === 'subsidy' && <SubsidyView />}
        {activeView === 'comparison' && <ComparisonView />}
        {activeView === 'calculator' && (
           <div className="max-w-4xl mx-auto px-4 py-12">
             <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Förderrechner 2025</h1>
             <p className="text-center text-gray-600 mb-8">Ermitteln Sie in wenigen Klicks Ihren Zuschuss nach KfW 458.</p>
             <SubsidyCalculator />
           </div>
        )}
        {activeView === 'blog' && <BlogView onSelectPost={handleSelectPost} />}
        {activeView === 'blog-post' && selectedPostId && (
          <BlogPostView 
            postId={selectedPostId} 
            onBack={() => setActiveView('blog')} 
            onNavigate={handleNavClick}
          />
        )}
        {activeView === 'contact' && <ContactView />}
        {activeView === 'en' && <EnglishView onSwitchToGerman={() => handleNavClick('home')} />}
        {activeView === 'impressum' && <ImpressumView />}
        {activeView === 'privacy' && <PrivacyView />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center gap-2 mb-4">
                <Flame className="w-6 h-6 text-brand-500" />
                <span className="text-xl font-bold text-white">HeatPumpExpert.de</span>
             </div>
             <p className="text-sm max-w-sm">
               Ihr Nr. 1 Ratgeber für nachhaltiges Heizen in Deutschland. Unabhängige Beratung, aktuelle Preise und Förder-Tools für die DACH-Region.
             </p>
             <div className="flex gap-4 mt-6">
               <Facebook className="w-5 h-5 hover:text-white cursor-pointer"/>
               <Twitter className="w-5 h-5 hover:text-white cursor-pointer"/>
               <Linkedin className="w-5 h-5 hover:text-white cursor-pointer"/>
               <Mail className="w-5 h-5 hover:text-white cursor-pointer"/>
             </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Seiten</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => handleNavClick('costs')} className="hover:text-brand-400">Kosten 2025</button></li>
              <li><button onClick={() => handleNavClick('subsidy')} className="hover:text-brand-400">Förderung</button></li>
              <li><button onClick={() => handleNavClick('comparison')} className="hover:text-brand-400">Vergleich</button></li>
              <li><button onClick={() => handleNavClick('blog')} className="hover:text-brand-400">Ratgeber</button></li>
              <li><button onClick={() => handleNavClick('calculator')} className="hover:text-brand-400">Rechner</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => handleNavClick('impressum')} className="hover:text-brand-400">Impressum</button></li>
              <li><button onClick={() => handleNavClick('privacy')} className="hover:text-brand-400">Datenschutz</button></li>
              <li><span className="cursor-pointer hover:text-brand-400">Cookie-Einstellungen</span></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-xs text-center flex flex-col md:flex-row justify-between items-center gap-4">
           <span>&copy; 2025 HeatPumpExpert.de. Alle Rechte vorbehalten.</span>
           <span>Made with ❤️ for clean energy.</span>
        </div>
      </footer>
    </div>
  );
};

export default App;