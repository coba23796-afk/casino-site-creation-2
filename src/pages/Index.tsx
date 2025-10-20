import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const games = [
    {
      id: 1,
      title: 'Lucky Sevens',
      image: 'https://cdn.poehali.dev/projects/e6887bda-1439-4d24-a1a4-abdde590facb/files/b4c898a2-7775-4ec0-8d34-1800c0552771.jpg',
      jackpot: '₽2,450,000',
      rating: 4.8,
      category: 'hot'
    },
    {
      id: 2,
      title: 'Golden Pyramid',
      image: 'https://cdn.poehali.dev/projects/e6887bda-1439-4d24-a1a4-abdde590facb/files/0f16ce75-34a4-440e-a8b4-8e681fb790f4.jpg',
      jackpot: '₽1,890,000',
      rating: 4.9,
      category: 'new'
    },
    {
      id: 3,
      title: 'Neon Fruits',
      image: 'https://cdn.poehali.dev/projects/e6887bda-1439-4d24-a1a4-abdde590facb/files/ec7b461b-10d7-4a16-9704-87732e6ff6e9.jpg',
      jackpot: '₽980,000',
      rating: 4.7,
      category: 'hot'
    },
    {
      id: 4,
      title: 'Diamond Rush',
      image: 'https://cdn.poehali.dev/projects/e6887bda-1439-4d24-a1a4-abdde590facb/files/b4c898a2-7775-4ec0-8d34-1800c0552771.jpg',
      jackpot: '₽3,200,000',
      rating: 4.9,
      category: 'hot'
    },
    {
      id: 5,
      title: 'Wild Safari',
      image: 'https://cdn.poehali.dev/projects/e6887bda-1439-4d24-a1a4-abdde590facb/files/ec7b461b-10d7-4a16-9704-87732e6ff6e9.jpg',
      jackpot: '₽1,550,000',
      rating: 4.6,
      category: 'new'
    },
    {
      id: 6,
      title: 'Mega Jackpot',
      image: 'https://cdn.poehali.dev/projects/e6887bda-1439-4d24-a1a4-abdde590facb/files/0f16ce75-34a4-440e-a8b4-8e681fb790f4.jpg',
      jackpot: '₽5,100,000',
      rating: 5.0,
      category: 'hot'
    }
  ];

  const bonuses = [
    {
      title: 'Приветственный бонус',
      amount: '100% до ₽50,000',
      description: 'На первый депозит + 100 фриспинов',
      icon: 'Gift',
      color: 'from-amber-500 to-orange-600'
    },
    {
      title: 'Кэшбэк',
      amount: 'До 15%',
      description: 'Еженедельный возврат средств',
      icon: 'Percent',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'VIP программа',
      amount: 'До ₽1,000,000',
      description: 'Эксклюзивные привилегии',
      icon: 'Crown',
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  const features = [
    { icon: 'Shield', title: 'Лицензия', desc: 'Официальная лицензия' },
    { icon: 'Zap', title: 'Быстрые выплаты', desc: 'От 15 минут' },
    { icon: 'Headphones', title: 'Поддержка 24/7', desc: 'Всегда на связи' },
    { icon: 'Smartphone', title: 'Мобильная версия', desc: 'Играй везде' }
  ];

  const stats = [
    { value: '500+', label: 'Игровых автоматов' },
    { value: '50,000+', label: 'Активных игроков' },
    { value: '₽100M+', label: 'Выплачено выигрышей' },
    { value: '24/7', label: 'Поддержка игроков' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      <header className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-purple-500/20">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                ROYAL CASINO
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#games" className="text-gray-300 hover:text-amber-400 transition-colors font-medium">Игры</a>
              <a href="#bonuses" className="text-gray-300 hover:text-amber-400 transition-colors font-medium">Бонусы</a>
              <a href="#about" className="text-gray-300 hover:text-amber-400 transition-colors font-medium">О нас</a>
              <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold">
                Войти
              </Button>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold">
                Регистрация
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </Button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-purple-500/20 pt-4">
              <a href="#games" className="block text-gray-300 hover:text-amber-400 transition-colors">Игры</a>
              <a href="#bonuses" className="block text-gray-300 hover:text-amber-400 transition-colors">Бонусы</a>
              <a href="#about" className="block text-gray-300 hover:text-amber-400 transition-colors">О нас</a>
              <div className="flex flex-col gap-2 pt-2">
                <Button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold w-full">
                  Войти
                </Button>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold w-full">
                  Регистрация
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 leading-tight">
              Добро пожаловать в Royal Casino
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Лучшие игровые автоматы, щедрые бонусы и крупные выигрыши ждут вас!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-lg px-8 py-6">
                <Icon name="Play" size={24} className="mr-2" />
                Играть сейчас
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold text-lg px-8 py-6">
                <Icon name="Gift" size={24} className="mr-2" />
                Получить бонус
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-900/80 to-purple-900/40 border-purple-500/30 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl md:text-4xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="games" className="py-20 px-4 bg-slate-950/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">
              Популярные игры
            </h2>
            <p className="text-xl text-gray-400">Выбирайте из сотен слотов с огромными джекпотами</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <Card key={game.id} className="bg-slate-900/80 border-purple-500/20 overflow-hidden group hover:border-amber-500/50 transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img src={game.image} alt={game.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute top-3 left-3">
                    {game.category === 'hot' && (
                      <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white border-0">
                        <Icon name="Flame" size={14} className="mr-1" />
                        Hot
                      </Badge>
                    )}
                    {game.category === 'new' && (
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
                        <Icon name="Sparkles" size={14} className="mr-1" />
                        New
                      </Badge>
                    )}
                  </div>
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <Icon name="Star" size={14} className="text-amber-400 fill-amber-400" />
                    <span className="text-white text-sm font-bold">{game.rating}</span>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="text-xl font-heading font-bold text-white mb-3">{game.title}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-400">Джекпот:</span>
                    <span className="text-lg font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                      {game.jackpot}
                    </span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold">
                    Играть
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold">
              Показать все игры
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="bonuses" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">
              Бонусы и акции
            </h2>
            <p className="text-xl text-gray-400">Максимальная выгода для каждого игрока</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {bonuses.map((bonus, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-purple-500/30 hover:border-amber-500/50 transition-all duration-300 hover:scale-105 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${bonus.color} opacity-10`}></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${bonus.color} flex items-center justify-center`}>
                    <Icon name={bonus.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">{bonus.title}</h3>
                  <div className="text-4xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-3">
                    {bonus.amount}
                  </div>
                  <p className="text-gray-400 mb-6">{bonus.description}</p>
                  <Button className={`w-full bg-gradient-to-r ${bonus.color} hover:opacity-90 text-white font-bold`}>
                    Получить бонус
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-950/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <Icon name={feature.icon as any} size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-slate-900/90 to-purple-900/30 border-purple-500/30 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-6">
                  О Royal Casino
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    <strong className="text-amber-400">Royal Casino</strong> — это современная онлайн-платформа для азартных игр, которая предлагает своим игрокам более 500 лицензионных игровых автоматов от ведущих мировых провайдеров.
                  </p>
                  <p>
                    Мы работаем с 2020 года и за это время завоевали доверие тысяч игроков благодаря честной игре, быстрым выплатам и профессиональной поддержке 24/7.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-slate-950/50 p-6 rounded-lg border border-purple-500/20">
                      <h3 className="text-xl font-heading font-bold text-amber-400 mb-3">Безопасность</h3>
                      <p className="text-sm text-gray-400">
                        Официальная лицензия, SSL-шифрование и защита данных по международным стандартам
                      </p>
                    </div>
                    <div className="bg-slate-950/50 p-6 rounded-lg border border-purple-500/20">
                      <h3 className="text-xl font-heading font-bold text-amber-400 mb-3">Выплаты</h3>
                      <p className="text-sm text-gray-400">
                        Быстрый вывод средств от 15 минут на карты, кошельки и криптовалюту
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-y border-purple-500/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-4">
            Готовы начать выигрывать?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Зарегистрируйтесь прямо сейчас и получите приветственный бонус!
          </p>
          <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-lg px-12 py-6">
            <Icon name="Rocket" size={24} className="mr-2" />
            Начать играть
          </Button>
        </div>
      </section>

      <footer className="bg-slate-950 border-t border-purple-500/20 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Icon name="Sparkles" size={18} className="text-white" />
                </div>
                <span className="text-xl font-heading font-black text-white">ROYAL CASINO</span>
              </div>
              <p className="text-sm text-gray-400">
                Лучшее онлайн казино с большими выигрышами
              </p>
            </div>
            <div>
              <h4 className="font-heading font-bold text-white mb-4">Игры</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Слоты</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Рулетка</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Блэкджек</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Live Casino</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold text-white mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-amber-400 transition-colors">О казино</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Лицензия</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Поддержка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold text-white mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  support@royal-casino.com
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={16} />
                  Онлайн-чат 24/7
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-500/20 pt-8 text-center text-sm text-gray-400">
            <p className="mb-2">© 2025 Royal Casino. Все права защищены.</p>
            <p>18+ | Играйте ответственно | Лицензия</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
