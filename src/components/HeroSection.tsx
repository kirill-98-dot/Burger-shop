import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 overflow-hidden hero-gradient">
      {/* Background Banner */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(https://vector23.ru/assets/components/modxsite/templates/template/img/studybanner042025/banner-bg.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">Tesla • Категория B</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Выбирай обучение на{" "}
              <span className="text-gradient">Tesla!</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Наш сайт предлагает обучение в автошколе — Вектор. Запишитесь на бесплатный тест-драйв: бесплатный час теории и занятие по вождению на автодроме.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="xl">
                Записаться на обучение
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                <Play className="w-5 h-5" />
                Бесплатный тест-драйв
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-black text-gradient">50+</div>
                <div className="text-sm text-muted-foreground">Автомобилей</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-black text-gradient">7</div>
                <div className="text-sm text-muted-foreground">Автодромов</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-black text-gradient">32</div>
                <div className="text-sm text-muted-foreground">Инструктора</div>
              </div>
            </div>
          </div>

          {/* Right Content - Cars */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Tesla Image */}
              <img 
                src="https://vector23.ru/assets/cache_image/assets/components/modxsite/templates/template/img/studybanner042025/tesla_0x0_f58.webp"
                alt="Tesla"
                className="w-full max-w-lg mx-auto animate-float drop-shadow-2xl"
              />
              
              {/* Car Image */}
              <img 
                src="https://vector23.ru/assets/cache_image/assets/components/modxsite/templates/template/img/studybanner042025/car_0x0_f58.webp"
                alt="Автомобиль"
                className="absolute bottom-0 right-0 w-2/3 animate-float drop-shadow-2xl"
                style={{ animationDelay: '1s' }}
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute top-10 right-10 glass-effect rounded-2xl p-4 border border-border">
              <div className="text-sm text-muted-foreground">Первый взнос</div>
              <div className="text-2xl font-black text-primary">5 000 ₽</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
