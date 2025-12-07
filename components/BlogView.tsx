import React, { useEffect } from 'react';
import { blogPosts } from './blogData';
import { Clock, User, ArrowRight, BookOpen } from 'lucide-react';
import { GeneratedImage } from './GeneratedImage';

interface BlogViewProps {
  onSelectPost: (id: string) => void;
}

export const BlogView: React.FC<BlogViewProps> = ({ onSelectPost }) => {
  useEffect(() => {
    document.title = "Ratgeber Wärmepumpe & Sanierung | HeatPumpExpert.de";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Experten-Artikel zu Wärmepumpen, Altbau-Sanierung und Förderungen. Tipps & Tricks für Hausbesitzer.");
    }
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <div className="bg-white border-b border-gray-200 mb-12">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Wärmepumpe & Energie Ratgeber</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Tiefgehende Analysen, praktische Tipps und aktuelle News rund um die Energiewende im Heizungskeller.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div 
                key={post.id} 
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full cursor-pointer group"
                onClick={() => onSelectPost(post.id)}
            >
              <div className="relative h-48 overflow-hidden">
                <GeneratedImage 
                    src={post.imageUrl} 
                    alt={post.title} 
                    prompt={post.prompt}
                    className="w-full h-full"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-700 shadow-sm z-10">
                    {post.category}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3"/> {post.readTime}</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3"/> {post.author}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors line-clamp-2">
                    {post.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-sm line-clamp-3 flex-1">
                    {post.excerpt}
                </p>
                
                <div className="flex items-center text-brand-600 font-bold text-sm mt-auto group-hover:underline decoration-2 underline-offset-4">
                    Artikel lesen <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"/>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Newsletter / CTA Box */}
        <div className="mt-16 bg-brand-900 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-brand-300"/>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Nichts mehr verpassen?</h2>
                <p className="text-brand-100 mb-8">
                    Die Vorschriften ändern sich ständig. Wir halten Sie auf dem Laufenden über neue Förderungen und technische Entwicklungen.
                </p>
                {/* Visual placeholder only, functionality handled in LeadForm context typically */}
                <div className="inline-block bg-white/10 backdrop-blur-md rounded-lg p-2 border border-white/20">
                    <span className="text-sm font-medium px-4">Neue Beiträge erscheinen monatlich.</span>
                </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-eco-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
};