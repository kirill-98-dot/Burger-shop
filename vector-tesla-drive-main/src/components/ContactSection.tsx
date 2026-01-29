import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <section className="py-24 bg-background" id="contacts">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Свяжитесь с <span className="text-gradient">нами</span>
            </h2>
            <p className="text-muted-foreground mb-10">
              Готовы начать обучение? Свяжитесь с нами любым удобным способом или оставьте заявку.
            </p>

            <div className="space-y-6">
              <a 
                href="tel:88619446600" 
                className="flex items-center gap-4 p-4 card-gradient rounded-xl border border-border hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 yellow-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Телефон</div>
                  <div className="text-lg font-semibold">8 (861) 944 66 00</div>
                </div>
              </a>

              <a 
                href="tel:88619447171" 
                className="flex items-center gap-4 p-4 card-gradient rounded-xl border border-border hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 yellow-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Телефон</div>
                  <div className="text-lg font-semibold">8 (861) 944 71 71</div>
                </div>
              </a>

              <a 
                href="mailto:krasnodar@vector23.ru" 
                className="flex items-center gap-4 p-4 card-gradient rounded-xl border border-border hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 yellow-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="text-lg font-semibold">krasnodar@vector23.ru</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 card-gradient rounded-xl border border-border">
                <div className="w-12 h-12 yellow-gradient rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Город</div>
                  <div className="text-lg font-semibold">Краснодар</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="card-gradient rounded-3xl p-8 border border-border">
            <h3 className="text-2xl font-bold mb-6">Записаться на обучение</h3>
            
            <form className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Ваше имя</label>
                <input 
                  type="text"
                  className="w-full h-12 px-4 rounded-xl bg-secondary border border-border focus:border-primary outline-none transition-colors"
                  placeholder="Введите имя"
                />
              </div>
              
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Телефон</label>
                <input 
                  type="tel"
                  className="w-full h-12 px-4 rounded-xl bg-secondary border border-border focus:border-primary outline-none transition-colors"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                <input 
                  type="email"
                  className="w-full h-12 px-4 rounded-xl bg-secondary border border-border focus:border-primary outline-none transition-colors"
                  placeholder="Введите email"
                />
              </div>

              <Button variant="hero" size="lg" className="w-full mt-4">
                Отправить заявку
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
