import { Play, Users, Award } from "lucide-react";
import { Button } from "./ui/button";

const ExpertSection = () => {
  return (
    <section className="py-24 hero-gradient relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video */}
          <div className="relative group">
            <div className="aspect-video rounded-2xl overflow-hidden border-2 border-border">
              <iframe
                src="https://rutube.ru/play/embed/8383d87ec69c02ae9d9ba19534e30566"
                className="w-full h-full"
                frameBorder="0"
                allow="clipboard-write; autoplay"
                allowFullScreen
              />
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-3xl -z-10 group-hover:bg-primary/30 transition-colors duration-500" />
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Эксклюзивный курс</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Уникальное занятие с{" "}
              <span className="text-gradient">экспертом по ДТП</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Выберите своего инструктора из 32 опытных профессионалов. Наши эксперты проведут эксклюзивные лекции по дорожно-транспортным происшествиям.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="card-gradient rounded-xl p-4 border border-border">
                <Users className="w-8 h-8 text-primary mb-2" />
                <div className="text-2xl font-bold">12 000+</div>
                <div className="text-sm text-muted-foreground">Выпускников</div>
              </div>
              <div className="card-gradient rounded-xl p-4 border border-border">
                <Award className="w-8 h-8 text-primary mb-2" />
                <div className="text-2xl font-bold">12 лет</div>
                <div className="text-sm text-muted-foreground">Опыта работы</div>
              </div>
            </div>

            <Button variant="hero" size="lg">
              Записаться к эксперту
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;
