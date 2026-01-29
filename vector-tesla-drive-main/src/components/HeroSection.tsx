import { Button } from "./ui/button";
import { ArrowRight, Check } from "lucide-react";

const benefits = [
  "Уникальный курс «Уверенный водитель» — работаем со страхом и неуверенностью",
  "Бесплатный тест-драйв: теория + час вождения",
  "7 автодромов по городу — тренировки ближе к дому",
  "50+ новых автомобилей, включая Tesla",
  "Начало обучения сразу — не ждём группу"
];

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
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6">
              Научим водить уверенно.{" "}
              <span className="text-gradient">Убираем страх за рулём</span> и готовим к реальной дороге, а не только к экзамену
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Первые самостоятельные поездки — вместе с инструктором. 7 автодромов, обучение на Tesla, быстрый старт, поддержка до результата.
            </p>

            {/* Benefits list */}
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full yellow-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <span className="text-foreground text-sm md:text-base">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                Записаться на обучение
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Бесплатный тест-драйв
              </Button>
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
