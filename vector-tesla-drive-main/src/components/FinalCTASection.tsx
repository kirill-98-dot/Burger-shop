import { Button } from "./ui/button";
import { ArrowRight, HeartHandshake, Shield, Users, GraduationCap } from "lucide-react";

const guarantees = [
  { icon: Users, text: "Не останетесь один на один после экзамена" },
  { icon: Shield, text: "Поможем побороть страх" },
  { icon: HeartHandshake, text: "Поддержим на каждом этапе" },
  { icon: GraduationCap, text: "Научим водить, а не просто сдавать" }
];

const FinalCTASection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="card-gradient rounded-3xl p-8 md:p-12 border-2 border-primary/30 relative overflow-hidden">
            {/* Glow effects */}
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
                Сомневаетесь?{" "}
                <span className="text-gradient">Мы гарантируем результат</span>
              </h2>
              
              <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
                С нами вы получите не просто права, а уверенность за рулём
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {guarantees.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg yellow-gradient flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button variant="hero" size="xl">
                  Получить консультацию
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

export default FinalCTASection;
