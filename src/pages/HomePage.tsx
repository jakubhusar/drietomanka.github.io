import { Link } from "react-router-dom";
import FadeIn from "@/components/FadeIn";
import heroBand from "@/assets/hero-band.jpg";

const HomePage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <img
          src={heroBand}
          alt="Dychová hudba Drietomanka v tradičných krojoch"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-16 md:pb-24 text-center px-4">
          <FadeIn>
            <h1 className="heading-display text-primary-foreground mb-3">
              Dychová hudba Drietomanka
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="font-body text-lg md:text-xl text-primary-foreground/90 max-w-2xl mb-8">
              Krojovaná dychová hudba z moravsko-slovenského pomedzia, založená v roku 1866
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link
                to="/kontakt"
                className="px-6 py-3 bg-primary text-primary-foreground font-body font-semibold uppercase tracking-wider text-sm hover:bg-primary/90 transition-colors"
              >
                Objednajte nás
              </Link>
              <Link
                to="/terminy"
                className="px-6 py-3 border-2 border-primary-foreground text-primary-foreground font-body font-semibold uppercase tracking-wider text-sm hover:bg-primary-foreground/10 transition-colors"
              >
                Najbližšie termíny
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About snippet */}
      <section className="section-padding">
        <div className="section-container text-center">
          <FadeIn>
            <div className="divider-ornament mb-6" />
            <h2 className="heading-section mb-6">Vitajte na stránke DH Drietomanka</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 text-left">
              <p className="text-body">
                Drietomanka je krojovaná dychová hudba z moravsko-slovenského pomedzia, založená v roku 1866 v obci Drietoma (pri Trenčíne).
              </p>
              <p className="text-body">
                Účinkuje na kultúrno-spoločenských podujatiach v rámci celého Slovenska a Českej republiky, avšak za posledných 20 rokov precestovala takmer celú Európu.
              </p>
              <p className="text-body">
                V súčasnej zostave kapely hrajú a spievajú temperamentní a veselí mladí ľudia, ktorých spája láska k hudbe a k ľudovej piesni.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2% z dane */}
      <section className="bg-secondary section-padding">
        <div className="section-container text-center">
          <FadeIn>
            <h2 className="heading-section mb-4">2% z dane pre DH Drietomanka</h2>
            <p className="text-body max-w-3xl mx-auto mb-6">
              Podporte kultúrne dedičstvo našich predkov a staňte sa v roku 2026 (zdaňovacie obdobie 2025) darcom 2 % z Vašich daní pre Dychovú hudbu Drietomanka!
            </p>
            <a
              href="https://www.slovensko.sk/sk/zivotne-situacie/zivotna-situacia/_ako-poukazat-2-z-dani/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground font-body font-semibold uppercase tracking-wider text-sm hover:bg-primary/90 transition-colors"
            >
              Postup krokov
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Upcoming dates preview */}
      <section className="section-padding">
        <div className="section-container">
          <FadeIn>
            <div className="text-center mb-10">
              <div className="divider-ornament mb-6" />
              <h2 className="heading-section">Najbližšie termíny</h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-body">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="py-3 px-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Dátum</th>
                    <th className="py-3 px-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Mesto</th>
                    <th className="py-3 px-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Podujatie</th>
                    <th className="py-3 px-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Čas</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { date: "13.3.2026", city: "Dreien, CH", event: "Konzert", time: "20:00" },
                    { date: "14.3.2026", city: "Matten, CH", event: "6. Nacht der Blasmusik", time: "17:00" },
                    { date: "11.4.2026", city: "Hodonín, CZ", event: "Muzikantský ples", time: "19:00" },
                    { date: "30.4.2026", city: "Drietoma, SK", event: "Stavanie mája", time: "18:30" },
                    { date: "23.5.2026", city: "Bošáca, SK", event: "Deň otvorených dverí", time: "11:00" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border hover:bg-secondary/50 transition-colors">
                      <td className="py-3 px-4 font-semibold">{row.date}</td>
                      <td className="py-3 px-4">{row.city}</td>
                      <td className="py-3 px-4">{row.event}</td>
                      <td className="py-3 px-4">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-center mt-8">
              <Link
                to="/terminy"
                className="font-body font-semibold text-primary hover:text-primary/80 uppercase tracking-wider text-sm transition-colors"
              >
                Zobraziť všetky termíny →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
