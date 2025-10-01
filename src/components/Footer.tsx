import Icon from '@/components/ui/icon';

interface FooterProps {
  setActiveSection: (section: string) => void;
}

export default function Footer({ setActiveSection }: FooterProps) {
  return (
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
  );
}
