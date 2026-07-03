interface ServiceHeroProps {
  eyebrow: string;
  title: string;
  id?: string;
  image: string;
  imageAlt?: string;
}

export function ServiceHero({ eyebrow, title, id, image }: ServiceHeroProps) {
  return (
    <section id={id} className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 bg-[#1B4375] overflow-hidden">
      {/* Background image with fixed parallax effect */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          opacity: 0.55,
        }}
        aria-hidden="true"
      />
      {/* Gradient overlay — only left side for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1B4375]/90 via-[#1B4375]/50 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF7F00]/40 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="block w-10 h-[3px] bg-[#FF7F00]" />
          <span className="font-[family-name:var(--font-barlow)] text-xs font-bold uppercase tracking-[0.18em] text-[#FF7F00]">
            {eyebrow}
          </span>
        </div>
        <h1
          className="font-[family-name:var(--font-barlow)] font-black uppercase leading-none text-white max-w-4xl"
          style={{ fontSize: "clamp(36px, 5.5vw, 72px)", letterSpacing: "-0.01em" }}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}
