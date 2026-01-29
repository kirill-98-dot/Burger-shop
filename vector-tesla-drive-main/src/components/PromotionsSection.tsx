import { Button } from "./ui/button";
import { CreditCard, Building2, Banknote, Stethoscope, ArrowRight } from "lucide-react";

const installmentOptions = [
  { icon: Building2, title: "От автошколы", description: "Беспроцентная рассрочка" },
  { icon: CreditCard, title: "От банков-партнёров", description: "Удобные условия кредитования" },
  { icon: Banknote, title: "Первый взнос", description: "От 5 000 ₽" }
];

const PromotionsSection = () => {
  return (
    <section className="py-24 hero-gradient" id="promotions">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Акции и{" "}
            <span className="text-gradient">рассрочка</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Сделаем обучение доступным для каждого
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Installment options */}
            <div className="card-gradient rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-bold mb-6">Беспроцентная рассрочка:</h3>
              <div className="space-y-4">
                {installmentOptions.map((option, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl yellow-gradient flex items-center justify-center flex-shrink-0">
                      <option.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold">{option.title}</div>
                      <div className="text-sm text-muted-foreground">{option.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Medical commission */}
            <div className="card-gradient rounded-2xl p-8 border border-primary/30 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl yellow-gradient flex items-center justify-center">
                    <Stethoscope className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Медкомиссия</h3>
                    <div className="text-3xl font-black text-gradient">-50%</div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Прохождение всего за 30 минут со скидкой 50% для наших учеников
                </p>

                <div className="p-4 rounded-xl bg-primary/10 border border-primary/30">
                  <div className="text-sm text-center">
                    💡 Можно начать обучение без медицинской справки
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="xl">
              Узнать условия
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;
