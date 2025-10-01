import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsSection from '@/components/NewsSection';
import AboutSection from '@/components/AboutSection';
import JournalistsSection from '@/components/JournalistsSection';
import { newsArticles, journalists } from '@/data/content';

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeSection, setActiveSection] = useState('news');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      {activeSection === 'news' && (
        <NewsSection
          newsArticles={newsArticles}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          email={email}
          setEmail={setEmail}
          subscribed={subscribed}
          handleSubscribe={handleSubscribe}
        />
      )}

      {activeSection === 'about' && <AboutSection />}

      {activeSection === 'journalists' && <JournalistsSection journalists={journalists} />}

      <Footer setActiveSection={setActiveSection} />
    </div>
  );
}
