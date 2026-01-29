import { Button } from "./ui/button";
import { Car, Shield, ArrowRight } from "lucide-react";

const trips = [
  {
    number: 1,
    title: "Поездка №1 — инструктор рядом",
    description: "Выезжаем на тихие улицы"
  },
  {
    number: 2,
    title: "Поездка №2 — маршруты вашего района",
    description: "Разбор сложных участков"
  },
  {
    number: 3,
    title: "Поездка №3 — парковка, плотный поток",
    description: "Перекрёстки и сложные манёвры"
  }
];

const skills = [
  "Чувствование габаритов",
  "Страх потока",
  "Парковку в дворах",
  "Манёвры на круговых",
  "Ситуации, вызывающие панику"
];

const AntiFearSection = () => {
  return (
    <section className="py-24 bg-background" id="antifear">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Боишься садиться за руль один?{" "}
            <span className="text-gradient">Мы решаем проблему полностью</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            95% новичков боятся ехать в первый раз самостоятельно. У нас это встроено в программу.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Program badge */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Shield className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-xl md:text-2xl font-bold">
              Программа «Антистрах: первые 3 самостоятельные поездки на своей машине»
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Trips */}
            <div className="card-gradient rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Car className="w-6 h-6 text-primary" />
                Что включено:
              </h3>
              <div className="space-y-4">
                {trips.map((trip) => (
                  <div 
                    key={trip.number}
                    className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full yellow-gradient flex items-center justify-center flex-shrink-0 font-bold text-primary-foreground">
                      {trip.number}
                    </div>
                    <div>
                      <div className="font-semibold">{trip.title}</div>
                      <div className="text-sm text-muted-foreground">{trip.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="card-gradient rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-bold mb-6">Отрабатываем:</h3>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl bg-primary/10 border border-primary/30">
                <p className="text-sm text-center font-medium">
                  🏆 Такой программы нет ни у одной автошколы в регионе
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button variant="hero" size="xl">
              Хочу убрать страх вождения
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AntiFearSection;
