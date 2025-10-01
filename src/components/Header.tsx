import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  return (
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
  );
}
