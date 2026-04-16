import FadeIn from "@/components/FadeIn";

const albums = [
  { year: "2023", type: "CD", title: "Nech aj jeseň májom je" },
  { year: "2018", type: "DVD", title: "Šťastné a veselé" },
  { year: "2017", type: "CD", title: "Šťastné a veselé" },
  { year: "2016", type: "CD", title: "Drietomskí muzikanti vyhrávajú ... 150 rokov" },
  { year: "2016", type: "DVD", title: "Drietomskí muzikanti vyhrávajú ... 150 rokov" },
  { year: "2014", type: "CD", title: "Brass Duel" },
  { year: "2013", type: "DVD", title: "Kapela veselá" },
  { year: "2013", type: "CD", title: "Immer flink und fröhlich" },
  { year: "2012", type: "CD", title: "Rodičom" },
  { year: "2009", type: "CD", title: "Premiera" },
  { year: "2008", type: "CD", title: "Pravá láska" },
  { year: "2007", type: "CD", title: "Orchestral 2" },
  { year: "2005", type: "CD", title: "Orchestral" },
  { year: "2002", type: "CD", title: "Zábudlivý šuhaj" },
  { year: "2000", type: "CD", title: "Veselosť je medecína" },
];

const Diskografia = () => {
  return (
    <div className="section-padding">
      <div className="section-container max-w-4xl">
        <FadeIn>
          <div className="divider-ornament mb-6" />
          <h1 className="heading-display text-center mb-10">Diskografia</h1>
        </FadeIn>

        <div className="space-y-3">
          {albums.map((album, i) => (
            <FadeIn key={`${album.year}-${album.type}-${album.title}`} delay={i * 0.03}>
              <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded hover:bg-secondary transition-colors group">
                <span className="font-display text-2xl font-bold text-primary min-w-[60px]">
                  {album.year}
                </span>
                <span className="px-2 py-0.5 text-xs font-body font-bold uppercase tracking-widest bg-accent text-accent-foreground rounded-sm">
                  {album.type}
                </span>
                <span className="font-body font-medium text-foreground">
                  {album.title}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Diskografia;
