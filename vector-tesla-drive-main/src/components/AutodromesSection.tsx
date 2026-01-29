import { Button } from "./ui/button";
import { MapPin, ArrowRight, CheckCircle } from "lucide-react";

const autodromes = [
  { name: "Автодром Центр", address: "ул. Красная, 150" },
  { name: "Автодром Юбилейный", address: "ул. Уральская, 75" },
  { name: "Автодром Фестивальный", address: "ул. Сормовская, 3" },
  { name: "Автодром Гидростроителей", address: "ул. Автолюбителей, 1/1" },
  { name: "Автодром Энка", address: "ул. Красных Партизан, 1" },
  { name: "Автодром КМР", address: "ул. Тюляева, 2" },
  { name: "Автодром Пашковский", address: "ул. Бершанской, 150" }
];

const benefits = [
  "Каждый автодром оборудован под полный набор упражнений",
  "Вы можете менять площадку в любой момент",
  "Тренировки ближе к дому — экономия времени",
  "Без очередей и ожидания"
];

const AutodromesSection = () => {
  return (
    <section className="py-24 hero-gradient" id="autodromes">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            <span className="text-gradient">7 автодромов</span> — максимум удобства
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Вы тренируетесь ближе к дому, без очередей и времени в пробках
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Benefits */}
          <div className="card-gradient rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-bold mb-6">Преимущества:</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div className="card-gradient rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-bold mb-6">Наши площадки:</h3>
            <div className="space-y-3">
              {autodromes.map((autodrome, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full yellow-gradient flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">{autodrome.name}</div>
                    <div className="text-xs text-muted-foreground">{autodrome.address}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="xl">
            Выбрать ближайший автодром
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AutodromesSection;
