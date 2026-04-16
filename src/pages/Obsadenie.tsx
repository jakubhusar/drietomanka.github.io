import FadeIn from "@/components/FadeIn";

const sections = [
  {
    title: "Spev",
    members: [
      "Monika Múdra, Evka Michalcová, Jakub Husár, Renatka Husárová, Danka Birasová",
      "Kristínka Múdra, Adrián Múdry, Sonička Maradíková",
      "Janko Múdry ml.",
    ],
  },
  {
    title: "Krídlovka / Trubka",
    members: ["Tom Strnka, Adam Lagíň, Roman Mikláš, Jaro Múdry (kapelník)"],
  },
  {
    title: "Tenor / Barytón / Pozauna",
    members: ["Ľubomír Michalec, Ján Múdry"],
  },
  {
    title: "Klarinet",
    members: ["Michal Borot, Dominik Sedlák"],
  },
  {
    title: "Tuba / Bicie / Doprovod",
    members: ["Peter Zámečník, Ernest Kollár, Marek Kubáň, Jozef Spaček, Lubomír Gašparík"],
  },
  {
    title: "Majster zvuku",
    members: ["Milan Bátovský"],
  },
];

const Obsadenie = () => {
  return (
    <div className="section-padding">
      <div className="section-container max-w-4xl">
        <FadeIn>
          <div className="divider-ornament mb-6" />
          <h1 className="heading-display text-center mb-10">Obsadenie</h1>
        </FadeIn>

        <div className="space-y-8">
          {sections.map((section, i) => (
            <FadeIn key={section.title} delay={i * 0.05}>
              <div className="bg-secondary/50 p-6 rounded">
                <h2 className="heading-card text-primary mb-3">{section.title}</h2>
                {section.members.map((m, j) => (
                  <p key={j} className="text-body-sm">{m}</p>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Obsadenie;
