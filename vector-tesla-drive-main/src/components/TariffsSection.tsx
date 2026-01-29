import { Button } from "./ui/button";
import { Clock, Zap, Shield, RefreshCw, Star, ArrowRight } from "lucide-react";

const tariffs = [
  {
    icon: Clock,
    name: "Стандарт",
    duration: "2 месяца",
    description: "Доступная цена, спокойный темп",
    popular: false
  },
  {
    icon: Zap,
    name: "Ускоренный",
    duration: "1.5 месяца",
    description: "Максимально быстрое обучение",
    popular: false
  },
  {
    icon: Shield,
    name: "Антистрах",
    duration: "уверенное вождение",
    description: "Для тех, кто боится дороги",
    popular: true
  },
  {
    icon: RefreshCw,
    name: "Освежить навыки",
    duration: "3–5 занятий",
    description: "Для тех, у кого уже есть права",
    popular: false
  },
  {
    icon: Star,
    name: "Tesla-пакет",
    duration: "премиальное обучение",
    description: "Комфорт и топовый инструктор",
    popular: false
  }
];

const TariffsSection = () => {
  return (
    <section className="py-24 hero-gradient" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Выберите подходящий{" "}
            <span className="text-gradient">формат обучения</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            У нас есть программы для любых целей и темпа обучения
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {tariffs.map((tariff, index) => (
            <div 
              key={index}
              className={`card-gradient rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                tariff.popular 
                  ? 'border-primary/50 relative overflow-hidden' 
                  : 'border-border hover:border-primary/30'
              }`}
            >
              {tariff.popular && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold yellow-gradient text-primary-foreground">
                    Популярный
                  </span>
                </div>
              )}

              <div className="w-14 h-14 rounded-xl yellow-gradient flex items-center justify-center mb-4">
                <tariff.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              <h3 className="text-xl font-bold mb-1">«{tariff.name}»</h3>
              <div className="text-sm text-primary font-medium mb-3">{tariff.duration}</div>
              <p className="text-muted-foreground text-sm">{tariff.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl">
            Подобрать тариф
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="heroOutline" size="xl">
            Рассчитать стоимость
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TariffsSection;
