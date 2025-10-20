import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const games = [
    {
      id: 1,
      title: 'Mega Fortune 777',
      image: 'https://cdn.poehali.dev/projects/e6887bda-1439-4d24-a1a4-abdde590facb/files/b4c898a2-7775-4ec0-8d34-1800c0552771.jpg',
      jackpot: '2,450,000₽',
      category: 'Джекпот'
    },
    {
      id: 2,
      title: 'Pharaoh\'s Treasure',
      image: 'https://cdn.poehali.dev/projects/e6887bda-1439-4d24-a1a4-abdde590facb/files/0f16ce75-34a4-440e-a8b4-8e681fb790f4.jpg',
      jackpot: '1,890,000₽',
      category: 'Популярное'
    },
    {
      id: 3,
      title: 'Fruity Neon',
      image: 'https://cdn.poehali.dev/projects/e6887bda-1439-4d24-a1a4-abdde590facb/files/ec7b461b-10d7-4a16-9704-87732e6ff6e9.jpg',
      jackpot: '980,000₽',
      category: 'Классика'
    },
    {
      id: 4,
      title: 'Lucky Diamond',
      image: 'https://cdn.poehali.dev/projects/e6887bda-1439-4d24-a1a4-abdde590facb/files/b4c898a2-7775-4ec0-8d34-1800c0552771.jpg',
      jackpot: '3,200,000₽',
      category: 'Джекпот'
    },
    {
      id: 5,
      title: 'Wild Vegas',
      image: 'https://cdn.poehali.dev/projects/e6887bda-1439-4d24-a1a4-abdde590facb/files/ec7b461b-10d7-4a16-9704-87732e6ff6e9.jpg',
      jackpot: '1,550,000₽',
      category: 'Популярное'
    },
    {
      id: 6,
      title: 'Golden Sphinx',
      image: 'https://cdn.poehali.dev/projects/e6887bda-1439-4d24-a1a4-abdde590facb/files/0f16ce75-34a4-440e-a8b4-8e681fb790f4.jpg',
      jackpot: '2,100,000₽',
      category: 'Джекпот'
    }
  ];

  const promotions = [
    { title: 'Приветственный бонус', description: '100% на первый депозит до 50,000₽', icon: 'Gift' },
    { title: 'Кэшбэк 10%', description: 'Еженедельный возврат проигранных средств', icon: 'Percent' },
    { title: 'Фриспины', description: '50 бесплатных вращений за регистрацию', icon: 'Sparkles' }
  ];

  const tournaments = [
    { name: 'Vegas Masters', prize: '1,000,000₽', participants: 2450, endDate: '25.10.2025' },
    { name: 'Slot Championship', prize: '500,000₽', participants: 1820, endDate: '28.10.2025' },
    { name: 'Weekend Battle', prize: '250,000₽', participants: 980, endDate: '22.10.2025' }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black text-white">
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-neon-pink/30">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan animate-neon-pulse">
            🎰 VEGAS CASINO
          </h1>
          <div className="hidden md:flex gap-6">
            {['home', 'games', 'promotions', 'tournaments', 'rules', 'contacts'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`font-heading font-semibold uppercase text-sm hover:text-neon-pink transition-colors ${
                  activeSection === section ? 'text-neon-pink' : 'text-white/80'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'games' && 'Игры'}
                {section === 'promotions' && 'Акции'}
                {section === 'tournaments' && 'Турниры'}
                {section === 'rules' && 'Правила'}
                {section === 'contacts' && 'Контакты'}
              </button>
            ))}
          </div>
          <Button className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-cyan text-white font-heading font-bold animate-glow">
            Регистрация
          </Button>
        </nav>
      </header>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 text-center z-10">
          <h2 className="text-7xl md:text-9xl font-heading font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-gold via-neon-pink to-neon-cyan animate-neon-pulse">
            ДОБРО ПОЖАЛОВАТЬ
          </h2>
          <p className="text-2xl md:text-3xl mb-8 text-neon-cyan font-heading font-semibold">
            В мир азарта и больших выигрышей
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-cyan text-white font-heading font-bold text-lg px-8 py-6 animate-glow">
              <Icon name="Sparkles" size={24} className="mr-2" />
              Играть сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black font-heading font-bold text-lg px-8 py-6">
              <Icon name="Gift" size={24} className="mr-2" />
              Получить бонус
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-neon-pink/30 rounded-lg p-6 hover:border-neon-pink transition-colors">
              <div className="text-4xl font-heading font-black text-neon-gold mb-2">500+</div>
              <div className="text-muted-foreground">Игровых автоматов</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-neon-cyan/30 rounded-lg p-6 hover:border-neon-cyan transition-colors">
              <div className="text-4xl font-heading font-black text-neon-cyan mb-2">24/7</div>
              <div className="text-muted-foreground">Поддержка игроков</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-neon-purple/30 rounded-lg p-6 hover:border-neon-purple transition-colors">
              <div className="text-4xl font-heading font-black text-neon-purple mb-2">100%</div>
              <div className="text-muted-foreground">Бонус на депозит</div>
            </div>
          </div>
        </div>
      </section>

      <section id="games" className="py-20 bg-gradient-to-b from-black to-purple-950/20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-heading font-black text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-cyan animate-neon-pulse">
            ИГРОВЫЕ АВТОМАТЫ
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Выбирайте из сотен слотов с огромными джекпотами</p>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8 bg-card border border-neon-pink/30">
              <TabsTrigger value="all" className="data-[state=active]:bg-neon-pink data-[state=active]:text-white font-heading font-semibold">Все</TabsTrigger>
              <TabsTrigger value="jackpot" className="data-[state=active]:bg-neon-gold data-[state=active]:text-black font-heading font-semibold">Джекпот</TabsTrigger>
              <TabsTrigger value="popular" className="data-[state=active]:bg-neon-cyan data-[state=active]:text-black font-heading font-semibold">Популярное</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {games.map((game) => (
                  <Card key={game.id} className="bg-card/50 backdrop-blur-sm border-2 border-transparent hover:border-neon-pink transition-all duration-300 hover:scale-105 overflow-hidden group">
                    <div className="relative overflow-hidden">
                      <img src={game.image} alt={game.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute top-2 right-2 bg-neon-gold text-black px-3 py-1 rounded-full text-xs font-heading font-bold">
                        {game.category}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-xl font-heading font-bold mb-2">{game.title}</h3>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-muted-foreground">Джекпот:</span>
                        <span className="text-lg font-heading font-black text-neon-gold">{game.jackpot}</span>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-cyan font-heading font-bold">
                        Играть
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="jackpot">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {games.filter(g => g.category === 'Джекпот').map((game) => (
                  <Card key={game.id} className="bg-card/50 backdrop-blur-sm border-2 border-transparent hover:border-neon-gold transition-all duration-300 hover:scale-105 overflow-hidden group">
                    <div className="relative overflow-hidden">
                      <img src={game.image} alt={game.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute top-2 right-2 bg-neon-gold text-black px-3 py-1 rounded-full text-xs font-heading font-bold">
                        {game.category}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-xl font-heading font-bold mb-2">{game.title}</h3>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-muted-foreground">Джекпот:</span>
                        <span className="text-lg font-heading font-black text-neon-gold">{game.jackpot}</span>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-neon-gold to-neon-pink hover:from-neon-pink hover:to-neon-gold font-heading font-bold">
                        Играть
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="popular">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {games.filter(g => g.category === 'Популярное').map((game) => (
                  <Card key={game.id} className="bg-card/50 backdrop-blur-sm border-2 border-transparent hover:border-neon-cyan transition-all duration-300 hover:scale-105 overflow-hidden group">
                    <div className="relative overflow-hidden">
                      <img src={game.image} alt={game.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute top-2 right-2 bg-neon-cyan text-black px-3 py-1 rounded-full text-xs font-heading font-bold">
                        {game.category}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-xl font-heading font-bold mb-2">{game.title}</h3>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-muted-foreground">Джекпот:</span>
                        <span className="text-lg font-heading font-black text-neon-gold">{game.jackpot}</span>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-neon-cyan to-neon-purple hover:from-neon-purple hover:to-neon-cyan font-heading font-bold">
                        Играть
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="promotions" className="py-20 bg-gradient-to-b from-purple-950/20 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-heading font-black text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-gold to-neon-pink animate-neon-pulse">
            АКЦИИ И БОНУСЫ
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Максимальная выгода для наших игроков</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {promotions.map((promo, index) => (
              <Card key={index} className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-2 border-neon-gold/30 hover:border-neon-gold transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-neon-gold to-neon-pink mb-4">
                    <Icon name={promo.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3 text-neon-gold">{promo.title}</h3>
                  <p className="text-muted-foreground mb-4">{promo.description}</p>
                  <Button variant="outline" className="border-neon-gold text-neon-gold hover:bg-neon-gold hover:text-black font-heading font-bold">
                    Получить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tournaments" className="py-20 bg-gradient-to-b from-black to-purple-950/20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-heading font-black text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple animate-neon-pulse">
            ТУРНИРЫ
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Соревнуйтесь с лучшими и выигрывайте призы</p>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {tournaments.map((tournament, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-2 border-neon-cyan/30 hover:border-neon-cyan transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-bold mb-2 text-neon-cyan">{tournament.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Icon name="Users" size={16} />
                          {tournament.participants} участников
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Calendar" size={16} />
                          До {tournament.endDate}
                        </span>
                      </div>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-sm text-muted-foreground mb-1">Призовой фонд</div>
                      <div className="text-3xl font-heading font-black text-neon-gold">{tournament.prize}</div>
                    </div>
                    <Button className="bg-gradient-to-r from-neon-cyan to-neon-purple hover:from-neon-purple hover:to-neon-pink font-heading font-bold">
                      Участвовать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="rules" className="py-20 bg-gradient-to-b from-purple-950/20 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-heading font-black text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-gold animate-neon-pulse">
            ПРАВИЛА
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Честная игра и прозрачные условия</p>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card/50 backdrop-blur-sm border-2 border-neon-pink/30 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-heading font-bold hover:text-neon-pink">
                  Как начать играть?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Зарегистрируйтесь на сайте, пополните счет любым удобным способом и выбирайте игру. Новым игрокам доступен приветственный бонус 100% на первый депозит.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card/50 backdrop-blur-sm border-2 border-neon-cyan/30 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-heading font-bold hover:text-neon-cyan">
                  Минимальная ставка и вывод средств
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Минимальная ставка от 10₽. Вывод средств доступен с суммы от 500₽ на банковские карты, электронные кошельки и криптовалюту. Обработка заявки до 24 часов.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card/50 backdrop-blur-sm border-2 border-neon-gold/30 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-heading font-bold hover:text-neon-gold">
                  Лицензия и безопасность
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Казино работает по международной лицензии. Все игры сертифицированы и используют генератор случайных чисел. Ваши данные защищены SSL-шифрованием.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card/50 backdrop-blur-sm border-2 border-neon-purple/30 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-heading font-bold hover:text-neon-purple">
                  Программа лояльности
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  За каждую ставку вы получаете баллы лояльности, которые можно обменять на бонусы, фриспины или реальные деньги. VIP-игроки получают персонального менеджера и эксклюзивные бонусы.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card/50 backdrop-blur-sm border-2 border-neon-pink/30 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-heading font-bold hover:text-neon-pink">
                  Ответственная игра
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Мы поддерживаем принципы ответственной игры. Вы можете установить лимиты на депозиты, ставки и время игры. При необходимости доступна функция самоисключения.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-b from-black to-purple-950/20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-heading font-black text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-pink animate-neon-pulse">
            КОНТАКТЫ
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Мы всегда на связи 24/7</p>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-2 border-neon-pink/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold mb-6 text-neon-pink">Свяжитесь с нами</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" className="text-neon-cyan" size={24} />
                    <span>support@vegascasino.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-neon-cyan" size={24} />
                    <span>8 (800) 555-35-35</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MessageCircle" className="text-neon-cyan" size={24} />
                    <span>Онлайн-чат на сайте</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button size="icon" variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black">
                    <Icon name="Twitter" size={20} />
                  </Button>
                  <Button size="icon" variant="outline" className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-white">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button size="icon" variant="outline" className="border-neon-gold text-neon-gold hover:bg-neon-gold hover:text-black">
                    <Icon name="Facebook" size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-2 border-neon-cyan/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold mb-6 text-neon-cyan">Напишите нам</h3>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" className="bg-background/50 border-muted" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" className="bg-background/50 border-muted" />
                  </div>
                  <div>
                    <Textarea placeholder="Сообщение" rows={4} className="bg-background/50 border-muted resize-none" />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-neon-cyan to-neon-purple hover:from-neon-purple hover:to-neon-pink font-heading font-bold">
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-purple-950/20 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="bg-card/30 backdrop-blur-sm border border-neon-pink/20">
              <CardContent className="p-8 md:p-12 prose prose-invert prose-lg max-w-none">
                <h2 className="text-4xl font-heading font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-cyan">
                  Онлайн казино Vegas Casino — Лучшие игровые автоматы 2025
                </h2>
                
                <p className="text-foreground/90 leading-relaxed mb-6">
                  <strong className="text-neon-gold">Vegas Casino</strong> — это современная платформа для азартных игр, предлагающая своим игрокам более 500 сертифицированных игровых автоматов от ведущих мировых провайдеров. Мы работаем с 2020 года и за это время завоевали доверие тысяч игроков благодаря честной игре, быстрым выплатам и круглосуточной поддержке.
                </p>

                <h3 className="text-2xl font-heading font-bold text-neon-cyan mt-8 mb-4">Преимущества нашего казино</h3>
                
                <ul className="space-y-3 mb-6 list-none">
                  <li className="flex items-start gap-3">
                    <span className="text-neon-pink text-xl">✓</span>
                    <span className="text-foreground/90"><strong className="text-neon-gold">Лицензия и безопасность</strong> — Официальная лицензия Кюрасао, SSL-шифрование данных</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neon-pink text-xl">✓</span>
                    <span className="text-foreground/90"><strong className="text-neon-gold">Быстрые выплаты</strong> — Вывод средств от 15 минут на карты и электронные кошельки</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neon-pink text-xl">✓</span>
                    <span className="text-foreground/90"><strong className="text-neon-gold">Щедрые бонусы</strong> — Приветственный пакет до 50,000₽ + 100 фриспинов</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neon-pink text-xl">✓</span>
                    <span className="text-foreground/90"><strong className="text-neon-gold">Программа лояльности</strong> — Кэшбэк, VIP-статусы и эксклюзивные акции</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neon-pink text-xl">✓</span>
                    <span className="text-foreground/90"><strong className="text-neon-gold">Поддержка 24/7</strong> — Онлайн-чат, email и телефон горячей линии</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-heading font-bold text-neon-cyan mt-8 mb-4">Категории игровых автоматов</h3>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse bg-black/30">
                    <thead>
                      <tr className="border-b-2 border-neon-pink/30">
                        <th className="text-left p-4 font-heading font-bold text-neon-gold">Категория</th>
                        <th className="text-left p-4 font-heading font-bold text-neon-gold">Количество игр</th>
                        <th className="text-left p-4 font-heading font-bold text-neon-gold">Популярные слоты</th>
                        <th className="text-left p-4 font-heading font-bold text-neon-gold">RTP</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-muted/20 hover:bg-neon-pink/5 transition-colors">
                        <td className="p-4 text-foreground/90">Джекпот слоты</td>
                        <td className="p-4 text-foreground/90">150+</td>
                        <td className="p-4 text-foreground/90">Mega Fortune, Divine Fortune</td>
                        <td className="p-4 text-neon-cyan font-bold">96.5%</td>
                      </tr>
                      <tr className="border-b border-muted/20 hover:bg-neon-cyan/5 transition-colors">
                        <td className="p-4 text-foreground/90">Классические слоты</td>
                        <td className="p-4 text-foreground/90">80+</td>
                        <td className="p-4 text-foreground/90">Book of Ra, Sizzling Hot</td>
                        <td className="p-4 text-neon-cyan font-bold">95.8%</td>
                      </tr>
                      <tr className="border-b border-muted/20 hover:bg-neon-gold/5 transition-colors">
                        <td className="p-4 text-foreground/90">Видео-слоты</td>
                        <td className="p-4 text-foreground/90">200+</td>
                        <td className="p-4 text-foreground/90">Gonzo's Quest, Starburst</td>
                        <td className="p-4 text-neon-cyan font-bold">96.9%</td>
                      </tr>
                      <tr className="border-b border-muted/20 hover:bg-neon-purple/5 transition-colors">
                        <td className="p-4 text-foreground/90">Мегавейс</td>
                        <td className="p-4 text-foreground/90">70+</td>
                        <td className="p-4 text-foreground/90">Bonanza, Extra Chilli</td>
                        <td className="p-4 text-neon-cyan font-bold">97.2%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-2xl font-heading font-bold text-neon-cyan mt-8 mb-4">Как начать играть в Vegas Casino</h3>

                <ol className="space-y-4 mb-6 list-none counter-reset">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-neon-pink to-neon-purple flex items-center justify-center font-heading font-bold text-sm">1</span>
                    <div>
                      <strong className="text-neon-gold block mb-1">Регистрация</strong>
                      <span className="text-foreground/80">Заполните простую форму регистрации — email, пароль и подтверждение возраста. Процесс занимает не более 30 секунд.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center font-heading font-bold text-sm">2</span>
                    <div>
                      <strong className="text-neon-gold block mb-1">Верификация</strong>
                      <span className="text-foreground/80">Подтвердите личность, загрузив фото документа. Это гарантирует безопасность вашего счета и быстрый вывод средств.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-neon-gold to-neon-pink flex items-center justify-center font-heading font-bold text-sm">3</span>
                    <div>
                      <strong className="text-neon-gold block mb-1">Первый депозит</strong>
                      <span className="text-foreground/80">Пополните счет от 500₽ через карту, электронный кошелек или криптовалюту. Получите 100% бонус на первый депозит.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center font-heading font-bold text-sm">4</span>
                    <div>
                      <strong className="text-neon-gold block mb-1">Играйте и выигрывайте</strong>
                      <span className="text-foreground/80">Выбирайте любимые слоты, крутите барабаны и выигрывайте джекпоты. Удачи за игровыми столами!</span>
                    </div>
                  </li>
                </ol>

                <div className="bg-gradient-to-r from-neon-pink/10 via-neon-purple/10 to-neon-cyan/10 border-l-4 border-neon-gold p-6 rounded-r-lg mb-6">
                  <p className="text-foreground/90 mb-2">
                    <strong className="text-neon-gold text-lg">⚠️ Важно:</strong>
                  </p>
                  <p className="text-foreground/80">
                    Азартные игры предназначены только для совершеннолетних игроков (18+). Играйте ответственно и устанавливайте лимиты на депозиты. Если вы чувствуете, что игра вышла из-под контроля, обратитесь в службу поддержки для активации самоисключения.
                  </p>
                </div>

                <h3 className="text-2xl font-heading font-bold text-neon-cyan mt-8 mb-4">Методы пополнения и вывода</h3>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-black/30 p-6 rounded-lg border border-neon-pink/20">
                    <h4 className="font-heading font-bold text-neon-pink mb-3 text-lg">Пополнение счета</h4>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li>• Банковские карты (Visa, MasterCard, Mir)</li>
                      <li>• Электронные кошельки (Qiwi, ЮMoney)</li>
                      <li>• Криптовалюты (Bitcoin, Ethereum, USDT)</li>
                      <li>• Минимум: 500₽ | Комиссия: 0%</li>
                    </ul>
                  </div>
                  <div className="bg-black/30 p-6 rounded-lg border border-neon-cyan/20">
                    <h4 className="font-heading font-bold text-neon-cyan mb-3 text-lg">Вывод средств</h4>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li>• Банковские карты (1-3 рабочих дня)</li>
                      <li>• Электронные кошельки (15 минут - 24 часа)</li>
                      <li>• Криптовалюты (до 1 часа)</li>
                      <li>• Минимум: 1,000₽ | Комиссия: 0%</li>
                    </ul>
                  </div>
                </div>

                <p className="text-foreground/70 text-sm leading-relaxed">
                  Vegas Casino — это не просто онлайн казино, это целый мир азарта, где каждый игрок может почувствовать атмосферу настоящего Лас-Вегаса, не выходя из дома. Присоединяйтесь к нам сегодня и получите свой приветственный бонус!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-neon-pink/30 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-2">© 2025 Vegas Casino. Все права защищены.</p>
          <p className="text-sm text-muted-foreground">18+ | Играйте ответственно | Лицензия №12345</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;