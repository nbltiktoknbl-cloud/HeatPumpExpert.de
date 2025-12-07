import React, { useEffect } from 'react';
import { blogPosts } from './blogData';
import { ArrowLeft, Calendar, Clock, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { GeneratedImage } from './GeneratedImage';

interface BlogPostViewProps {
  postId: string;
  onBack: () => void;
  onNavigate: (view: string) => void;
}

export const BlogPostView: React.FC<BlogPostViewProps> = ({ postId, onBack, onNavigate }) => {
  const post = blogPosts.find(p => p.id === postId);

  useEffect(() => {
    if (post) {
        document.title = `${post.title} | HeatPumpExpert.de`;
        window.scrollTo(0, 0);
    }
  }, [post]);

  const handleShare = (platform: string) => {
    if (!post) return;
    
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const text = post.title;
    
    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent("Schau dir diesen Artikel an: " + url)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
  };

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Artikel nicht gefunden</h2>
        <button onClick={onBack} className="mt-4 text-brand-600 hover:underline">Zurück zur Übersicht</button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-16">
      {/* Header Image */}
      <div className="w-full h-64 md:h-96 relative">
        <GeneratedImage 
            src={post.imageUrl} 
            alt="Placeholder image for blog post" 
            prompt={post.prompt}
            className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-4 md:p-12 text-white max-w-7xl mx-auto">
            <button 
                onClick={onBack} 
                className="flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white mb-6 transition-colors backdrop-blur-sm bg-black/20 px-3 py-1 rounded-lg w-fit"
            >
                <ArrowLeft className="w-4 h-4" /> Zurück zum Ratgeber
            </button>
            <div className="flex gap-4 text-sm font-medium mb-3 text-brand-200">
                <span className="bg-brand-600 px-2 py-0.5 rounded text-white">{post.category}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4"/> {post.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 text-shadow-sm">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/95">
                <div className="flex items-center gap-3">
                    <img 
                        src={post.authorImageUrl} 
                        alt={post.author} 
                        className="w-10 h-10 rounded-full border-2 border-white/30 shadow-sm"
                    />
                    <span className="font-semibold text-base">{post.author}</span>
                </div>
                <div className="flex items-center gap-2 opacity-90 border-l border-white/20 pl-6 h-8">
                    <Calendar className="w-4 h-4"/> 
                    <span>{post.date}</span>
                </div>
            </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-lg prose-slate mx-auto">
           {post.content}
        </article>

        {/* LinkedIn Share Button */}
        <div className="flex justify-center mt-12">
            <button 
                onClick={() => handleShare('linkedin')}
                className="flex items-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors"
            >
                <Linkedin className="w-5 h-5" />
                Diesen Artikel auf LinkedIn teilen
            </button>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-gray-50 rounded-xl border border-gray-200 text-center not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Haben Sie Fragen zu Ihrem Projekt?</h3>
            <p className="text-gray-600 mb-6">Lassen Sie sich von Experten beraten und holen Sie sich ein unverbindliches Angebot.</p>
            <button 
                onClick={() => onNavigate('contact')}
                className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:-translate-y-1"
            >
                Kostenloses Angebot anfordern
            </button>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-sm gap-4">
            <button onClick={onBack} className="flex items-center gap-2 hover:text-brand-600 transition order-2 sm:order-1">
                <ArrowLeft className="w-4 h-4"/> Weitere Artikel lesen
            </button>
            <div className="flex items-center gap-3 order-1 sm:order-2">
                <span className="font-medium text-gray-700">Teilen:</span>
                <div className="flex gap-2">
                    <button onClick={() => handleShare('facebook')} className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition" aria-label="Auf Facebook teilen">
                        <Facebook className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleShare('twitter')} className="p-2 bg-sky-100 text-sky-500 rounded-full hover:bg-sky-200 transition" aria-label="Auf Twitter teilen">
                        <Twitter className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleShare('linkedin')} className="p-2 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition" aria-label="Auf LinkedIn teilen">
                        <Linkedin className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleShare('email')} className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition" aria-label="Per E-Mail senden">
                        <Mail className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};