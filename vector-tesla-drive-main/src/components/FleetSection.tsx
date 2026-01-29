import { Button } from "./ui/button";
import { ArrowRight, Check } from "lucide-react";

const features = [
  "Автомобили не старше 3 лет",
  "МКПП и АКПП — на выбор",
  "Tesla — для тех, кто хочет премиум-обучение",
  "Автомобили в идеальном техническом состоянии",
  "Удобные салоны, климат-контроль, камеры"
];

const FleetSection = () => {
  return (
    <section className="py-24 bg-background" id="fleet">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            <span className="text-gradient">50+ современных авто</span> + Tesla
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Обучайтесь на комфортных и современных автомобилях
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Images */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="https://vector23.ru/assets/cache_image/assets/components/modxsite/templates/template/img/studybanner042025/tesla_0x0_f58.webp"
                  alt="Tesla"
                  className="w-full animate-float"
                />
              </div>
              <img 
                src="https://vector23.ru/assets/cache_image/assets/components/modxsite/templates/template/img/studybanner042025/car_0x0_f58.webp"
                alt="Автомобиль"
                className="absolute -bottom-4 -right-4 w-1/2 animate-float drop-shadow-2xl"
                style={{ animationDelay: '1s' }}
              />
            </div>

            {/* Features */}
            <div className="card-gradient rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-bold mb-6">Наш автопарк:</h3>
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full yellow-gradient flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button variant="hero" size="lg" className="w-full">
                Выбрать авто и инструктора
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
