import FadeIn from "@/components/FadeIn";
import { Music, PartyPopper, Tent, Guitar, Heart, Cake, Megaphone } from "lucide-react";

const offerings = [
  {
    icon: Music,
    title: "Koncerty",
    desc: "Radi vyst\u00FApime a uv\u00EDtame poslucha\u010Dov na na\u0161ich koncertoch, o ktor\u00FDch sa dozviete v podstr\u00E1nke \u201Eterm\u00EDny.\u201C",
  },
  {
    icon: PartyPopper,
    title: "Plesy",
    desc: "\u201EVe\u010Dne mlad\u00E9\u201C \u013Eudov\u00E9 skladby, tradi\u010Dn\u00E9 kroje, mlad\u00FD kolekt\u00EDv \u013Eud\u00ED, pr\u00EDjemn\u00E1 atmosf\u00E9ra, tanec \u2013 toto a e\u0161te viac za\u017Eijete na plesoch s Drietomankou.",
  },
  {
    icon: Tent,
    title: "Festivaly",
    desc: "Festivaly s\u00FA na\u0161ou ob\u013E\u00FAbenou koncertnou destin\u00E1ciou; prezentujeme \u201Evlastn\u00FA tv\u00E1r\u201C kapely a radi sa stretneme a in\u0161pirujeme muzikantsk\u00FDmi kolegami.",
  },
  {
    icon: Guitar,
    title: "Tane\u010Dn\u00E9 z\u00E1bavy",
    desc: "Prav\u00E1 slovensk\u00E1 veselica s Drietomankou pon\u00FAka skladby o \u017Eivote, l\u00E1ske, nerestiach, ale i radostiach be\u017En\u00E9ho \u017Eivota.",
  },
  {
    icon: Heart,
    title: "Svadby",
    desc: "Jeden z najkraj\u0161\u00EDch dn\u00ED \u017Eivota dvoch mlad\u00FDch \u013Eud\u00ED vieme spr\u00EDjemni\u0165 nielen tradi\u010Dn\u00FDmi \u013Eudov\u00FDmi skladbami, ale aj rozmanit\u00FDm reperto\u00E1rom pre v\u0161etky vekov\u00E9 kateg\u00F3rie.",
  },
  {
    icon: Cake,
    title: "Oslavy narodenin",
    desc: "Radostn\u00E9 \u201E\u017Eivij\u00F3\u201C v podan\u00ED Drietomanky a celove\u010Dern\u00E1 z\u00E1bava so skladbami na \u017Eelanie pre osl\u00E1venca.",
  },
  {
    icon: Megaphone,
    title: "Sl\u00E1vnostn\u00E9 fanf\u00E1ry",
    desc: "Kvintet kapely pon\u00FAka umeleck\u00FD prednes fanf\u00E1r pri sl\u00E1vnostn\u00FDch otvoreniach podujat\u00ED.",
  },
];

const Ponuka = () => {
  return (
    <div className="section-padding">
      <div className="section-container">
        <FadeIn>
          <div className="divider-ornament mb-6" />
          <h1 className="heading-display text-center mb-4">Ponuka</h1>
          <p className="text-body text-center max-w-3xl mx-auto mb-12">
            Reperto&aacute;r Drietomanky obsahuje prevažne ľudov&eacute; piesne z cel&eacute;ho Slovenska, Čiech a z Moravy. Ale obsahuje aj skladby modern&eacute;ho charakteru, orchestr&aacute;lne polky a valč&iacute;ky, s&oacute;lov&eacute; skladby a autorsk&eacute; skladby členov kapely.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05}>
              <div className="bg-secondary/50 p-6 rounded h-full">
                <item.icon className="text-accent mb-4" size={32} />
                <h3 className="heading-card mb-2">{item.title}</h3>
                <p className="text-body-sm">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ponuka;
