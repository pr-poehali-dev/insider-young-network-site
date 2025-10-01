import { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const useScrollAnimation = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return { elementRef, isVisible };
};

interface NewsArticle {
  id: number;
  title: string;
  subtitle?: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  featured: boolean;
}

interface NewsSectionProps {
  newsArticles: NewsArticle[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  email: string;
  setEmail: (email: string) => void;
  subscribed: boolean;
  handleSubscribe: (e: React.FormEvent) => void;
}

export default function NewsSection({
  newsArticles,
  searchQuery,
  setSearchQuery,
  email,
  setEmail,
  subscribed,
  handleSubscribe
}: NewsSectionProps) {
  const hero = useScrollAnimation();
  const values = useScrollAnimation();
  const newsletter = useScrollAnimation();

  const filteredNews = newsArticles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div 
        ref={hero.elementRef}
        className={`gradient-black text-white py-16 lg:py-24 transition-all duration-1000 ${
          hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Актуальные новости<br />
            <span className="text-gradient-gold">молодежи России</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-2xl mb-8">
            Профессиональная журналистика о том, что важно для молодого поколения
          </p>
          <div className="relative max-w-2xl">
            <Icon name="Search" className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Поиск по материалам..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-400 backdrop-blur-sm"
            />
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 lg:px-8 py-12">
        {filteredNews.length === 0 && searchQuery && (
          <div className="text-center py-20">
            <Icon name="SearchX" className="h-16 w-16 mx-auto text-gray-300 mb-4" />
            <p className="text-xl text-gray-600">По вашему запросу ничего не найдено</p>
          </div>
        )}

        {filteredNews.length > 0 && (
          <div className="space-y-12">
            {filteredNews
              .filter(article => article.featured)
              .map((article, index) => {
                const anim = useScrollAnimation();
                return (
                  <Card 
                    key={article.id} 
                    ref={anim.elementRef}
                    className={`overflow-hidden border-0 shadow-2xl hover-lift cursor-pointer transition-all duration-1000 ${
                      anim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="relative h-[400px] lg:h-auto overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute top-6 left-6">
                          <Badge className="gradient-gold text-black font-bold text-sm px-4 py-2">
                            {article.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-8 lg:p-12 flex flex-col justify-center bg-white">
                        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                          <span className="flex items-center gap-2">
                            <Icon name="Calendar" className="h-4 w-4" />
                            {article.date}
                          </span>
                        </div>
                        <h3 className="text-4xl lg:text-5xl font-bold mb-3 leading-tight">
                          {article.title}
                        </h3>
                        {article.subtitle && (
                          <p className="text-2xl font-medium text-gray-600 mb-6">{article.subtitle}</p>
                        )}
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                          {article.excerpt}
                        </p>
                        <Button size="lg" className="gradient-gold text-black font-bold w-fit hover:opacity-90">
                          Читать полностью
                          <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews
                .filter(article => !article.featured)
                .map((article, index) => {
                  const anim = useScrollAnimation();
                  return (
                    <Card 
                      key={article.id} 
                      ref={anim.elementRef}
                      className={`overflow-hidden border-0 shadow-xl hover-lift cursor-pointer group transition-all duration-1000 ${
                        anim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {article.image && (
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <Badge className="absolute top-4 left-4 gradient-gold text-black font-bold">
                            {article.category}
                          </Badge>
                        </div>
                      )}
                      <CardHeader className="space-y-4">
                        <div className="text-sm text-gray-500 flex items-center gap-2">
                          <Icon name="Calendar" className="h-4 w-4" />
                          {article.date}
                        </div>
                        <CardTitle className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                          {article.title}
                        </CardTitle>
                        <CardDescription className="text-base text-gray-600 leading-relaxed">
                          {article.excerpt}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  );
                })}
            </div>
          </div>
        )}

        <div 
          id="subscribe"
          ref={newsletter.elementRef}
          className={`mt-20 gradient-black text-white p-12 lg:p-16 relative overflow-hidden transition-all duration-1000 ${
            newsletter.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-4xl lg:text-5xl font-bold mb-4">Будьте в курсе</h3>
            <p className="text-xl text-gray-300 mb-8">
              Подпишитесь на рассылку и получайте важные новости первыми
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-400 backdrop-blur-sm"
              />
              <Button type="submit" size="lg" className="gradient-gold text-black font-bold hover:opacity-90 h-14 px-8">
                {subscribed ? (
                  <>
                    <Icon name="Check" className="mr-2 h-5 w-5" />
                    Подписка оформлена
                  </>
                ) : (
                  <>
                    <Icon name="Mail" className="mr-2 h-5 w-5" />
                    Подписаться
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        <div 
          ref={values.elementRef}
          className={`mt-20 grid md:grid-cols-3 gap-12 transition-all duration-1000 ${
            values.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="space-y-4">
            <div className="w-16 h-16 gradient-gold flex items-center justify-center">
              <Icon name="Award" className="h-8 w-8 text-black" />
            </div>
            <h4 className="text-2xl font-bold">Профессионализм</h4>
            <p className="text-gray-600 leading-relaxed">
              Высокие стандарты журналистики и проверенная информация от команды экспертов
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 gradient-gold flex items-center justify-center">
              <Icon name="Zap" className="h-8 w-8 text-black" />
            </div>
            <h4 className="text-2xl font-bold">Актуальность</h4>
            <p className="text-gray-600 leading-relaxed">
              Оперативное освещение событий, важных для молодого поколения России
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 gradient-gold flex items-center justify-center">
              <Icon name="Target" className="h-8 w-8 text-black" />
            </div>
            <h4 className="text-2xl font-bold">Объективность</h4>
            <p className="text-gray-600 leading-relaxed">
              Непредвзятое освещение событий с опорой на факты и экспертные мнения
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
