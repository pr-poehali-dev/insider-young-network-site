import { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
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

const newsArticles = [
  {
    id: 1,
    title: 'Молодежь России выбирает новые профессии',
    subtitle: 'Кто станет востребованным в 2025 году',
    category: 'Карьера',
    date: '1 октября 2025',
    image: '/img/b4128785-3fd5-46e3-8155-c2eedfbd61c5.jpg',
    excerpt: 'Аналитика показывает стремительный рост интереса к IT, креативным индустриям и зеленой энергетике среди молодых специалистов.',
    featured: true
  },
  {
    id: 2,
    title: 'Студенческие стартапы получили рекордное финансирование',
    category: 'Бизнес',
    date: '30 сентября 2025',
    image: '/img/8fc47fd0-3951-4f70-a0ad-54d9ef8bd66a.jpg',
    excerpt: 'Венчурные фонды инвестировали более 15 млрд рублей в проекты молодых предпринимателей.',
    featured: false
  },
  {
    id: 3,
    title: 'Новая программа обмена для студентов запущена в 50 регионах',
    category: 'Образование',
    date: '29 сентября 2025',
    image: '/img/c638a47c-f38a-4017-8d74-510022a12ef4.jpg',
    excerpt: 'Минобрнауки объявило о старте федеральной программы межрегионального студенческого обмена.',
    featured: false
  },
  {
    id: 4,
    title: 'Молодежные инициативы в сфере экологии получают поддержку',
    category: 'Экология',
    date: '28 сентября 2025',
    image: '/img/b4128785-3fd5-46e3-8155-c2eedfbd61c5.jpg',
    excerpt: 'Правительство выделило гранты на реализацию 200+ проектов по защите окружающей среды.',
    featured: false
  },
  {
    id: 5,
    title: 'Цифровая грамотность: новые стандарты для молодых специалистов',
    category: 'Технологии',
    date: '27 сентября 2025',
    image: '/img/8fc47fd0-3951-4f70-a0ad-54d9ef8bd66a.jpg',
    excerpt: 'Исследование выявило ключевые компетенции для успешной карьеры в цифровой экономике.',
    featured: false
  },
  {
    id: 6,
    title: 'Молодые ученые представили прорывные разработки',
    category: 'Наука',
    date: '26 сентября 2025',
    image: '/img/c638a47c-f38a-4017-8d74-510022a12ef4.jpg',
    excerpt: 'На всероссийском форуме молодых ученых представлено более 300 инновационных проектов.',
    featured: false
  }
];

const journalists = [
  {
    id: 1,
    name: 'Анна Волкова',
    position: 'Главный редактор',
    specialization: 'Социальная журналистика',
    experience: '12 лет',
    image: '/img/c638a47c-f38a-4017-8d74-510022a12ef4.jpg'
  },
  {
    id: 2,
    name: 'Дмитрий Соколов',
    position: 'Заместитель главного редактора',
    specialization: 'Политика и экономика',
    experience: '10 лет',
    image: '/img/c638a47c-f38a-4017-8d74-510022a12ef4.jpg'
  },
  {
    id: 3,
    name: 'Елена Морозова',
    position: 'Редактор отдела образования',
    specialization: 'Образование и наука',
    experience: '8 лет',
    image: '/img/c638a47c-f38a-4017-8d74-510022a12ef4.jpg'
  },
  {
    id: 4,
    name: 'Максим Петров',
    position: 'Корреспондент',
    specialization: 'Культура и искусство',
    experience: '5 лет',
    image: '/img/c638a47c-f38a-4017-8d74-510022a12ef4.jpg'
  }
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeSection, setActiveSection] = useState('news');

  const filteredNews = newsArticles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  const hero = useScrollAnimation();
  const values = useScrollAnimation();
  const newsletter = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full bg-black text-white shadow-lg">
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
              <button
                onClick={() => setActiveSection('news')}
                className={`text-sm font-medium transition-colors uppercase tracking-wider ${
                  activeSection === 'news' ? 'text-primary' : 'hover:text-primary'
                }`}
              >
                Новости
              </button>
              <button
                onClick={() => setActiveSection('about')}
                className={`text-sm font-medium transition-colors uppercase tracking-wider ${
                  activeSection === 'about' ? 'text-primary' : 'hover:text-primary'
                }`}
              >
                Редакция
              </button>
              <button
                onClick={() => setActiveSection('journalists')}
                className={`text-sm font-medium transition-colors uppercase tracking-wider ${
                  activeSection === 'journalists' ? 'text-primary' : 'hover:text-primary'
                }`}
              >
                Журналисты
              </button>
              <Button 
                size="sm" 
                className="gradient-gold text-black font-bold hover:opacity-90"
                onClick={() => {
                  setActiveSection('news');
                  document.getElementById('subscribe')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Подписаться
              </Button>
            </nav>
            <button className="lg:hidden">
              <Icon name="Menu" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {activeSection === 'news' && (
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
      )}

      {activeSection === 'about' && (
        <main className="container mx-auto px-4 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">О редакции</h2>
              <Separator className="mb-8" />
            </div>
            
            <img
              src="/img/b4128785-3fd5-46e3-8155-c2eedfbd61c5.jpg"
              alt="Редакция"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />

            <div className="space-y-8">
              <div>
                <p className="text-xl leading-relaxed text-gray-700">
                  <strong className="text-2xl">«Инсайдер молодежи»</strong> — федеральное сетевое издание, 
                  специализирующееся на освещении актуальных событий, тенденций и проблем, 
                  касающихся молодого поколения России.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-4">Наша миссия</h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  Предоставлять объективную, проверенную информацию о событиях, важных для молодежи. 
                  Мы стремимся быть голосом молодого поколения, освещая темы образования, карьеры, 
                  культуры, социальных инициатив и технологий.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-6">Принципы работы</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-2 hover-lift">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Icon name="Shield" className="h-8 w-8 text-primary" />
                        <CardTitle className="text-xl">Объективность</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Непредвзятое освещение событий с опорой на проверенные факты и источники
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover-lift">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Icon name="Users" className="h-8 w-8 text-primary" />
                        <CardTitle className="text-xl">Актуальность</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Оперативное информирование о событиях, важных для молодого поколения
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover-lift">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Icon name="Award" className="h-8 w-8 text-primary" />
                        <CardTitle className="text-xl">Профессионализм</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Высокие стандарты журналистики и соблюдение профессиональной этики
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover-lift">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Icon name="Lightbulb" className="h-8 w-8 text-primary" />
                        <CardTitle className="text-xl">Инновации</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Использование современных технологий для распространения информации
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="gradient-black text-white p-8 lg:p-12 rounded-lg">
                <h3 className="text-3xl font-bold mb-6">Контакты</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 gradient-gold flex items-center justify-center">
                      <Icon name="Mail" className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-lg">редакция@инсайдермолодежи.рф</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 gradient-gold flex items-center justify-center">
                      <Icon name="Phone" className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Телефон</p>
                      <p className="text-lg">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 gradient-gold flex items-center justify-center">
                      <Icon name="MapPin" className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Адрес</p>
                      <p className="text-lg">г. Москва, ул. Пример, д. 1</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 gradient-gold flex items-center justify-center">
                      <Icon name="Clock" className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Режим работы</p>
                      <p className="text-lg">Пн-Пт 9:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {activeSection === 'journalists' && (
        <main className="container mx-auto px-4 lg:px-8 py-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-4">Реестр журналистов</h2>
              <p className="text-xl text-gray-600 mb-8">
                Команда профессионалов федерального издания «Инсайдер молодежи»
              </p>
              <Separator />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {journalists.map((journalist) => (
                <Card key={journalist.id} className="overflow-hidden border-0 shadow-xl hover-lift cursor-pointer">
                  <img
                    src={journalist.image}
                    alt={journalist.name}
                    className="w-full h-64 object-cover"
                  />
                  <CardHeader className="bg-gradient-to-b from-white to-gray-50">
                    <CardTitle className="text-2xl mb-4">{journalist.name}</CardTitle>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <Icon name="Briefcase" className="h-5 w-5 text-primary" />
                        <span className="text-gray-600">{journalist.position}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Icon name="BookOpen" className="h-5 w-5 text-primary" />
                        <span className="text-gray-600">{journalist.specialization}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Icon name="Clock" className="h-5 w-5 text-primary" />
                        <span className="text-gray-600">Опыт: {journalist.experience}</span>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Card className="border-2 border-dashed bg-gray-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Icon name="FileText" className="h-6 w-6 text-primary" />
                  Требования к журналистам
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-base">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Высшее журналистское или профильное образование</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Наличие публикаций в федеральных или региональных СМИ</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Соблюдение профессиональных стандартов и этических норм</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Регистрация в едином реестре журналистов и блогеров РФ</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </main>
      )}

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
                Свидетельство о регистрации СМИ ЭЛ № ФС 77-12345 от 1 января 2025 года.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Разделы</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <button 
                    onClick={() => setActiveSection('news')} 
                    className="hover:text-primary transition-colors"
                  >
                    Новости
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveSection('about')} 
                    className="hover:text-primary transition-colors"
                  >
                    О редакции
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveSection('journalists')} 
                    className="hover:text-primary transition-colors"
                  >
                    Журналисты
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      setActiveSection('about');
                      setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }), 100);
                    }}
                    className="hover:text-primary transition-colors"
                  >
                    Контакты
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Контакты</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <Icon name="Mail" className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span className="break-all">редакция@инсайдермолодежи.рф</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4 flex-shrink-0" />
                  +7 (495) 123-45-67
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              &copy; 2025 Инсайдер молодежи. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary flex items-center justify-center transition-colors rounded">
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary flex items-center justify-center transition-colors rounded">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary flex items-center justify-center transition-colors rounded">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
