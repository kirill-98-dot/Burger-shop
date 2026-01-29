import { Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/logo.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src={logo} alt="Вектор Автошкола" className="h-10" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">О нас</a>
          <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Цены</a>
          <a href="#reviews" className="text-muted-foreground hover:text-primary transition-colors">Отзывы</a>
          <a href="#contacts" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex flex-col items-end">
            <a href="tel:88619446600" className="text-foreground font-semibold hover:text-primary transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              8 (861) 944 66 00
            </a>
            <a href="mailto:krasnodar@vector23.ru" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" />
              krasnodar@vector23.ru
            </a>
          </div>
          <Button variant="hero" size="sm">
            Записаться
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
