import { Check, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const benefits = [
  "138 часов теории, 58 часов практики",
  "4 часа на экзамены",
  "2 учебника в комплекте",
  "1 год безлимитного посещения теории",
  "Курс психологической подготовки",
  "Курс медицинской подготовки",
  "Приём без медицинской справки",
  "Сопровождение при сдаче экзаменов ГИБДД",
  "Обучение на АКПП и МКПП",
  "Полное сопровождение в ГАИ"
];

const PricingSection = () => {
  return (
    <section className="py-24 bg-background" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Стоимость <span className="text-gradient">обучения</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Начните обучение уже сегодня с первым взносом всего 5 000 рублей
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-gradient rounded-3xl p-8 md:p-12 border-2 border-primary/30 relative overflow-hidden">
            {/* Glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10">
                <div>
                  <div className="text-sm text-primary font-medium mb-2">Категория B (АКПП-МКПП)</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl md:text-6xl font-black text-gradient">53 400</span>
                    <span className="text-2xl font-bold text-muted-foreground">₽</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    + расходы на ТО и ГСМ в Краснодаре
                  </p>
                </div>

                <div className="glass-effect rounded-2xl p-6 text-center">
                  <div className="text-sm text-muted-foreground mb-1">Первый взнос</div>
                  <div className="text-3xl font-black text-primary">5 000 ₽</div>
                  <div className="text-xs text-muted-foreground mt-1">и начинайте учиться</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full yellow-gradient flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl">
                  Записаться на обучение
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="heroOutline" size="xl">
                  Получить консультацию
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
