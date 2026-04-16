import { Facebook, Instagram, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Billing */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Fakturačné údaje</h3>
            <ul className="space-y-1 text-sm opacity-80 font-body">
              <li>Spolok Dychová hudba DRIETOMANKA</li>
              <li>913 03 Drietoma 534</li>
              <li>Slovensko</li>
              <li>IČO: 31203248</li>
              <li>IBAN: SK88 8330 0000 0022 0095 8482</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Kontakt</h3>
            <p className="text-sm opacity-80 font-body mb-2">kapelník a manažér</p>
            <p className="font-body font-semibold">Jaro Múdry</p>
            <div className="flex items-center gap-2 mt-2 text-sm opacity-80 font-body">
              <Phone size={14} />
              <span>+421 905 212 108</span>
            </div>
            <div className="flex items-center gap-2 mt-1 text-sm opacity-80 font-body">
              <Mail size={14} />
              <span>info@drietomanka.sk</span>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Sledujte nás</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/Drietomanka/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={22} />
              </a>
              <a
                href="https://www.instagram.com/drietomanka/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center text-xs opacity-60 font-body">
          © {new Date().getFullYear()} Dychová hudba Drietomanka. Všetky práva vyhradené.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
