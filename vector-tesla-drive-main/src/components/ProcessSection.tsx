import { Button } from "./ui/button";
import { ArrowRight, ClipboardList, PlayCircle, BookOpen, Car, Award, ShieldCheck, Sparkles } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Оставляете заявку", description: "Заполните форму или позвоните нам" },
  { icon: PlayCircle, title: "Начинаем обучение сразу", description: "Не ждём набора группы" },
  { icon: BookOpen, title: "138 часов теории", description: "Очно или онлайн — на выбор" },
  { icon: Car, title: "58 часов практики", description: "На современных автомобилях" },
  { icon: Award, title: "Внутренний экзамен", description: "Проверяем готовность" },
  { icon: ShieldCheck, title: "Экзамен в ГИБДД", description: "Сопровождаем и поддерживаем" },
  { icon: Sparkles, title: "Программа «Антистрах»", description: "По желанию — для уверенности" }
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-background" id="process">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Обучение:{" "}
            <span className="text-gradient">как проходит</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Простой и понятный путь к вашим правам
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
            
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative flex items-center gap-6 mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Step number and icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full yellow-gradient flex items-center justify-center shadow-lg">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 card-gradient rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 ${
                  index % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'
                } md:max-w-[calc(50%-3rem)]`}>
                  <div className="text-xs text-primary font-medium mb-1">Шаг {index + 1}</div>
                  <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="xl">
              Начать обучение
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
