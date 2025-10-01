import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface Journalist {
  id: number;
  name: string;
  position: string;
  specialization: string;
  experience: string;
  image: string;
}

interface JournalistsSectionProps {
  journalists: Journalist[];
}

export default function JournalistsSection({ journalists }: JournalistsSectionProps) {
  return (
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
  );
}
