import FadeIn from "@/components/FadeIn";

const dates = [
  { day: "Pi", date: "13.3.2026", city: "Dreien - CH", event: "Konzert", time: "20:00", place: "Restaurant Post", fb: "https://www.facebook.com/events/796953796211591/" },
  { day: "So", date: "14.3.2026", city: "Matten (bei Interlaken) - CH", event: "6. Nacht der Blasmusik", time: "17:00", place: "Kirchgemeindehaus Matten", fb: "https://fb.me/e/5kMe0lYoh" },
  { day: "So", date: "11.4.2026", city: "Hodonín - CZ", event: "Muzikantský ples", time: "19:00", place: "Dům kultury Hodonín", fb: "https://www.facebook.com/events/1815154366033279" },
  { day: "Št", date: "30.4.2026", city: "Drietoma - SK", event: "Stavanie mája", time: "18:30", place: "Futbalové ihrisko", fb: "" },
  { day: "So", date: "23.5.2026", city: "Bošáca - SK", event: "Koncert - Deň otvorených dverí", time: "11:00", place: "Polnohosp. družstvo Bošáca", fb: "" },
];

const Terminy = () => {
  return (
    <div className="section-padding">
      <div className="section-container">
        <FadeIn>
          <div className="divider-ornament mb-6" />
          <h1 className="heading-display text-center mb-4">Termíny</h1>
          <p className="text-body text-center mb-10">
            Naše najbližšie termíny nájdete aj na{" "}
            <a href="https://www.facebook.com/Drietomanka/events" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:text-primary/80 transition-colors">
              Facebooku
            </a>.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-body">
              <thead>
                <tr className="border-b-2 border-primary/20">
                  <th className="py-3 px-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Deň</th>
                  <th className="py-3 px-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Dátum</th>
                  <th className="py-3 px-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Mesto/Obec</th>
                  <th className="py-3 px-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Podujatie</th>
                  <th className="py-3 px-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Čas</th>
                  <th className="py-3 px-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Miesto</th>
                  <th className="py-3 px-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Info</th>
                </tr>
              </thead>
              <tbody>
                {dates.map((row, i) => (
                  <tr key={i} className="border-b border-border hover:bg-secondary/50 transition-colors">
                    <td className="py-3 px-4 font-semibold">{row.day}</td>
                    <td className="py-3 px-4">{row.date}</td>
                    <td className="py-3 px-4">{row.city}</td>
                    <td className="py-3 px-4">{row.event}</td>
                    <td className="py-3 px-4">{row.time}</td>
                    <td className="py-3 px-4 text-sm">{row.place}</td>
                    <td className="py-3 px-4">
                      {row.fb && (
                        <a href={row.fb} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold text-sm hover:text-primary/80 transition-colors">
                          FB
                        </a>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Terminy;
