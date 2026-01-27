import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 yellow-gradient rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-black text-lg">В</span>
            </div>
            <div>
              <h2 className="text-lg font-bold">ВЕКТОР</h2>
              <p className="text-xs text-muted-foreground">Автошкола с 2012 года</p>
            </div>
          </div>

          {/* Contacts */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a href="tel:88619446600" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" />
              8 (861) 944 66 00
            </a>
            <a href="tel:88619447171" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" />
              8 (861) 944 71 71
            </a>
            <a href="mailto:krasnodar@vector23.ru" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" />
              krasnodar@vector23.ru
            </a>
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2024 Автошкола Вектор. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
