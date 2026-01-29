import { Button } from "./ui/button";
import { Gift, BookOpen, Car, MessageSquare, ArrowRight } from "lucide-react";

const includes = [
  { icon: BookOpen, text: "1 час теории (ПДД)" },
  { icon: Car, text: "1 занятие вождения на автодроме" },
  { icon: MessageSquare, text: "Разбор ошибок + рекомендация по уровню" }
];

const TestDriveSection = () => {
  return (
    <section className="py-24 bg-background" id="testdrive">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="card-gradient rounded-3xl p-8 md:p-12 border-2 border-primary/30 relative overflow-hidden">
            {/* Glow effects */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-2xl yellow-gradient flex items-center justify-center">
                  <Gift className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
                Проверьте, как мы учим —{" "}
                <span className="text-gradient">бесплатно</span>
              </h2>
              
              <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
                Запишитесь на бесплатный тест-драйв и оцените качество обучения без обязательств
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {includes.map((item, index) => (
                  <div 
                    key={index}
                    className="flex flex-col items-center text-center p-6 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button variant="hero" size="xl">
                  Записаться на бесплатный тест-драйв
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestDriveSection;
