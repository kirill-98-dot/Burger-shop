import { Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={logo} alt="Вектор Автошкола" className="h-10" />
          </a>

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
