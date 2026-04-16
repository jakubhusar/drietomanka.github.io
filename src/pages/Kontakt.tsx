import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { Send } from "lucide-react";

const Kontakt = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:info@drietomanka.sk?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Meno: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
  };

  return (
    <div className="section-padding">
      <div className="section-container max-w-2xl">
        <FadeIn>
          <div className="divider-ornament mb-6" />
          <h1 className="heading-display text-center mb-4">Kontakt a objednávky</h1>
          <p className="text-body text-center mb-10">
            Ak máte záujem o vystúpenie našej kapely, objednanie CD/DVD nosičov, alebo máte dotaz — kontaktujte nás prostredníctvom formulára nižšie.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-body text-sm font-semibold mb-1 text-foreground">Vaše meno</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors rounded"
              />
            </div>
            <div>
              <label className="block font-body text-sm font-semibold mb-1 text-foreground">E-mail</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors rounded"
              />
            </div>
            <div>
              <label className="block font-body text-sm font-semibold mb-1 text-foreground">Predmet</label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors rounded"
              />
            </div>
            <div>
              <label className="block font-body text-sm font-semibold mb-1 text-foreground">Správa</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors rounded resize-y"
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body font-semibold uppercase tracking-wider text-sm hover:bg-primary/90 transition-colors"
            >
              <Send size={16} />
              Odoslať
            </button>
          </form>
        </FadeIn>
      </div>
    </div>
  );
};

export default Kontakt;
