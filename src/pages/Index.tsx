import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Пейзажная фотография",
      category: "Природа",
      image: "/img/3072b20e-9224-4982-9da3-643ae2c351aa.jpg",
      description: "Минималистичные композиции природных пейзажей"
    },
    {
      id: 2,
      title: "Портретная съемка",
      category: "Портрет",
      image: "/img/d0df7fe3-083f-4aeb-a119-01304cb989e4.jpg",
      description: "Эмоциональные портреты с естественным светом"
    },
    {
      id: 3,
      title: "Уличная фотография",
      category: "Стрит",
      image: "/img/f0ab5176-7f15-4706-ab42-806d2159ffec.jpg",
      description: "Городские композиции и архитектурные формы"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-medium tracking-wide">ПОРТФОЛИО</h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors">
              Главная
            </a>
            <a href="#portfolio" className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors">
              Портфолио
            </a>
            <a href="#about" className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors">
              Обо мне
            </a>
            <a href="/family" className="text-sm uppercase tracking-wider hover:text-rose-600 transition-colors">
              Семья
            </a>
          </nav>
          <Button variant="outline" size="sm" className="md:hidden">
            <Icon name="Menu" size={16} />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-light tracking-tight text-black">
                ФОТОГРАФИЯ
              </h2>
              <div className="w-24 h-px bg-black mx-auto"></div>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Создаю визуальные истории через объектив камеры.
                Каждый кадр — это момент, застывший во времени.
              </p>
            </div>
            <div className="flex justify-center space-x-4">
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3">
                Смотреть работы
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-3 border-rose-300 text-rose-600 hover:bg-rose-50"
                onClick={() => window.location.href = '/family'}
              >
                <Icon name="Heart" size={16} className="mr-2" />
                Семейные фото
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section id="portfolio" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
              ИЗБРАННЫЕ РАБОТЫ
            </h3>
            <div className="w-16 h-px bg-black mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden border-0 shadow-none bg-white hover:shadow-lg transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                        {item.category}
                      </p>
                      <h4 className="text-lg font-medium">{item.title}</h4>
                    </div>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Icon name="ArrowUpRight" size={16} />
                    </Button>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
                  ОБО МНЕ
                </h3>
                <div className="w-16 h-px bg-black mb-8"></div>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Я фотограф с более чем 8-летним опытом создания визуальных историй.
                  Моя работа сосредоточена на поиске красоты в простоте и создании
                  эмоциональных связей через образы.
                </p>
                <p>
                  Специализируюсь на портретной, пейзажной и уличной фотографии.
                  Каждый проект для меня — это возможность рассказать уникальную историю
                  и запечатлеть неповторимые моменты.
                </p>
              </div>
              <div className="flex space-x-4 pt-4">
                <Button variant="outline" size="sm">
                  <Icon name="Instagram" size={16} className="mr-2" />
                  Instagram
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="Mail" size={16} className="mr-2" />
                  Контакты
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-rose-300 text-rose-600 hover:bg-rose-50"
                  onClick={() => window.location.href = '/family'}
                >
                  <Icon name="Heart" size={16} className="mr-2" />
                  Семья
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/files/cd7c2aae-1d33-4c3c-b019-741a82cb349c.jpg"
                alt="Фотограф"
                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-4">
            <h4 className="text-xl font-light tracking-wide">ПОРТФОЛИО</h4>
            <div className="w-16 h-px bg-white mx-auto"></div>
            <p className="text-gray-400 text-sm">
              © 2024 Все права защищены
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;