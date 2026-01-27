import { Car, Shield, Users, Clock, BookOpen, Award } from "lucide-react";

const features = [
  {
    icon: Car,
    title: "50+ современных авто",
    description: "Автомобили не старше 3 лет, включая Tesla"
  },
  {
    icon: Shield,
    title: "Полное сопровождение",
    description: "Поддержка при сдаче экзаменов ГИБДД"
  },
  {
    icon: Users,
    title: "32 инструктора",
    description: "Выберите своего эксперта по вождению"
  },
  {
    icon: Clock,
    title: "196 часов обучения",
    description: "138 часов теории, 58 часов практики"
  },
  {
    icon: BookOpen,
    title: "Учебные материалы",
    description: "2 учебника и год безлимитной теории"
  },
  {
    icon: Award,
    title: "Эксклюзивные лекции",
    description: "Курс по дорожно-транспортным происшествиям"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Почему выбирают <span className="text-gradient">Вектор</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы обучаем вождению с 2012 года. Более 12 000 выпускников, 55 сотрудников и 7 автодромов к вашим услугам.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group card-gradient rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl yellow-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
