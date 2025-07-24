import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Family = () => {
  const familyPhotos = [
    {
      id: 1,
      title: "Совместное фото",
      description: "От самого любимого мужчины в моей жизни",
      image: "/img/bfb623d1-1967-45f0-a11c-7820af48c463.jpg",
      date: "2024"
    },
    {
      id: 2,
      title: "Папа за рулем",
      description: "В машине, всегда готов к новым приключениям",
      image: "https://cdn.poehali.dev/files/c1a921ae-228c-40f3-a559-09fba387c56b.jpg",
      date: "2024"
    },
    {
      id: 3,
      title: "С любимыми цветами",
      description: "Красные розы - символ нашей любви",
      image: "https://cdn.poehali.dev/files/feae93eb-b75e-4b58-a9d2-0d5a146f5df5.jpg",
      date: "2023"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-rose-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => window.history.back()}
            >
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              Назад
            </Button>
            <h1 className="text-xl font-medium tracking-wide text-rose-800">СЕМЕЙНЫЙ АЛЬБОМ</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-sm uppercase tracking-wider hover:text-rose-600 transition-colors">
              Главная
            </a>
            <a href="/#portfolio" className="text-sm uppercase tracking-wider hover:text-rose-600 transition-colors">
              Портфолио
            </a>
            <a href="/family" className="text-sm uppercase tracking-wider text-rose-600">
              Семья
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
              <Icon name="Heart" size={24} className="text-rose-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-rose-900">
              Семейные Моменты
            </h2>
            <div className="w-24 h-px bg-rose-300 mx-auto"></div>
            <p className="text-lg text-rose-700 max-w-2xl mx-auto leading-relaxed">
              Самые дорогие сердцу фотографии. Каждый снимок хранит 
              частичку нашей истории и безграничной любви.
            </p>
          </div>
        </div>
      </section>

      {/* Family Gallery */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {familyPhotos.map((photo) => (
              <Card key={photo.id} className="group overflow-hidden border-0 shadow-lg bg-white hover:shadow-2xl transition-all duration-500">
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <Icon name="Heart" size={16} className="text-rose-600" />
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-medium text-rose-900">{photo.title}</h3>
                      <span className="text-xs text-rose-500 uppercase tracking-widest">
                        {photo.date}
                      </span>
                    </div>
                    <p className="text-sm text-rose-600 leading-relaxed italic">
                      {photo.description}
                    </p>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-rose-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-rose-600 hover:text-rose-800 hover:bg-rose-50"
                    >
                      <Icon name="Expand" size={14} className="mr-1" />
                      Увеличить
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <Icon name="Quote" size={32} className="text-rose-400 mx-auto" />
            <blockquote className="text-2xl md:text-3xl font-light text-rose-800 leading-relaxed">
              "Семья — это не просто важная вещь, 
              это всё что у нас есть"
            </blockquote>
            <div className="w-16 h-px bg-rose-300 mx-auto"></div>
            <p className="text-rose-600 text-sm uppercase tracking-widest">
              С любовью
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Back */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <Button 
              onClick={() => window.location.href = '/'}
              className="bg-rose-600 text-white hover:bg-rose-700 px-8 py-3 rounded-full"
            >
              <Icon name="Home" size={16} className="mr-2" />
              Вернуться на главную
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rose-900 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-3">
            <div className="flex justify-center space-x-2">
              <Icon name="Heart" size={16} className="text-rose-400" />
              <Icon name="Heart" size={16} className="text-rose-300" />
              <Icon name="Heart" size={16} className="text-rose-400" />
            </div>
            <p className="text-rose-200 text-sm">
              Семейные воспоминания навсегда
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Family;