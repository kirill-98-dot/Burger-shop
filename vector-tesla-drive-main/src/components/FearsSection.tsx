import { AlertTriangle, CheckCircle } from "lucide-react";

const fears = [
  {
    fear: "Не чувствую габариты",
    solution: "Специальные упражнения на 7 уникальных автодромах"
  },
  {
    fear: "Боюсь ездить по городу",
    solution: "Постепенный рост маршрутов + инструктор, обученный работе с тревожностью"
  },
  {
    fear: "Страшно парковаться",
    solution: "Урок «Парковка за 45 минут» + разбор ошибок"
  },
  {
    fear: "Паника в неожиданной ситуации",
    solution: "Эксклюзивные лекции по ДТП с реальными кейсами"
  },
  {
    fear: "Боюсь быть «одним» после экзамена",
    solution: "Программа «Антистрах» + поддержка после выпуска в течение года"
  }
];

const FearsSection = () => {
  return (
    <section className="py-24 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Страхи новичков и{" "}
            <span className="text-gradient">наши решения</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы понимаем каждый страх и знаем, как его преодолеть
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {fears.map((item, index) => (
            <div 
              key={index}
              className="group card-gradient rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-4 items-center">
                {/* Fear */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-destructive/20 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                      Страх №{index + 1}
                    </div>
                    <div className="font-bold text-lg">{item.fear}</div>
                  </div>
                </div>

                {/* Solution */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                      Решение
                    </div>
                    <div className="text-muted-foreground">{item.solution}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FearsSection;
