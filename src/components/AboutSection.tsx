import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function AboutSection() {
  return (
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
  );
}
