import { Users, Car, MapPin, Briefcase, Calendar, Star, Zap, Clock, Monitor, Building, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Users, value: "12 000+", label: "учеников" },
  { icon: Car, value: "50+", label: "автомобилей" },
  { icon: MapPin, value: "7", label: "автодромов" },
  { icon: Briefcase, value: "55", label: "профессионалов" },
  { icon: Calendar, value: "с 2012", label: "года работаем" }
];

const features = [
  { icon: ShieldCheck, text: "Уникальная программа «Антистрах» — снимаем страх дороги" },
  { icon: Zap, text: "Обучение на Tesla — единственная школа в регионе" },
  { icon: Clock, text: "Теоретические занятия можно посещать ещё год после выпуска" },
  { icon: Building, text: "Можно ходить в разные филиалы и группы в процессе обучения" },
  { icon: Star, text: "Начинаем обучение сразу — не ждём набора" },
  { icon: Monitor, text: "Еженедельные онлайн-тесты и доступ к урокам 24/7" },
  { icon: ShieldCheck, text: "Полное сопровождение в ГИБДД" }
];

const WhyUsSection = () => {
  return (
    <section className="py-24 bg-background" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Почему <span className="text-gradient">нас выбирают</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Цифры и факты, которые говорят сами за себя
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="card-gradient rounded-2xl p-6 border border-border text-center hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl yellow-gradient flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-2xl md:text-3xl font-black text-gradient">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Unique features */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-8">Наши уникальные отличия:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm md:text-base">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
