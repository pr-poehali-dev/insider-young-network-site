import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const newsArticles = [
  {
    id: 1,
    title: 'Молодежь России выбирает новые профессии',
    subtitle: 'Кто станет востребованным в 2025 году',
    category: 'Карьера',
    date: '1 октября 2025',
    image: '/img/b4128785-3fd5-46e3-8155-c2eedfbd61c5.jpg',
    excerpt: 'Аналитика показывает стремительный рост интереса к IT, креативным индустриям и зеленой энергетике среди молодых специалистов.',
    featured: true,
    views: '12.5K'
  },
  {
    id: 2,
    title: 'Студенческие стартапы получили рекордное финансирование',
    category: 'Бизнес',
    date: '30 сентября 2025',
    image: '/img/8fc47fd0-3951-4f70-a0ad-54d9ef8bd66a.jpg',
    excerpt: 'Венчурные фонды инвестировали более 15 млрд рублей в проекты молодых предпринимателей.',
    featured: false,
    views: '8.2K'
  },
  {
    id: 3,
    title: 'Новая программа обмена для студентов запущена в 50 регионах',
    category: 'Образование',
    date: '29 сентября 2025',
    image: '/img/c638a47c-f38a-4017-8d74-510022a12ef4.jpg',
    excerpt: 'Минобрнауки объявило о старте федеральной программы межрегионального студенческого обмена.',
    featured: false,
    views: '6.7K'
  },
  {
    id: 4,
    title: 'Молодежные инициативы в сфере экологии',
    category: 'Экология',
    date: '28 сентября 2025',
    excerpt: 'Правительство выделило гранты на реализацию 200+ проектов по защите окружающей среды.',
    featured: false,
    views: '5.1K'
  },
  {
    id: 5,
    title: 'Цифровая грамотность: новые стандарты',
    category: 'Технологии',
    date: '27 сентября 2025',
    excerpt: 'Исследование выявило ключевые компетенции для успешной карьеры в цифровой экономике.',
    featured: false,
    views: '9.3K'
  }
];

const categories = ['Все', 'Карьера', 'Бизнес', 'Образование', 'Экология', 'Технологии', 'Культура'];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [activeCategory, setActiveCategory] = useState('Все');
  const [subscribed, setSubscribed] = useState(false);

  const filteredNews = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'Все' || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

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
      <header className="sticky top-0 z-50 w-full bg-black text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 gradient-gold flex items-center justify-center font-bold text-2xl text-black">
                И
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl font-bold tracking-tight">ИНСАЙДЕР МОЛОДЕЖИ</h1>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Федеральное сетевое издание</p>
              </div>
            </div>
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider">Новости</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider">Редакция</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider">Журналисты</a>
              <Button size="sm" className="gradient-gold text-black font-bold hover:opacity-90">
                Подписаться
              </Button>
            </nav>
            <button className="lg:hidden">
              <Icon name="Menu" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <div className="gradient-black text-white py-16 lg:py-24">
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

      <div className="container mx-auto px-4 lg:px-8 -mt-8">
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((cat) => (
            <Button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              variant={activeCategory === cat ? 'default' : 'outline'}
              className={activeCategory === cat ? 'gradient-gold text-black font-bold' : 'bg-white hover:bg-gray-50 font-medium'}
            >
              {cat}
            </Button>
          ))}
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
              .map((article) => (
                <Card key={article.id} className="overflow-hidden border-0 shadow-2xl hover-lift cursor-pointer">
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
                        <span className="flex items-center gap-2">
                          <Icon name="Eye" className="h-4 w-4" />
                          {article.views}
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
              ))}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews
                .filter(article => !article.featured)
                .map((article) => (
                  <Card key={article.id} className="overflow-hidden border-0 shadow-xl hover-lift cursor-pointer group">
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
                        <div className="absolute bottom-4 right-4 flex items-center gap-2 text-white text-sm">
                          <Icon name="Eye" className="h-4 w-4" />
                          {article.views}
                        </div>
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
                ))}
            </div>
          </div>
        )}

        <div className="mt-20 gradient-black text-white p-12 lg:p-16 relative overflow-hidden">
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

        <div className="mt-20 grid md:grid-cols-3 gap-12">
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

      <footer className="bg-black text-white mt-20">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 gradient-gold flex items-center justify-center font-bold text-2xl text-black">
                  И
                </div>
                <div>
                  <h3 className="text-xl font-bold">ИНСАЙДЕР МОЛОДЕЖИ</h3>
                  <p className="text-sm text-gray-400">Федеральное сетевое издание</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Профессиональное освещение событий, важных для молодежи России. 
                Свидетельство о регистрации СМИ.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Разделы</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Новости</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">О редакции</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Журналисты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Контакты</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4" />
                  редакция@инсайдермолодежи.рф
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4" />
                  +7 (495) 123-45-67
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">&copy; 2025 Инсайдер молодежи. Все права защищены.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
