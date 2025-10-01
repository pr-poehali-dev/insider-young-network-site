import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const newsArticles = [
  {
    id: 1,
    title: 'Молодежь России выбирает новые профессии: кто станет востребованным в 2025 году',
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
    title: 'Молодежные инициативы в сфере экологии получают государственную поддержку',
    category: 'Экология',
    date: '28 сентября 2025',
    excerpt: 'Правительство выделило гранты на реализацию 200+ проектов по защите окружающей среды.',
    featured: false
  },
  {
    id: 5,
    title: 'Цифровая грамотность: новые стандарты для молодых специалистов',
    category: 'Технологии',
    date: '27 сентября 2025',
    excerpt: 'Исследование выявило ключевые компетенции, необходимые для успешной карьеры в цифровой экономике.',
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
  const [activeSection, setActiveSection] = useState('news');
  const [subscribed, setSubscribed] = useState(false);

  const filteredNews = newsArticles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Newspaper" className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-xl font-bold tracking-tight">Инсайдер молодежи</h1>
                <p className="text-xs text-muted-foreground">Федеральное сетевое издание</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => setActiveSection('news')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'news' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Новости
              </button>
              <button
                onClick={() => setActiveSection('about')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'about' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                О редакции
              </button>
              <button
                onClick={() => setActiveSection('journalists')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'journalists' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Реестр журналистов
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'news' && (
          <div className="space-y-8">
            <div className="relative">
              <Icon name="Search" className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Поиск по материалам издания..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>

            {filteredNews.length === 0 && searchQuery && (
              <div className="text-center py-12">
                <Icon name="SearchX" className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">По вашему запросу ничего не найдено</p>
              </div>
            )}

            {filteredNews.length > 0 && (
              <>
                <div className="grid gap-6">
                  {filteredNews
                    .filter(article => article.featured)
                    .map((article) => (
                      <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="grid md:grid-cols-2 gap-6">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover"
                          />
                          <CardHeader>
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="default">{article.category}</Badge>
                              <span className="text-sm text-muted-foreground">{article.date}</span>
                            </div>
                            <CardTitle className="text-3xl font-bold leading-tight">
                              {article.title}
                            </CardTitle>
                            <CardDescription className="text-base mt-4">
                              {article.excerpt}
                            </CardDescription>
                            <Button className="w-fit mt-4">
                              Читать далее
                              <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                            </Button>
                          </CardHeader>
                        </div>
                      </Card>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredNews
                    .filter(article => !article.featured)
                    .map((article) => (
                      <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                        {article.image && (
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-48 object-cover"
                          />
                        )}
                        <CardHeader className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary">{article.category}</Badge>
                            <span className="text-xs text-muted-foreground">{article.date}</span>
                          </div>
                          <CardTitle className="text-xl font-bold leading-tight">
                            {article.title}
                          </CardTitle>
                          <CardDescription className="mt-2">
                            {article.excerpt}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                </div>
              </>
            )}

            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-2xl">Подписка на новости</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Получайте актуальные материалы первыми
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubscribe} className="flex gap-4">
                  <Input
                    type="email"
                    placeholder="Ваш email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-background text-foreground"
                  />
                  <Button type="submit" variant="secondary" className="whitespace-nowrap">
                    {subscribed ? (
                      <>
                        <Icon name="Check" className="mr-2 h-4 w-4" />
                        Подписка оформлена
                      </>
                    ) : (
                      <>
                        <Icon name="Mail" className="mr-2 h-4 w-4" />
                        Подписаться
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'about' && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">О редакции</h2>
              <Separator className="mb-8" />
            </div>
            
            <img
              src="/img/b4128785-3fd5-46e3-8155-c2eedfbd61c5.jpg"
              alt="Редакция"
              className="w-full h-96 object-cover rounded-lg"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                <strong>«Инсайдер молодежи»</strong> — федеральное сетевое издание, 
                специализирующееся на освещении актуальных событий, тенденций и проблем, 
                касающихся молодого поколения России.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Наша миссия</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Предоставлять объективную, проверенную информацию о событиях, важных для молодежи. 
                Мы стремимся быть голосом молодого поколения, освещая темы образования, карьеры, 
                культуры, социальных инициатив и технологий.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Принципы работы</h3>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Icon name="Shield" className="h-6 w-6 text-primary" />
                      <CardTitle>Объективность</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Непредвзятое освещение событий с опорой на проверенные факты и источники
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Icon name="Users" className="h-6 w-6 text-primary" />
                      <CardTitle>Актуальность</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Оперативное информирование о событиях, важных для молодого поколения
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Icon name="Award" className="h-6 w-6 text-primary" />
                      <CardTitle>Профессионализм</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Высокие стандарты журналистики и соблюдение профессиональной этики
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Icon name="Lightbulb" className="h-6 w-6 text-primary" />
                      <CardTitle>Инновации</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Использование современных технологий для распространения информации
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Контакты</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Icon name="Mail" className="h-5 w-5 text-primary" />
                  <span>редакция@инсайдермолодежи.рф</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="h-5 w-5 text-primary" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" className="h-5 w-5 text-primary" />
                  <span>г. Москва, ул. Пример, д. 1</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'journalists' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">Реестр журналистов</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Команда профессионалов федерального издания «Инсайдер молодежи»
              </p>
              <Separator />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {journalists.map((journalist) => (
                <Card key={journalist.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={journalist.image}
                    alt={journalist.name}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="text-xl">{journalist.name}</CardTitle>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Briefcase" className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{journalist.position}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="BookOpen" className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{journalist.specialization}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Clock" className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">Опыт: {journalist.experience}</span>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Card className="border-dashed">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="FileText" className="h-5 w-5 text-primary" />
                  Требования к журналистам
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Высшее журналистское или профильное образование</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Наличие публикаций в федеральных или региональных СМИ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Соблюдение профессиональных стандартов и этических норм</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Регистрация в едином реестре журналистов и блогеров РФ</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Newspaper" className="h-6 w-6 text-primary" />
                <span className="font-bold">Инсайдер молодежи</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Федеральное сетевое издание. Свидетельство о регистрации СМИ.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button onClick={() => setActiveSection('news')} className="hover:text-primary transition-colors">
                    Новости
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveSection('about')} className="hover:text-primary transition-colors">
                    О редакции
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveSection('journalists')} className="hover:text-primary transition-colors">
                    Реестр журналистов
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>редакция@инсайдермолодежи.рф</li>
                <li>+7 (495) 123-45-67</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Инсайдер молодежи. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
